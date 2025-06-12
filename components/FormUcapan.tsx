'use client'

import { useState } from 'react'
import { db } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { CheckCircleIcon, PencilIcon, UserIcon } from '@heroicons/react/24/solid'

export default function FormUcapan() {
  const [nama, setNama] = useState('')
  const [pesan, setPesan] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await addDoc(collection(db, 'ucapan'), {
        nama,
        pesan,
        createdAt: serverTimestamp(),
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Gagal mengirim pesan:', error)
    }
  }

  return (
    <section className="w-full py-16 px-6 text-center bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-30 animate-pulse delay-500" />

      <div className="relative z-10 max-w-lg mx-auto animate-fade-in-up">
        <h2
          className="text-2xl font-bold text-emerald-900 mb-6 tracking-wide"
          style={{ fontFamily: 'var(--font-undangan)' }}
        >
          Kirim Ucapan
        </h2>

        {submitted ? (
          <div className="flex flex-col items-center text-emerald-700">
            <CheckCircleIcon className="w-12 h-12 mb-2 text-emerald-600" />
            <p className="text-base font-medium">Terima kasih atas ucapan dan doanya</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 space-y-4 text-left"
          >
            <div>
              <label className="block mb-1 text-sm text-emerald-800 font-medium">Nama</label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute top-2.5 left-3 text-emerald-400" />
                <input
                  type="text"
                  placeholder="Nama kamu"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm text-emerald-800 font-medium">Pesan</label>
              <div className="relative">
                <PencilIcon className="w-5 h-5 absolute top-2.5 left-3 text-emerald-400" />
                <textarea
                  placeholder="Ucapan atau doa terbaik..."
                  value={pesan}
                  onChange={(e) => setPesan(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  rows={4}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-semibold transition"
            >
              Kirim Ucapan
            </button>
          </form>
        )}
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
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
