import { useState } from 'react'
import { company } from '../data'

const EMAIL_RE = /^\S+@\S+\.\S+$/

// Validates the contact form, then hands the message to the visitor's mail
// client (there is no backend yet). Returns { status, invalid, onSubmit }:
// `invalid` is the name of the field with the problem; focus moves to it.
export function useContactForm() {
  const [status, setStatus] = useState(null)
  const [invalid, setInvalid] = useState(null)

  const fail = (form, field, msg) => {
    setInvalid(field)
    setStatus({ type: 'err', msg })
    form.elements[field]?.focus()
  }

  const onSubmit = e => {
    e.preventDefault()
    const form = e.currentTarget
    const f = new FormData(form)
    const name = String(f.get('name') || '').trim()
    const email = String(f.get('email') || '').trim()
    const message = String(f.get('message') || '').trim()

    if (!name) return fail(form, 'name', 'Please enter your name.')
    if (!EMAIL_RE.test(email)) return fail(form, 'email', 'Please enter a valid email address, for example name@example.com.')
    if (!message) return fail(form, 'message', 'Please write a short message.')

    setInvalid(null)
    const body = `${message}\n\n— ${name} (${email})`
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`
    setStatus({ type: 'ok', msg: 'Thank you! Your email app should open so you can send the message.' })
    form.reset()
  }

  return { status, invalid, onSubmit }
}
