import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export function go(id: string) { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const ids = [...navLinks.map(l => l.id)]
    const onScroll = () => {
      const y = window.scrollY + 120
      let cur = 'home'
      for (const id of ids) { const el = document.getElementById(id); if (el && el.offsetTop <= y) cur = id }
      setActive(cur)
    }
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const click = (id: string) => { setOpen(false); go(id) }
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <button onClick={() => click('home')} className="flex items-center gap-3" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold grad-bg">KM</span>
          <span className="hidden font-semibold sm:block">{profile.name}</span>
        </button>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(l => (
            <li key={l.id}>
              <button onClick={() => click(l.id)} aria-current={active === l.id ? 'page' : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${active === l.id ? 'bg-white/10 text-white' : 'text-muted hover:text-white'}`}>{l.label}</button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={() => click('contact')} className="hidden rounded-xl px-4 py-2 text-sm font-semibold text-white grad-bg sm:block">Let's Connect</button>
          <button className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 lg:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-5 lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map(l => <li key={l.id}><button onClick={() => click(l.id)} className="w-full rounded-lg px-3 py-3 text-left text-muted hover:bg-white/5 hover:text-white">{l.label}</button></li>)}
          </ul>
          <button onClick={() => click('contact')} className="w-full rounded-xl py-3 font-semibold grad-bg">Let's Connect</button>
        </div>
      )}
    </header>
  )
}
