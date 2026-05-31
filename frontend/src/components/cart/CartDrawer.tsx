import { motion, AnimatePresence } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import type { CartItem } from '@/types/product'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  items: CartItem[]
  count: number
  total: number
  onRemoveItem: (productId: number) => void
}

export function CartDrawer({
  open,
  onOpenChange,
  items,
  count,
  total,
  onRemoveItem,
}: CartDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col">
        <SheetHeader className="border-b border-candora-200 px-6 pb-5 pt-8 text-left">
          <SheetTitle>Tu selección</SheetTitle>
          <SheetDescription>
            {count === 0
              ? 'Aún no has agregado piezas a tu carrito.'
              : `${count} artículo${count === 1 ? '' : 's'} en tu carrito`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <p className="font-serif text-lg text-candora-800">
                Tu carrito está vacío
              </p>
              <p className="max-w-xs text-sm text-candora-600">
                Explora la colección y elige las piezas que acompañarán tu ritual.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              <AnimatePresence initial={false}>
                {items.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-md border border-candora-200 bg-white p-4 shadow-soft"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-serif text-base text-candora-900">
                          {item.name}
                        </p>
                        <p className="mt-1 text-sm tabular-nums text-candora-600">
                          {item.quantity} × ${item.price.toFixed(0)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-xs uppercase tracking-[0.12em] text-candora-500 transition-colors hover:text-candora-900"
                      >
                        Quitar
                      </button>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>

        <div className="border-t border-candora-200 px-6 py-6">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.14em] text-candora-600">
              Total
            </span>
            <span className="font-sans text-2xl font-medium tabular-nums text-candora-900">
              ${total.toFixed(0)}
            </span>
          </div>
          <Button
            className="w-full"
            variant="olive"
            disabled={items.length === 0}
          >
            Finalizar compra
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
