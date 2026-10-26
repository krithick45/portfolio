import { ArrowUp } from 'lucide-react'
import { Github, Linkedin } from './BrandIcons'
import { navLinks, profile } from '../data/portfolio'
import { go } from './Navbar'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-panel/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold grad-bg">KM</span>
          <div><p className="font-semibold">{profile.name}</p><p className="text-xs text-muted">Designed and built with React.js and Tailwind CSS.</p></div>
        </div>
        <nav aria-label="Footer"><ul className="flex flex-wrap gap-x-4 gap-y-1">
          {navLinks.map(l => <li key={l.id}><button onClick={() => go(l.id)} className="min-h-9 text-sm text-muted hover:text-white">{l.label}</button></li>)}
        </ul></nav>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-muted hover:text-white"><Linkedin size={18} /></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-muted hover:text-white"><Github size={18} /></a>
          <button onClick={() => go('home')} aria-label="Back to top" className="grid h-11 w-11 place-items-center rounded-xl grad-bg"><ArrowUp size={18} /></button>
        </div>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  )
}
