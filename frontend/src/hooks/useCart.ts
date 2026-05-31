import { useCallback, useMemo, useState } from 'react'
import type { CartItem, Product } from '@/types/product'

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = useCallback((product: Product) => {
    if (!product.stock || product.stock <= 0) return

    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          price: Number(product.price),
          quantity: 1,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((productId: number) => {
    setItems((current) => current.filter((item) => item.id !== productId))
  }, [])

  const count = useMemo(
    () => items.reduce((total, item) => total + item.quantity, 0),
    [items]
  )

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [items]
  )

  return { items, addItem, removeItem, count, total }
}
