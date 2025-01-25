import React, { useEffect, useState } from "react";

const SplashScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Mencegah scrolling saat splash screen aktif
    document.body.style.overflow = "hidden";

    // Timer untuk memulai animasi fade-out
    const timer = setTimeout(() => {
      setFadeOut(true); // Memulai animasi fade-out
      const hideTimer = setTimeout(() => {
        setIsVisible(false); // Menghapus splash screen dari DOM
        document.body.style.overflow = "auto"; // Mengaktifkan scrolling kembali
      }, 1000); // Durasi fade-out (1 detik)
      return () => clearTimeout(hideTimer);
    }, 3000); // Durasi splash screen (3 detik)

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto"; // Pastikan scrolling diaktifkan kembali jika komponen unmount
    };
  }, []);

  if (!isVisible) {
    return null; // Hapus splash screen dari DOM
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col md:flex-row items-center md:space-x-2 text-white text-center md:text-left transition-opacity duration-1000">
        {/* Nama */}
        <h1
          className={`text-lg sm:text-xl md:text-2xl font-semibold transition-all duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Aditya Wirayudha
        </h1>
        {/* Portofolio */}
        <p
          className={`text-lg sm:text-xl md:text-2xl font-light tracking-wide mt-1 md:mt-0 transition-all duration-1000 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Portfolio
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
