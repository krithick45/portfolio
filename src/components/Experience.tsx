import { Briefcase, MapPin } from 'lucide-react'
import { job } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'
import TechnologyBadge from './TechnologyBadge'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Where I've Worked" />
      <Reveal>
        <article className="glass relative rounded-3xl p-6 sm:p-9">
          <div className="absolute inset-y-6 left-0 w-1 rounded-r-full grad-bg" aria-hidden />
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/15 text-lilac"><Briefcase aria-hidden /></span>
              <div><h3 className="text-xl font-bold">{job.role}</h3><p className="text-sky">{job.company}</p></div>
            </div>
            <div className="text-sm text-muted sm:text-right">
              <p className="font-medium text-slate-200">{job.period}</p>
              <p className="mt-1 inline-flex items-center gap-1"><MapPin size={14} aria-hidden />{job.location}</p>
            </div>
          </div>
          <ul className="mt-6 grid gap-3 text-muted lg:grid-cols-2">
            {job.points.map(p => <li key={p} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky" />{p}</li>)}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">{job.tech.map(t => <TechnologyBadge key={t} label={t} />)}</div>
        </article>
      </Reveal>
    </Section>
  )
}
