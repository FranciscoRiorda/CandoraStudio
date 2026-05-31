import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ProductCatalog } from '@/components/sections/ProductCatalog'
import { Contact } from '@/components/sections/Contact'
import { CartDrawer } from '@/components/cart/CartDrawer'
import { useProducts } from '@/hooks/useProducts'
import { useCart } from '@/hooks/useCart'

function App() {
  const [cartOpen, setCartOpen] = useState(false)
  const { products, loading, error } = useProducts()
  const { items, addItem, removeItem, count, total } = useCart()

  const handleAddToCart = (product: Parameters<typeof addItem>[0]) => {
    addItem(product)
    setCartOpen(true)
  }

  return (
    <div className="min-h-screen bg-candora-50">
      <Header cartCount={count} onCartOpen={() => setCartOpen(true)} />

      <main>
        <Hero />
        <ProductCatalog
          products={products}
          loading={loading}
          error={error}
          onAddToCart={handleAddToCart}
        />
        <Contact />
      </main>

      <Footer />

      <CartDrawer
        open={cartOpen}
        onOpenChange={setCartOpen}
        items={items}
        count={count}
        total={total}
        onRemoveItem={removeItem}
      />
    </div>
  )
}

export default App
