import { Code2, Database, LayoutTemplate, Server, Sparkles, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'
import TechnologyBadge from './TechnologyBadge'

const icons = { code: Code2, layout: LayoutTemplate, server: Server, database: Database, wrench: Wrench, sparkles: Sparkles }

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading title="My Technical Arsenal" subtitle="The languages, frameworks and tools I use day to day." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map(g => {
          const Icon = icons[g.icon]
          return (
            <Reveal key={g.title}>
              <div className="glass card-hover h-full rounded-2xl p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-lilac"><Icon size={22} aria-hidden /></span>
                <h3 className="mt-4 text-lg font-semibold">{g.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">{g.items.map(i => <TechnologyBadge key={i} label={i} />)}</div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
