"use client";

import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

export default function InfoAcara() {
  return (
    <section className="w-full py-16 px-6 text-center bg-gradient-to-b from-emerald-50 to-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-teal-100 rounded-full blur-2xl opacity-30 animate-pulse delay-500" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-8">
        {/* Intro */}
        <div>
          <h1
            className="text-2xl font-bold text-emerald-900 mb-6 tracking-wide"
            style={{ fontFamily: "var(--font-undangan)" }}
          >
            Info Acara
          </h1>
          <h2 className="text-base text-emerald-700 mb-2 font-medium tracking-wide">
            Dengan memohon rahmat dan ridho Allah SWT,
          </h2>
          <p className="text-emerald-800 font-semibold text-xl">
            Kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara:
          </p>
        </div>

        {/* Card Detail */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-emerald-200 text-left space-y-6">
          <div>
            <h3 className="text-lg text-emerald-900 font-bold">
              Tasyakuran Khitan
            </h3>
          </div>

          <div className="space-y-3 text-sm text-emerald-800">
            <Item
              icon={<CalendarDaysIcon className="h-5 w-5 text-emerald-500" />}
            >
              Hari: <strong>Minggu</strong>
            </Item>
            <Item icon={<CalendarIcon className="h-5 w-5 text-emerald-500" />}>
              Tanggal: <strong>22 Juni 2025</strong>
            </Item>
            <Item icon={<ClockIcon className="h-5 w-5 text-emerald-500" />}>
              Waktu: <strong>09.00 WIB - selesai</strong>
            </Item>
            <Item icon={<MapPinIcon className="h-5 w-5 text-emerald-500" />}>
              Lokasi:{" "}
              <strong>
                kp. Cikondang rt 09 rw 04 Kel. Katulampa kec. Bogor timur
              </strong>
            </Item>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3963.3103780474985!2d106.82271587499363!3d-6.608301093385656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzYnMjkuOSJTIDEwNsKwNDknMzEuMSJF!5e0!3m2!1sid!2sid!4v1749732790112!5m2!1sid!2sid"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-md border border-emerald-100"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="mt-3 text-center">
              <a
                href="https://www.google.com/maps/place/6%C2%B036'29.9%22S+106%C2%B049'31.1%22E/@-6.6083011,106.8227159,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-5 py-2 bg-emerald-600 text-white rounded-full shadow hover:bg-emerald-700 transition"
              >
                Lihat Lokasi di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1">{icon}</div>
      <p className="text-emerald-800">{children}</p>
    </div>
  );
}
