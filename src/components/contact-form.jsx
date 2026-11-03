'use client';

import { useState } from 'react';
import { FiSend } from 'react-icons/fi';

const initial = { name: '', email: '', message: '', company: '' };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState({ type: null, msg: '' });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, msg: '' });

    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: 'Please fill in all fields.' });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: 'success', msg: data.message });
        setForm(initial);
      } else {
        setStatus({ type: 'error', msg: data.message || 'Something went wrong.' });
      }
    } catch {
      setStatus({ type: 'error', msg: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    'w-full rounded-lg border border-line bg-white px-4 py-3 text-content placeholder:text-muted outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent-soft';

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-line bg-white p-6 shadow-soft lg:p-8">
      <div className="flex flex-col gap-5">
        {/* Honeypot (disembunyikan dari user) */}
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={update('company')}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-content">
            Your name
          </label>
          <input id="name" className={inputCls} placeholder="John Doe" value={form.name} onChange={update('name')} maxLength={100} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-content">
            Your email
          </label>
          <input id="email" type="email" className={inputCls} placeholder="you@example.com" value={form.email} onChange={update('email')} maxLength={120} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-content">
            Your message
          </label>
          <textarea id="message" rows={5} className={inputCls} placeholder="Tell us about your project..." value={form.message} onChange={update('message')} maxLength={2000} />
        </div>

        {status.type && (
          <p className={`text-sm ${status.type === 'success' ? 'text-accent' : 'text-red-400'}`}>
            {status.msg}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-accent-strong disabled:opacity-60"
        >
          {loading ? 'Sending...' : (<>Send message <FiSend /></>)}
        </button>
      </div>
    </form>
  );
}
