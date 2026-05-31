import { motion } from 'framer-motion'

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-candora-200/80 bg-candora-50"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-12 text-center md:flex-row md:px-10 md:text-left">
        <div>
          <p className="font-serif text-lg text-candora-900">Cándora Studio</p>
          <p className="mt-1 text-sm text-candora-600">
            Velas de soja y sales aromáticas, hechas con intención.
          </p>
        </div>
        <p className="text-xs uppercase tracking-[0.16em] text-candora-500">
          © {new Date().getFullYear()} · Todos los derechos reservados
        </p>
      </div>
    </motion.footer>
  )
}
