"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';

interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
}

const games: Game[] = [
  {
    id: 1,
    title: "Web Enthusiast",
    image: "/cover.svg",
    description: "I am a Web Enthusiast skilled in creating responsive and user-friendly websites."
  },
  {
    id: 2,
    title: "Mobile Enthusiast",
    image: "/banneratasdepan.svg",
    description: "I am a Mobile Enthusiast with a focus on building Android applications using Flutter."
  },
  {
    id: 3,
    title: "Video Editor",
    image: "/punya adit.png",
    description: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
];

const AboutMeWithCards = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const startXRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsSwiping(true);
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
  };

  const handleCardClick = (id: number) => {
    if (!isSwiping) {
      setActiveId(id);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      <div 
        className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.4) 0%, rgba(147,51,234,0.2) 40%, rgba(147,51,234,0) 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute bottom-[-400px] right-[-400px] w-[1000px] h-[1000px] rounded-full opacity-50"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0.2) 40%, rgba(236,72,153,0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-16 sm:pt-24">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40">
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.1)] p-[3px]">
              <div className="bg-white h-full w-full rounded-full">
                <Image
                  src="/Foto1.jpg"
                  alt="Profile Picture"
                  width={160}
                  height={160}
                  className="rounded-full w-full h-full object-cover p-1 hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 tracking-tight text-black">
            About Me
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            I am a passionate developer with 4 years of experience in video editing and expertise in creating websites and Android applications. I love turning ideas into impactful digital experiences that leave a lasting impression.
          </p>
        </div>

        <div 
          className="flex overflow-x-auto gap-6 pb-12 px-4 hide-scrollbar"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {games.map((game) => (
            <div
              key={game.id}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-500 ease-in-out cursor-pointer
                ${activeId === game.id ? 'w-[280px] sm:w-[500px] shadow-2xl' : 'w-[240px] sm:w-[320px]'}
                h-[300px] sm:h-[400px] group select-none
              `}
              onClick={() => handleCardClick(game.id)}
            >
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.title}
                width={500}
                height={400}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
              
              <div className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transition-transform duration-300 ease-in-out pointer-events-none
                ${activeId === game.id ? 'translate-y-0' : 'translate-y-[calc(100%-70px)]'}
              `}>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-4">{game.title}</h3>
                <p className={`transition-all duration-300 delay-200
                  ${activeId === game.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}>
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeWithCards;
