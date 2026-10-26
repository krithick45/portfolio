import { ExternalLink } from 'lucide-react'
import { certGroups } from '../data/portfolio'
import SectionHeading, { Reveal } from './SectionHeading'

export default function Certifications() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24">
      <SectionHeading title="Certifications & Continuous Learning" />
      <div className="grid gap-5 lg:grid-cols-2">
        {certGroups.map(g => (
          <Reveal key={g.title}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="font-semibold">{g.title}</h3>
              <ul className="mt-4 divide-y divide-white/10">
                {g.items.map(c => (
                  <li key={c.url}>
                    <a href={c.url} target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between gap-3 py-2.5 text-sm text-muted transition-colors hover:text-white">
                      <span>{c.name}</span><span className="flex shrink-0 items-center gap-1 text-xs text-sky">Verify<ExternalLink size={13} aria-hidden /><span className="sr-only">(opens in new tab)</span></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
