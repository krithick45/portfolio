import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

export function Section({ id, children }: { id: string; children: ReactNode }) {
  return <section id={id} className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24">{children}</section>
}

export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-14 rounded-full grad-bg" />
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </Reveal>
  )
}
