export default function Pembukaan() {
  return (
    <section className="w-full py-16 px-6 text-center bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-30 animate-pulse delay-500" />

      {/* Content */}
      <div className="relative z-10 max-w-xl mx-auto animate-fade-in-up">
        <h1
          className="text-2xl font-bold text-emerald-900 mb-6 tracking-wide"
          style={{ fontFamily: "var(--font-undangan)" }}
        >
          Pembukaan
        </h1>
        <p className="text-[#213718] mb-4 text-base font-medium tracking-wide">
          Assalamualaikum Wr. Wb.
        </p>

        <p className="text-[#5d7271] text-base mb-6 leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT,
          <br />
          kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara
          khitanan putra kami tercinta:
        </p>

        <h2
          className="text-3xl text-emerald-900 mb-2"
          style={{ fontFamily: "var(--font-undangan)" }}
        >
          Muhammad Ajriyyan Gussyafe&apos;i
        </h2>

        <p className="text-[#5d7271] mb-6 text-sm">
          Putra dari{" "}
          <span className="text-emerald-700 font-semibold">Bapak Gustomi</span>{" "}
          &{" "}
          <span className="text-emerald-700 font-semibold">Ibu Nurdianti</span>
        </p>

        <p className="text-[#5d7271] leading-relaxed text-sm">
          Kami sangat berharap Bapak/Ibu/Om/Tante/Saudara/i dapat menghadiri
          acara tersebut dan memberikan doa restu kepada putra kami.
        </p>
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
  );
}
