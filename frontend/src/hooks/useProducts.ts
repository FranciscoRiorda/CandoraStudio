import { useEffect, useState } from 'react'
import { fetchProducts } from '@/lib/api'
import type { Product } from '@/types/product'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    fetchProducts()
      .then((data) => {
        if (!cancelled) {
          setProducts(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error('Error al conectar con el backend:', err)
        if (!cancelled) {
          setError('No pudimos cargar la colección. Verifica que el backend esté activo.')
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { products, loading, error }
}
