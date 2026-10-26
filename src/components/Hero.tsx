import { motion } from 'framer-motion'
import { Github, Linkedin } from './BrandIcons'
import { profile } from '../data/portfolio'
import { go } from './Navbar'

const floats = [
  { t: 'React', c: 'text-sky', cls: '-top-4 left-2' }, { t: 'TypeScript', c: 'text-blue-300', cls: 'top-10 -right-2' },
  { t: 'Java', c: 'text-orange-300', cls: 'bottom-24 -left-3' }, { t: 'Spring Boot', c: 'text-emerald-300', cls: '-bottom-4 right-8' },
  { t: 'MySQL', c: 'text-lilac', cls: 'bottom-2 left-24' },
]

function CodeCard() {
  return (
    <div className="glass relative rounded-2xl p-1 shadow-2xl shadow-brand/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" /><span className="h-3 w-3 rounded-full bg-yellow-400/80" /><span className="h-3 w-3 rounded-full bg-green-400/80" />
        <span className="ml-3 font-mono text-xs text-muted">WillSummary.tsx</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 sm:text-[13px]" aria-label="Sample React component"><code>
<span className="text-lilac">export function</span> <span className="text-sky">WillSummary</span>{'({ record }) {'}{'\n'}
{'  '}<span className="text-lilac">const</span> valid = useWillValidation(record){'\n'}
{'  '}<span className="text-lilac">return</span> ({'\n'}
{'    '}{'<'}<span className="text-sky">Card</span>{'>'}{'\n'}
{'      '}{'<'}<span className="text-sky">Steps</span> current={'{'}record.step{'}'} /{'>'}{'\n'}
{'      '}{'<'}<span className="text-sky">Button</span> disabled={'{'}!valid{'}'}{'>'}{'\n'}
{'        '}<span className="text-emerald-300">Save securely</span>{'\n'}
{'      '}{'</'}<span className="text-sky">Button</span>{'>'}{'\n'}
{'    '}{'</'}<span className="text-sky">Card</span>{'>'}{'\n'}
{'  )'}{'\n'}{'}'}
      </code></pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-14 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2">
      <div className="pointer-events-none absolute -left-20 top-24 h-72 w-72 rounded-full bg-brand/25 blur-[110px]" aria-hidden />
      <motion.div className="relative" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <span className="inline-block rounded-full border border-sky/30 bg-sky/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-sky">FULL-STACK DEVELOPER | 2 YEARS EXPERIENCE</span>
        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl xl:text-6xl">
          Building <span className="grad-text">Secure, Scalable</span> &amp; <span className="grad-text">Beautiful</span> Web Experiences.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I'm Krithick Murugesan, a Full-Stack Developer based in Cyberjaya, Malaysia. I build responsive web interfaces and enterprise applications using React.js, TypeScript, Java Spring Boot, and MySQL.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={() => go('projects')} className="min-h-12 rounded-xl px-6 font-semibold text-white shadow-lg shadow-brand/30 grad-bg">Explore My Work</button>
          <button onClick={() => go('contact')} className="min-h-12 rounded-xl border border-white/15 bg-white/5 px-6 font-semibold hover:bg-white/10">Get In Touch</button>
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <span className="inline-flex items-center gap-2 text-sm text-muted"><span className="h-2 w-2 rounded-full bg-emerald-400" />Software Developer at InfoMindz R&amp;D</span>
          <div className="flex gap-2">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-muted hover:text-white"><Linkedin size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-muted hover:text-white"><Github size={18} /></a>
          </div>
        </div>
      </motion.div>
      <motion.div className="relative mx-auto w-full max-w-md px-3 py-6" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
        <div className="absolute inset-6 rounded-full bg-sky/20 blur-[90px]" aria-hidden />
        <CodeCard />
        {floats.map((f, i) => (
          <span key={f.t} style={{ animationDelay: `${i * 0.8}s` }} className={`float glass absolute hidden rounded-full px-3 py-1.5 text-xs font-semibold sm:block ${f.c} ${f.cls}`}>{f.t}</span>
        ))}
      </motion.div>
    </section>
  )
}
