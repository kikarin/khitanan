'use client'

import { useEffect, useState } from 'react'
import { db } from '@/lib/firebase'
import {
  collection,
  getDocs,
  query,
  orderBy,
  Timestamp,
} from 'firebase/firestore'
import RSVPForm from '@/components/RSVPForm'
import { UserGroupIcon, UserIcon } from '@heroicons/react/24/solid'

interface RSVPItem {
  id: string
  nama: string
  jumlah: number
  catatan: string
  createdAt?: Timestamp
}

export default function RSVPPage() {
  const [data, setData] = useState<RSVPItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRSVP = async () => {
      const q = query(collection(db, 'rsvp'), orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      const rsvpList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as RSVPItem),
      }))
      setData(rsvpList)
      setLoading(false)
    }

    fetchRSVP()
  }, [])

  const totalTamu = data.length
  const totalOrang = data.reduce((sum, item) => sum + item.jumlah, 0)

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Judul */}
        <div className="text-center">
          <h1
            className="text-4xl font-bold text-emerald-900 mb-2"
            style={{ fontFamily: 'var(--font-undangan)' }}
          >
            Cek Kehadiran
          </h1>
          <p className="text-emerald-700">
            Data RSVP yang sudah mengisi konfirmasi kehadiran
          </p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <StatCard
            icon={<UserIcon className="w-6 h-6 text-emerald-600" />}
            label="Total Tamu RSVP"
            value={totalTamu}
          />
          <StatCard
            icon={<UserGroupIcon className="w-6 h-6 text-emerald-600" />}
            label="Total Orang Hadir"
            value={totalOrang}
          />
        </div>

        {/* Daftar Tamu */}
        <div className="bg-white rounded-xl border border-emerald-100 shadow p-6">
          <h2 className="text-xl font-semibold text-emerald-900 mb-4">Daftar RSVP</h2>
          {loading ? (
            <p className="text-sm text-gray-500">Memuat data...</p>
          ) : data.length === 0 ? (
            <p className="text-sm text-gray-500">Belum ada yang mengisi RSVP.</p>
          ) : (
            <ul className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {data.map((item) => (
                <li
                  key={item.id}
                  className="p-4 bg-emerald-50 rounded-lg border border-emerald-100 shadow-sm text-left"
                >
                  <p className="font-semibold text-emerald-900">{item.nama}</p>
                  <p className="text-sm text-emerald-700">
                    Jumlah: {item.jumlah}
                  </p>
                  {item.catatan && (
                    <p className="text-sm text-gray-600 italic mt-1">"{item.catatan}"</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </main>
  )
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: number
}) {
  return (
    <div className="bg-white rounded-xl border border-emerald-100 shadow p-6 flex items-center gap-4">
      <div className="p-3 bg-emerald-50 rounded-full">{icon}</div>
      <div>
        <p className="text-emerald-700 text-sm">{label}</p>
        <p className="text-2xl font-bold text-emerald-900">{value}</p>
      </div>
    </div>
  )
}
