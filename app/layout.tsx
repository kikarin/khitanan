import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Undangan Khitanan",
  description: "Undangan acara khitanan Ajriyyan",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}`}
    >
      <head>
        {/* Metadata untuk share WA & sosial media */}
        <meta property="og:title" content="Undangan Khitanan Ajriyyan" />
        <meta property="og:description" content="Yuk hadiri acara khitanan Ajriyyan! Klik untuk lihat detail undangan." />
        <meta property="og:image" content="/sunat.png" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Undangan Khitanan Ajriyyan" />
        <meta name="twitter:description" content="Yuk hadiri acara khitanan Ajriyyan! Klik untuk lihat detail undangan." />
        <meta name="twitter:image" content="/sunat.png" />
        {/* Favicon */}
        <link rel="icon" href="/sunat.png" type="image/png" />
      </head>
      <body className="antialiased">
        {/* Audio global, selalu ada di semua halaman */}
        <audio
          id="global-audio"
          src="/music.mp3"
          autoPlay
          loop
          preload="auto"
          playsInline
          controls={false}
        />
        {children}
      </body>
    </html>
  );
}
