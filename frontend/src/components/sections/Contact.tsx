import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-md border border-candora-200 bg-candora-900 px-8 py-14 text-candora-50 shadow-soft md:px-14 md:py-16"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-candora-olive/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-candora-sand/10 blur-3xl" />

          <div className="relative max-w-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-candora-sand/80">
              Ritual a medida
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-candora-50 md:text-4xl">
              Diseñemos juntos tu experiencia sensorial.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-candora-200 md:text-lg">
              Regalos corporativos, sets personalizados o fragancias exclusivas
              para tu espacio. Cada proyecto se cocrea con atención al detalle.
            </p>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="mt-8 border-candora-700 bg-candora-50 text-candora-900 hover:bg-white"
            >
              <a href="mailto:contacto@candorastudio.com" className="group">
                contacto@candorastudio.com
                <ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
