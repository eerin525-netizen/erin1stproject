import { AnimatePresence, motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button, Container, Reveal, Section, SectionHeading } from '../ui'
import { contactDetails, contactSubjects } from '../../data'
import { useContactForm } from '../../hooks/useContactForm.js'

function Field({ label, required, children }) {
  return (
    <label>
      <span>{label}{required && <span className="req" aria-hidden> *</span>}</span>
      {children}
    </label>
  )
}

function FormStatus({ status }) {
  return (
    <div id="form-status" aria-live="polite">
      <AnimatePresence mode="wait">
        {status && (
          <motion.p
            key={status.msg}
            className={`status ${status.type}`}
            role={status.type === 'err' ? 'alert' : 'status'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {status.type === 'ok' ? <CheckCircle2 size={16} aria-hidden /> : <AlertCircle size={16} aria-hidden />} {status.msg}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}

function ContactForm() {
  const { status, invalid, onSubmit } = useContactForm()
  const a11y = field => ({ 'aria-invalid': invalid === field || undefined, 'aria-describedby': invalid === field ? 'form-status' : undefined })
  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact form">
      <p className="form-hint">Fields marked * are required.</p>
      <div className="row">
        <Field label="Your name" required><input name="name" required autoComplete="name" {...a11y('name')} /></Field>
        <Field label="Your email" required><input type="email" name="email" required autoComplete="email" {...a11y('email')} /></Field>
      </div>
      <Field label="What is this about?">
        <select name="subject">{contactSubjects.map(s => <option key={s}>{s}</option>)}</select>
      </Field>
      <Field label="Your message" required><textarea name="message" rows="5" required {...a11y('message')} /></Field>
      <Button type="submit" icon={Send}>Send message</Button>
      <FormStatus status={status} />
    </form>
  )
}

function ContactInfo() {
  return (
    <aside aria-label="Contact details">
      {contactDetails.map(({ icon: Icon, label, lines, href }) => (
        <div className="info" key={label}>
          <Icon size={20} strokeWidth={1.4} aria-hidden />
          <div>
            <h3>{label}</h3>
            <p>{href ? <a href={href}>{lines[0]}</a> : lines.map((l, i) => <span key={l}>{i > 0 && <br />}{l}</span>)}</p>
          </div>
        </div>
      ))}
    </aside>
  )
}

export default function ContactSection() {
  return (
    <Section tone="alt">
      <Container>
        <SectionHeading eyebrow="Contact" title="Send us a" em="message" />
        <Reveal className="contact-wrap">
          <ContactForm />
          <ContactInfo />
        </Reveal>
      </Container>
    </Section>
  )
}
