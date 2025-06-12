'use client'

import { useEffect, useState } from 'react'

const targetDate = new Date('2025-06-22T09:00:00+07:00').getTime()

function getTimeLeft() {
  const now = new Date().getTime()
  const distance = targetDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return {
    days: Math.max(days, 0),
    hours: Math.max(hours, 0),
    minutes: Math.max(minutes, 0),
    seconds: Math.max(seconds, 0),
  }
}

export default function Sampul() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="text-center py-12 px-6 bg-gradient-to-b from-emerald-100 to-white relative overflow-hidden">
      {/* Background Bubble */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full blur-3xl opacity-40 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-200 rounded-full blur-3xl opacity-40 animate-pulse delay-500" />

      <div className="relative z-10 max-w-lg mx-auto">
        <h2 className="text-sm text-emerald-700 mb-2 tracking-widest uppercase">Walimatul Khitan</h2>

        <h1
          className="text-5xl text-emerald-900 mb-4"
          style={{ fontFamily: 'var(--font-undangan)' }}
        >
          Ajriyyan
        </h1>

        <p className="text-md text-emerald-800 mb-6">
          Pada <strong>Ahad, 22 Juni 2025</strong>
        </p>

        <p className="text-sm text-emerald-700 mb-3">Acara akan dimulai dalam:</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
          <CountdownItem label="Hari" value={timeLeft.days} />
          <CountdownItem label="Jam" value={timeLeft.hours} />
          <CountdownItem label="Menit" value={timeLeft.minutes} />
          <CountdownItem label="Detik" value={timeLeft.seconds} />
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .flip {
          animation: flip 0.6s ease-in-out;
        }

        @keyframes flip {
          0% {
            transform: rotateX(90deg);
            opacity: 0;
          }
          100% {
            transform: rotateX(0deg);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

function CountdownItem({ label, value }: { label: string; value: number }) {
  const [previous, setPrevious] = useState(value)
  const [flipping, setFlipping] = useState(false)

  useEffect(() => {
    if (value !== previous) {
      setFlipping(true)
      setTimeout(() => {
        setFlipping(false)
        setPrevious(value)
      }, 300)
    }
  }, [value, previous])

  return (
    <div className="flex flex-col items-center bg-white px-4 py-3 rounded shadow border border-emerald-100 min-w-[70px] transition-all">
      <span
        className={`text-2xl font-bold text-emerald-900 transition-transform ${
          flipping ? 'flip' : ''
        }`}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs text-emerald-700">{label}</span>
    </div>
  )
}
