import { motion } from 'framer-motion'
import { ProductCard } from '@/components/products/ProductCard'
import type { Product } from '@/types/product'

interface ProductCatalogProps {
  products: Product[]
  loading: boolean
  error: string | null
  onAddToCart: (product: Product) => void
}

function LoadingGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-pulse space-y-5">
          <div className="aspect-[3/4] rounded-md bg-candora-200/70" />
          <div className="h-5 w-2/3 rounded-sm bg-candora-200/70" />
          <div className="h-4 w-full rounded-sm bg-candora-100" />
        </div>
      ))}
    </div>
  )
}

export function ProductCatalog({
  products,
  loading,
  error,
  onAddToCart,
}: ProductCatalogProps) {
  return (
    <section id="coleccion" className="bg-candora-100/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl md:mb-16"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-candora-olive">
            Colección
          </p>
          <h2 className="mt-4 text-balance text-3xl leading-tight text-candora-900 md:text-4xl lg:text-[2.6rem]">
            Piezas pensadas para transformar el ambiente en un refugio.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-candora-600 md:text-lg">
            Cada vela y cada sal aromática nace de un proceso cuidadoso: materias
            primas nobles, fragancias equilibradas y un diseño que respira calma.
          </p>
        </motion.div>

        {loading && <LoadingGrid />}

        {!loading && error && (
          <div className="rounded-md border border-candora-200 bg-candora-50 px-6 py-10 text-center shadow-soft">
            <p className="font-serif text-xl text-candora-900">
              La colección no está disponible
            </p>
            <p className="mt-2 text-sm text-candora-600">{error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="rounded-md border border-dashed border-candora-300 bg-candora-50 px-6 py-16 text-center">
            <p className="font-serif text-xl text-candora-900">
              Pronto habrá nuevas piezas
            </p>
            <p className="mt-2 text-sm text-candora-600">
              Estamos preparando la próxima edición de la colección.
            </p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
