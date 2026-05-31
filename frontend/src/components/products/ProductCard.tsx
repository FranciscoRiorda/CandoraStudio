import { motion } from 'framer-motion'
import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Product } from '@/types/product'
import fallbackImage from '@/assets/candora/hero-candle-1.jpg'
import hoverImage from '@/assets/candora/hero-packaging-2.jpg'

interface ProductCardProps {
  product: Product
  index: number
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, index, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const outOfStock = product.stock <= 0
  const primaryImage = product.imageUrl || fallbackImage
  const secondaryImage = product.imageUrl ? hoverImage : hoverImage

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="relative overflow-hidden rounded-md bg-candora-100 shadow-soft">
        <div className="relative aspect-[3/4] overflow-hidden">
          <motion.img
            src={primaryImage}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            animate={{
              opacity: isHovered && !outOfStock ? 0 : 1,
              scale: isHovered ? 1.04 : 1,
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            src={secondaryImage}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
            animate={{
              opacity: isHovered && !outOfStock ? 1 : 0,
              scale: isHovered ? 1.04 : 1.02,
            }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />

          {outOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-candora-950/30 backdrop-blur-[1px]">
              <Badge variant="secondary" className="bg-candora-50/90">
                Agotado
              </Badge>
            </div>
          )}

          {!outOfStock && (
            <motion.div
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 bottom-0 p-4"
            >
              <div className="bg-gradient-to-t from-candora-950/35 to-transparent pb-1 pt-10">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full border-candora-50/20 bg-candora-50/95 text-candora-900 backdrop-blur-sm hover:bg-white"
                  onClick={() => onAddToCart(product)}
                >
                  <Plus className="h-3.5 w-3.5" />
                  Agregar al carrito
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      <div className="space-y-2 px-1 pt-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-serif text-xl leading-snug text-candora-900">
            {product.name}
          </h3>
          <p className="shrink-0 pt-0.5 font-sans text-sm font-medium tabular-nums text-candora-800">
            ${Number(product.price).toFixed(0)}
          </p>
        </div>
        {product.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-candora-600">
            {product.description}
          </p>
        )}
      </div>
    </motion.article>
  )
}
