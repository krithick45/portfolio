import { GraduationCap } from 'lucide-react'
import { education as e } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education" />
      <Reveal>
        <div className="glass flex max-w-3xl items-start gap-5 rounded-2xl p-6">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-lilac"><GraduationCap aria-hidden /></span>
          <div>
            <h3 className="text-lg font-semibold">{e.degree}</h3>
            <p className="text-sky">{e.school}</p>
            <p className="mt-1 text-sm text-muted">{e.years} · CGPA: {e.cgpa}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
