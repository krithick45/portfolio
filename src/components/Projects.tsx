import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { project as p } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'
import TechnologyBadge from './TechnologyBadge'

function Preview() {
  const rows = [['Sample Record A', 'Wasiat', 'Draft', 40], ['Sample Record B', 'Conventional', 'In review', 70], ['Sample Record C', 'Wasiat', 'Complete', 100]] as const
  return (
    <div className="flex min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-ink" role="img" aria-label="Illustrative dashboard mockup with fictional data. Not the actual Maybank interface.">
      <div className="hidden w-14 flex-col items-center gap-3 border-r border-white/10 bg-panel py-4 sm:flex">
        <span className="h-7 w-7 rounded-lg grad-bg" />{[0, 1, 2, 3].map(i => <span key={i} className="h-5 w-5 rounded-md bg-white/10" />)}
      </div>
      <div className="min-w-0 flex-1 p-4">
        <div className="grid grid-cols-3 gap-2">
          {[['Records', '128'], ['Pending', '12'], ['Faraid', 'Ready']].map(([a, b]) => (
            <div key={a} className="rounded-xl bg-white/5 p-3"><p className="text-[10px] text-muted">{a}</p><p className="text-sm font-bold sm:text-lg">{b}</p></div>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {rows.map(([n, t, s, v]) => (
            <div key={n} className="rounded-xl bg-white/5 p-3 text-xs">
              <div className="flex justify-between gap-2"><span className="truncate font-medium">{n}</span><span className="text-muted">{t} · {s}</span></div>
              <div className="mt-2 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full grad-bg" style={{ width: `${v}%` }} /></div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] text-muted">Illustrative mockup · fictional data</p>
      </div>
    </div>
  )
}

export default function Projects() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const k = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'; window.addEventListener('keydown', k)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k) }
  }, [open])
  return (
    <Section id="projects">
      <SectionHeading title="Featured Project" />
      <Reveal>
        <article className="glass grid gap-8 rounded-3xl p-5 sm:p-8 lg:grid-cols-2 lg:items-center">
          <Preview />
          <div>
            <p className="text-sm text-sky">{p.org} · {p.domain}</p>
            <h3 className="mt-2 text-2xl font-bold">{p.name}</h3>
            <p className="mt-4 text-muted">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{p.tech.map(t => <TechnologyBadge key={t} label={t} />)}</div>
            <button onClick={() => setOpen(true)} aria-haspopup="dialog" className="mt-7 min-h-12 rounded-xl px-6 font-semibold grad-bg">Case Study</button>
            <p className="mt-3 text-xs text-muted">Confidential banking project: no public demo or source code.</p>
          </div>
        </article>
      </Reveal>
      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)}>
            <motion.div role="dialog" aria-modal="true" aria-labelledby="cs-title" onClick={e => e.stopPropagation()} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-panel p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <h3 id="cs-title" className="text-xl font-bold">{p.name}</h3>
                <button autoFocus onClick={() => setOpen(false)} aria-label="Close case study" className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10"><X size={18} /></button>
              </div>
              <p className="mt-3 text-muted">{p.description}</p>
              <h4 className="mt-6 font-semibold">Key contributions</h4>
              <ul className="mt-3 space-y-2 text-muted">{p.contributions.map(c => <li key={c} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />{c}</li>)}</ul>
              <h4 className="mt-6 font-semibold">Technology stack</h4>
              <div className="mt-3 flex flex-wrap gap-2">{p.tech.map(t => <TechnologyBadge key={t} label={t} />)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
