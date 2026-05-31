import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#coleccion', label: 'Colección' },
  { href: '#contacto', label: 'Contacto' },
]

interface HeaderProps {
  cartCount: number
  onCartOpen: () => void
}

export function Header({ cartCount, onCartOpen }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40"
    >
      <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
        <div
          className={cn(
            'flex items-center justify-between rounded-sm border border-candora-200/60',
            'bg-candora-50/75 px-5 py-3 shadow-soft backdrop-blur-md md:px-8'
          )}
        >
          <a href="#inicio" className="group flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.02em] text-candora-900 md:text-2xl">
              Cándora
            </span>
            <span className="mt-0.5 text-[10px] font-light uppercase tracking-[0.28em] text-candora-600">
              Studio
            </span>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.18em] text-candora-600 transition-colors duration-300 hover:text-candora-900"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="ghost"
              size="icon"
              onClick={onCartOpen}
              aria-label="Abrir carrito"
              className="relative rounded-sm text-candora-800 hover:bg-candora-100/80"
            >
              <ShoppingBag className="h-[18px] w-[18px] stroke-[1.5]" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-sm bg-candora-olive px-1 text-[10px] font-medium text-candora-50"
                >
                  {cartCount}
                </motion.span>
              )}
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
