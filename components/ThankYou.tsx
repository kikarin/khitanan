'use client'

import { HeartIcon } from '@heroicons/react/24/solid'

export default function ThankYou() {
  return (
    <section className="w-full py-16 px-6 bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-teal-100 rounded-full blur-2xl opacity-20 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-100 rounded-full blur-2xl opacity-20 animate-pulse delay-500" />

      <div className="relative z-10 max-w-xl mx-auto text-center animate-fade-in-up">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-emerald-100">
          <div className="flex justify-center mb-4">
            <HeartIcon className="w-10 h-10 text-emerald-500" />
          </div>
          <h2
            className="text-2xl font-bold text-emerald-900 mb-4"
            style={{ fontFamily: 'var(--font-undangan)' }}
          >
            Terima Kasih
          </h2>
          <p className="text-[#5d7271] text-base leading-relaxed">
            Kehadiran dan doa restu dari Bapak/Ibu/Saudara/i sangat berarti bagi kami.
            Semoga silaturahmi ini membawa berkah dan kebaikan untuk kita semua.
          </p>
          <p className="mt-6 text-sm text-emerald-700 italic">
            Sampai jumpa di hari bahagia nanti!
          </p>
        </div>
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
