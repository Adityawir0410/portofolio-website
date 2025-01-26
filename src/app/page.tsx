"use client";

import { useEffect, useState } from "react";
import Skils from "@/components/landing/skils";
import AboutMe from "@/components/landing/aboutmei";
import FallingStars from "@/components/effects/FallingStars";
import RecentWork from "@/components/landing/recentworks";
import SplashScreen from "@/components/effects/SplashScreen";
import ContactMe from "@/components/landing/contactme";

export default function Portfolio() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const roles = ["Web Developer", "Android Developer", "Video Editor"];
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/anak-agung-ngurah-aditya-wirayudha-722aa2289/",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      name: "GitHub",
      url: "https://github.com/Adityawir0410",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: "Email",
      url: "mailto:anakwirayudha@student.ub.ac.id",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const rotateY = ((event.clientX - windowWidth / 2) / windowWidth) * 20;
      const rotateX = -((event.clientY - windowHeight / 2) / windowHeight) * 20;
      setCardRotation({ x: rotateX, y: rotateY });
    };

    const handlePointerEvents = () => {
      const hoveredElement = document.elementFromPoint(
        cursorPosition.x,
        cursorPosition.y
      );
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor ===
          "pointer"
      );
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1000);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handlePointerEvents);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handlePointerEvents);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(roleInterval);
    };
  }, [cursorPosition.x, cursorPosition.y]);

  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden cursor-none">
      <SplashScreen />
      <FallingStars />
      {/* Background Polka Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 2px, transparent 2px)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Background Gradient Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* New Large Left Gradient Circle */}
        <div className="absolute left-[-50%] top-[-25%] w-[150vw] h-[150vw] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(147,51,234,0.1) 30%, rgba(147,51,234,0) 70%)',
            filter: 'blur(100px)',
          }}
        />
        
        {/* Top-right gradient circle */}
        <div className="absolute top-[-300px] right-[-300px] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(147,51,234,0) 70%)',
          }}
        />
        
        {/* Bottom-left gradient circle */}
        <div className="absolute bottom-[-300px] left-[-300px] w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0) 70%)',
          }}
        />
      </div>

      {/* Custom Cursor - Only white circle */}
      <div
        className="fixed w-8 h-8 pointer-events-none mix-blend-difference z-50 transition-transform duration-100 ease-out"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </div>

      <main className="relative">
        {/* First Section - Profile */}
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 relative max-w-7xl mx-auto w-full px-4 md:px-8 pb-16 sm:pb-0">
          {/* Left side - Name and Role */}
          <div
            className="text-left md:w-1/2 mt-16 sm:mt-20 md:mt-0"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
              opacity: 1 - scrollY * 0.001,
            }}
          >
            <div className="flex flex-col space-y-2">
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
                Aditya
              </h1>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
                Wirayudha
              </h1>
            </div>
            <div className="mt-4 md:mt-8 h-12 overflow-hidden">
              <p
                className="text-xl md:text-2xl lg:text-4xl font-light text-gray-400 tracking-wide transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(${-currentRole * 3}rem)`,
                }}
              >
                {roles.map((role, index) => (
                  <span
                    key={role}
                    className="block h-12"
                    style={{
                      opacity: currentRole === index ? 1 : 0,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    {role}
                  </span>
                ))}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Glass Card */}
          <div
            className="w-[220px] h-[330px] sm:w-[250px] sm:h-[375px] md:w-[350px] md:h-[525px] lg:w-[400px] lg:h-[600px] rounded-xl relative transform-gpu transition-transform duration-200 ease-out mt-6 mb-8 sm:mt-8 sm:mb-0 md:mt-0"
            style={{
              transform: `rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg) translateY(${scrollY * 0.2}px)`,
              backgroundImage:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.18)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              opacity: 1 - scrollY * 0.001,
            }}
          >
            <img
              src="/carddepan.jpg"
              alt="Profile"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </section>
        {/* Second Section - About */}
        <AboutMe/>

        {/* Third Section - Skills */}
        <Skils />

        {/* Fourth Section - Portfolio */}
        <RecentWork />
        <ContactMe/>

        <footer className="py-6 text-black text-lg text-center  w-full bg-white">
          © 2025 Aditya Wirayudha. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}