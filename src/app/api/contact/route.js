import { NextResponse } from 'next/server';

// API route untuk form kontak. Jalan sebagai serverless function di Vercel,
// jadi TIDAK butuh backend terpisah.
//
// Secara default, endpoint ini hanya memvalidasi & mencatat pesan (aman untuk
// deploy tanpa konfigurasi apa pun). Untuk benar-benar mengirim email, integrasi
// layanan seperti Resend/EmailJS bisa ditambahkan di bagian yang ditandai.

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { name, email, message, company: honeypot } = body || {};

  // Honeypot anti-spam: field tersembunyi yang harus kosong.
  if (honeypot) {
    return NextResponse.json({ success: true, message: 'Thanks!' });
  }

  // Validasi dasar.
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, message: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json(
      { success: false, message: 'Please provide a valid email address.' },
      { status: 400 }
    );
  }
  if (message.length > 2000) {
    return NextResponse.json(
      { success: false, message: 'Message is too long.' },
      { status: 400 }
    );
  }

  // --- Titik integrasi email (opsional) ---
  // Contoh dengan Resend (uncomment & set RESEND_API_KEY di Vercel):
  //
  // if (process.env.RESEND_API_KEY) {
  //   await fetch('https://api.resend.com/emails', {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       from: 'Website <onboarding@resend.dev>',
  //       to: [process.env.CONTACT_TO || 'you@example.com'],
  //       subject: `New message from ${name}`,
  //       text: `From: ${name} <${email}>\n\n${message}`,
  //     }),
  //   });
  // }

  // Tanpa integrasi, catat saja (terlihat di log Vercel).
  console.log('[contact] new message:', { name, email, message });

  return NextResponse.json({
    success: true,
    message: 'Thank you! Your message has been received.',
  });
}
