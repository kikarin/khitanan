export default function UcapanHarapan() {
  return (
    <section className="w-full py-16 px-6 text-center bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-30 animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto animate-fade-in-up">
        <h2
          className="text-2xl font-bold text-emerald-900 mb-6 tracking-wide"
          style={{ fontFamily: "var(--font-undangan)" }}
        >
          Ucapan & Harapan
        </h2>

        <p className="text-[#5d7271] text-base leading-relaxed">
          Semoga{" "}
          <span
            style={{ fontFamily: "var(--font-undangan)" }}
            className="text-emerald-800"
          >
            Muhammad Ajriyyan Gussyafe'i
          </span>{" "}
          tumbuh menjadi anak yang sholeh, berbakti kepada orang tua, serta
          berguna bagi agama, nusa, dan bangsa.
        </p>

        <p className="text-[#5d7271] text-base leading-relaxed mt-6">
          Kami sekeluarga mengucapkan terima kasih atas doa dan kehadiran
          Bapak/Ibu/Saudara/i dalam acara ini.
        </p>
      </div>

      {/* Animation Style */}
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
  );
}
