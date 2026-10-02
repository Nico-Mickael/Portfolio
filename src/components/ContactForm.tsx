import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

import { Button } from './Button'
import { profile } from '../data/profile'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const emptyForm: FormState = { name: '', email: '', subject: '', message: '' }

const inputClasses =
  'w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-muted)] px-3.5 py-2.5 text-sm text-[var(--text-strong)] placeholder:text-[var(--text-muted)] outline-none transition-colors focus:border-brand-500'

/**
 * No backend: the form validates then hands the message to the visitor's mail client.
 * Set VITE_CONTACT_FORM_ENDPOINT in .env to POST to a service instead.
 */
export function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const nextErrors: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) nextErrors.name = 'Indiquez votre nom.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Adresse e-mail invalide.'
    if (!form.message.trim()) nextErrors.message = 'Votre message est vide.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        setForm(emptyForm)
        setSubmitted(true)
      } catch {
        setErrors({
          message: 'Envoi impossible. Réessayez ou écrivez-moi directement.',
        })
      }
      return
    }

    const body = [
      `Nom : ${form.name}`,
      `E-mail : ${form.email}`,
      form.subject ? `Objet : ${form.subject}` : '',
      '',
      form.message,
    ]
      .filter(Boolean)
      .join('\n')

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || `Contact portfolio — ${form.name}`,
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
  }

  const fields: { name: keyof FormState; label: string; type: string; placeholder: string }[] = [
    { name: 'name', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
    { name: 'email', label: 'E-mail', type: 'email', placeholder: 'vous@exemple.com' },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field.name} className="flex flex-col">
            <label htmlFor={field.name} className="text-strong mb-2 text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              value={form[field.name]}
              onChange={update(field.name)}
              placeholder={field.placeholder}
              aria-invalid={Boolean(errors[field.name])}
              className={`${inputClasses} ${errors[field.name] ? 'border-red-500' : ''}`}
            />
            {errors[field.name] ? (
              <span className="mt-1.5 text-xs text-red-500">{errors[field.name]}</span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col">
        <label htmlFor="subject" className="text-strong mb-2 text-sm font-medium">
          Objet <span className="text-muted font-normal">(optionnel)</span>
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={update('subject')}
          placeholder="Objet de votre message"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-strong mb-2 text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Votre message"
          aria-invalid={Boolean(errors.message)}
          className={`${inputClasses} resize-y ${errors.message ? 'border-red-500' : ''}`}
        />
        {errors.message ? (
          <span className="mt-1.5 text-xs text-red-500">{errors.message}</span>
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg">
          <Send className="h-4 w-4" />
          Envoyer le message
        </Button>
        {submitted ? (
          <p className="text-accent-600 dark:text-accent-400 text-sm">
            {import.meta.env.VITE_CONTACT_FORM_ENDPOINT
              ? 'Message envoyé, merci.'
              : 'Votre messagerie s’ouvre avec le message prérempli.'}
          </p>
        ) : (
          <p className="text-muted flex items-center gap-2 text-xs">
            <Mail className="h-3.5 w-3.5" />
            Ou écrivez-moi directement à {profile.email}
          </p>
        )}
      </div>
    </form>
  )
}