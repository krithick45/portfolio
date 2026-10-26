import { useState, type FormEvent } from 'react'
import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { Linkedin } from './BrandIcons'
import { profile } from '../data/portfolio'
import SectionHeading, { Reveal, Section } from './SectionHeading'

type F = { name: string; email: string; subject: string; message: string }
const empty: F = { name: '', email: '', subject: '', message: '' }
const fields: { k: keyof F; label: string; type?: string }[] = [
  { k: 'name', label: 'Name' }, { k: 'email', label: 'Email', type: 'email' }, { k: 'subject', label: 'Subject' }, { k: 'message', label: 'Message' },
]

function validate(v: F) {
  const e: Partial<F> = {}
  if (v.name.trim().length < 2) e.name = 'Enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.subject.trim().length < 3) e.subject = 'Enter a subject.'
  if (v.message.trim().length < 10) e.message = 'Write at least 10 characters.'
  return e
}

export default function Contact() {
  const [v, setV] = useState<F>(empty)
  const [err, setErr] = useState<Partial<F>>({})
  const [copied, setCopied] = useState(false)
  const [opened, setOpened] = useState(false)

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { /* clipboard unavailable */ }
  }
  // No backend configured: open the visitor's email app with the message prefilled.
  // To use an email service later (EmailJS, Formspree, own API), replace the body of this function.
  const submit = (ev: FormEvent) => {
    ev.preventDefault()
    const e = validate(v); setErr(e)
    if (Object.keys(e).length) return
    const body = `${v.message}\n\nFrom: ${v.name} <${v.email}>`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`
    setOpened(true)
  }
  const items = [
    { Icon: Mail, text: profile.email, href: `mailto:${profile.email}` }, { Icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: MapPin, text: profile.location }, { Icon: Linkedin, text: 'linkedin.com/in/contactkrithick', href: profile.linkedin },
  ]
  return (
    <Section id="contact">
      <SectionHeading title="Let's Build Something Great" subtitle="Have an opportunity, a project idea, or just want to connect? I'd be happy to hear from you." />
      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal className="space-y-3 lg:col-span-2">
          {items.map(({ Icon, text, href }) => (
            <div key={text} className="glass flex items-center gap-4 rounded-2xl p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-lilac"><Icon size={20} aria-hidden /></span>
              {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="min-w-0 break-words text-sm hover:text-sky">{text}</a> : <span className="text-sm">{text}</span>}
            </div>
          ))}
          <button onClick={copy} className="flex min-h-11 items-center gap-2 rounded-xl border border-white/10 px-4 text-sm hover:bg-white/5" aria-live="polite">
            {copied ? <><Check size={16} className="text-emerald-400" />Email copied</> : <><Copy size={16} />Copy email address</>}
          </button>
        </Reveal>
        <Reveal className="lg:col-span-3">
          <form onSubmit={submit} noValidate className="glass space-y-4 rounded-3xl p-5 sm:p-8">
            {fields.map(({ k, label, type }) => {
              const cls = 'mt-1.5 w-full rounded-xl border border-white/10 bg-ink/60 px-4 py-3 text-sm placeholder:text-slate-500'
              return (
                <div key={k}>
                  <label htmlFor={k} className="text-sm font-medium">{label}</label>
                  {k === 'message'
                    ? <textarea id={k} rows={5} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={cls} />
                    : <input id={k} type={type ?? 'text'} value={v[k]} onChange={e => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-e` : undefined} className={cls} />}
                  {err[k] && <p id={`${k}-e`} role="alert" className="mt-1 text-xs text-red-400">{err[k]}</p>}
                </div>
              )
            })}
            <button type="submit" className="min-h-12 w-full rounded-xl font-semibold grad-bg sm:w-auto sm:px-8">Send Message</button>
            <p className="text-xs text-muted" aria-live="polite">{opened ? 'Your email app should now be open with the message ready to send. If it did not open, use the email address above.' : 'This opens your email app with the message prefilled. Nothing is sent from this page.'}</p>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
