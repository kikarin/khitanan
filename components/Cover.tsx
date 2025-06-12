"use client";

import { useState, useRef } from "react";
import InfoAcara from "./InfoAcara";
import Pembukaan from "./Pembukaan";
import UcapanHarapan from "./UcapanHarapan";
import FormUcapan from "./FormUcapan";
import UcapanListPreview from "./UcapanListPreview";
import RSVPForm from "@/components/RSVPForm";
import ThankYou from "@/components/ThankYou";
import Sampul from "./Sampul";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid";

export default function Cover() {
  const [opened, setOpened] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleOpen = async () => {
    setOpened(true);
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.currentTime = 0;
      try {
        await audioRef.current.play();
        setMusicOn(true);
      } catch {}
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (musicOn) {
      audioRef.current.pause();
      setMusicOn(false);
    } else {
      audioRef.current.play();
      setMusicOn(true);
    }
  };

  if (!opened) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"></div>
        
        {/* Animated Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-300 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        {/* Decorative Elements - Centered for Mobile */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          
          {/* Additional decorative elements - mobile optimized */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-8 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 left-1/2 transform translate-x-8 w-1 h-1 bg-teal-400 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-12 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping delay-700"></div>
        </div>

        {/* Main Content - Mobile First */}
        <div className="relative z-10 animate-fade-in-up px-4 max-w-sm mx-auto">
          {/* Header */}
          <div className="mb-4">
            <div className="inline-block px-3 py-1.5 bg-white/60 backdrop-blur-sm rounded-full shadow-sm border border-white/20 mb-3">
              <h2 className="text-sm text-emerald-700 font-medium tracking-wide">
                Walimatul Khitanan
              </h2>
            </div>

            <h1
              className="text-4xl sm:text-5xl text-emerald-900 mb-3 leading-tight"
              style={{ fontFamily: "var(--font-undangan)", fontWeight: "normal" }}
            >
              Tasyakuran
              <br />
              <span className="text-teal-700">Khitan</span>
            </h1>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-sm sm:text-base text-emerald-800 max-w-sm mx-auto leading-relaxed">
              Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud
              menyelenggarakan acara khitanan putra kami
            </p>
          </div>

          {/* Profile Image - Mobile Optimized */}
          <div className="relative mb-5 flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-20 scale-110 animate-pulse"></div>
            <img
              src="/sunat.png"
              alt="Ajriyyan"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover shadow-2xl border-3 border-white/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Name */}
          <h2
            className="text-3xl sm:text-4xl text-emerald-900 mb-5 relative text-center"
            style={{ fontFamily: "var(--font-undangan)", fontWeight: "normal" }}
          >
            Ajriyyan
            <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </h2>

          {/* Invitation */}
          <div className="mb-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-3 shadow-sm border border-white/20 inline-block">
              <p className="text-sm text-emerald-700 mb-0.5">Kepada Yth.</p>
              <p className="text-base font-semibold text-emerald-900">
                Bapak/Ibu/Saudara/i
              </p>
            </div>
          </div>

          {/* Open Button - Mobile Optimized */}
          <button
            onClick={handleOpen}
            className="group relative px-6 py-3 sm:px-8 sm:py-4 w-full max-w-xs bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="text-sm sm:text-base">Buka Undangan</span>
              <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </span>
          </button>
        </div>
        <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        playsInline
      />

        {/* Custom Styles */}
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
          
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(3deg);
            }
          }
          
          @keyframes float-reverse {
            0%, 100% {
              transform: translateY(0px) rotate(180deg);
            }
            50% {
              transform: translateY(-10px) rotate(183deg);
            }
          }
          
          .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-float-reverse {
            animation: float-reverse 3s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className="animate-fade-in">
        {/* Tombol Musik */}
        <button
          onClick={toggleMusic}
          className="fixed top-4 right-4 z-50 bg-white/80 rounded-full p-2 shadow hover:bg-emerald-100 transition"
          aria-label={musicOn ? "Nonaktifkan Musik" : "Aktifkan Musik"}
        >
          {musicOn ? (
            <SpeakerWaveIcon className="w-7 h-7 text-emerald-600" />
          ) : (
            <SpeakerXMarkIcon className="w-7 h-7 text-emerald-600" />
          )}
        </button>
        <Sampul />
        <Pembukaan />
        <InfoAcara />
        <UcapanHarapan />
        <FormUcapan />
        <UcapanListPreview />
        <RSVPForm />
        <ThankYou />
      </div>
      {/* Audio tetap ada di DOM */}
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
        playsInline
        autoPlay={opened}
      />
    </>
  );
}