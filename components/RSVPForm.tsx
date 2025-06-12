'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import {
  UserIcon,
  UserGroupIcon,
  PencilIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

export default function RSVPForm() {
  const [nama, setNama] = useState('')
  const [jumlah, setJumlah] = useState(1)
  const [catatan, setCatatan] = useState('')
  const [loading, setLoading] = useState(false)
  const [berhasil, setBerhasil] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!nama) return alert('Nama wajib diisi')

    setLoading(true)
    try {
      await addDoc(collection(db, 'rsvp'), {
        nama,
        jumlah,
        catatan,
        createdAt: serverTimestamp(),
      })
      setBerhasil(true)
      setNama('')
      setJumlah(1)
      setCatatan('')
    } catch (err) {
      alert('Gagal mengirim RSVP')
    }
    setLoading(false)
  }

  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-white to-emerald-50 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-20 animate-pulse delay-500" />

      <div className="relative z-10 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md border border-emerald-100 animate-fade-in-up">
        <h2
          className="text-2xl font-bold text-center text-emerald-900 mb-6"
          style={{ fontFamily: 'var(--font-undangan)' }}
        >
          Konfirmasi Kehadiran
        </h2>

        {berhasil ? (
          <div className="text-center text-emerald-700">
            <CheckCircleIcon className="w-10 h-10 mx-auto mb-2 text-emerald-500" />
            <p className="font-medium">Terima kasih! RSVP kamu sudah tercatat.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nama */}
            <div>
              <label className="block text-sm font-medium text-emerald-800 mb-1">Nama</label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute top-2.5 left-3 text-emerald-400" />
                <input
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  required
                  placeholder="Nama lengkap"
                  className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
            </div>

            {/* Jumlah orang */}
            <div>
              <label className="block text-sm font-medium text-emerald-800 mb-1">Jumlah yang ikut</label>
              <div className="relative">
                <UserGroupIcon className="w-5 h-5 absolute top-2.5 left-3 text-emerald-400" />
                <input
                  type="number"
                  value={jumlah}
                  onChange={(e) => setJumlah(Number(e.target.value))}
                  min={1}
                  required
                  className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
            </div>

            {/* Catatan */}
            <div>
              <label className="block text-sm font-medium text-emerald-800 mb-1">Catatan (opsional)</label>
              <div className="relative">
                <PencilIcon className="w-5 h-5 absolute top-2.5 left-3 text-emerald-400" />
                <textarea
                  value={catatan}
                  onChange={(e) => setCatatan(e.target.value)}
                  placeholder="Misal: Datang bersama istri"
                  rows={3}
                  className="pl-10 pr-4 py-2 w-full border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white font-semibold py-2 rounded-full hover:bg-emerald-700 transition"
            >
              {loading ? 'Mengirim...' : 'Kirim RSVP'}
            </button>
          </form>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  )
}
