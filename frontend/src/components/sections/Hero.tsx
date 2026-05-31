import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import heroImage from '@/assets/candora/hero-packaging-1.jpg'
import heroAccent from '@/assets/candora/hero-candle-2.jpg'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 md:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:px-10 md:pb-28 lg:gap-20">
        <div className="space-y-8 md:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
          >
            <Badge variant="olive" className="mb-6">
              Bienestar · Ritual · Calma
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}
            className="text-balance text-4xl leading-[1.08] text-candora-900 md:text-5xl lg:text-[3.4rem]"
          >
            Donde la luz se vuelve pausa, y el aroma, recuerdo.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
            className="max-w-lg text-base leading-relaxed text-candora-600 md:text-lg"
          >
            Velas de soja y sales aromáticas elaboradas en pequeños lotes.
            Texturas suaves, fragancias naturales y una estética que invita
            a desacelerar.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Button asChild size="lg" variant="default">
              <a href="#coleccion" className="group">
                Explorar colección
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contacto">Crear un ritual a medida</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: easeOut }}
            className="flex flex-wrap gap-6 border-t border-candora-200/80 pt-8"
          >
            {[
              { label: 'Cera de soja', value: '100% natural' },
              { label: 'Producción', value: 'Edición limitada' },
              { label: 'Envío', value: 'Empaque consciente' },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-[10px] uppercase tracking-[0.18em] text-candora-500">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-medium text-candora-800">
                  {item.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-soft">
            <motion.img
              src={heroImage}
              alt="Velas y empaques Cándora Studio"
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-candora-950/10 via-transparent to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -bottom-6 -left-4 w-36 overflow-hidden rounded-md border border-candora-100 shadow-card md:-left-8 md:w-44"
          >
            <img
              src={heroAccent}
              alt="Detalle de vela artesanal"
              className="aspect-square w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
