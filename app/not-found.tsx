// File: app/not-found.tsx
'use client'

import Link from 'next/link'
import { FaceFrownIcon } from '@heroicons/react/24/solid'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-emerald-50">
      <FaceFrownIcon className="w-16 h-16 text-emerald-500 mb-4" />

      <h1 className="text-3xl font-bold text-emerald-900 mb-2">
        Halaman Tidak Ditemukan
      </h1>

      <p className="text-emerald-700 mb-6">
        Maaf, halaman yang kamu cari tidak tersedia atau telah dipindahkan.
      </p>

      <Link
        href="/"
        className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition"
      >
        Kembali ke Beranda
      </Link>
    </main>
  )
}
