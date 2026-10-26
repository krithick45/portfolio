import { CheckCircle2 } from 'lucide-react'
import { strengths } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'

const stats = [{ v: '2 Years', l: 'Professional Experience' }, { v: 'Banking', l: 'Enterprise Domain' }, { v: 'Full Stack', l: 'Frontend to Backend' }]

export default function About() {
  return (
    <Section id="about">
      <SectionHeading title="A Little About Me" subtitle="Turning ideas into reliable digital experiences." />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">I'm a developer with experience building enterprise-grade applications in the banking domain. I work across the stack, from responsive React interfaces to Spring Boot services and MySQL databases, with a focus on secure, maintainable code.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map(s => (
              <div key={s.v} className="glass card-hover rounded-2xl p-4">
                <p className="text-xl font-bold grad-text">{s.v}</p><p className="mt-1 text-sm text-muted">{s.l}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <ul className="space-y-3">
            {strengths.map(s => <li key={s} className="flex gap-3 text-slate-200"><CheckCircle2 className="mt-0.5 shrink-0 text-sky" size={20} aria-hidden />{s}</li>)}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
