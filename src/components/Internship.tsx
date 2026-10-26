import { internship as i } from '../data/portfolio'
import { Reveal } from './SectionHeading'

export default function Internship() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <Reveal>
        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-wrap justify-between gap-2">
            <div><h3 className="font-semibold">{i.role} <span className="text-muted">· {i.company}</span></h3><p className="text-sm text-muted">{i.location}</p></div>
            <p className="text-sm text-slate-300">{i.period}</p>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2">
            {i.points.map(p => <li key={p} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-lilac" />{p}</li>)}
          </ul>
        </article>
      </Reveal>
    </div>
  )
}
