import { useState, useRef } from 'react';
import Image from 'next/image';

const games = [
  {
    id: 1,
    title: "Dota 2",
    image: "/image1.png",
    description: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
  {
    id: 2,
    title: "The Witcher 3",
    image: "/image2.png",
    description: "The Witcher 3 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
  {
    id: 3,
    title: "RDR 2",
    image: "/image3.png",
    description: "RDR 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
  {
    id: 4,
    title: "PUBG Mobile",
    image: "/image4.png",
    description: "PUBG 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
  {
    id: 5,
    title: "Fortnite",
    image: "/image5.png",
    description: "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III."
  },
  {
    id: 6,
    title: "Far Cry 5",
    image: "/image6.png",
    description: "Far Cry 5 is a 2018 first-person shooter game developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III."
  }
];

const Portfolio = () => {
  const [activeId, setActiveId] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCardClick = (id, e) => {
    // Only toggle active state if not dragging
    if (!isDragging) {
      setActiveId(id);
    }
  };

  return (
    <section className="min-h-screen bg-black py-24">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div 
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 pb-12 -mx-4 px-4 cursor-grab active:cursor-grabbing scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {games.map((game) => (
            <div
              key={game.id}
              className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 ease-in-out
                ${activeId === game.id ? 'w-[500px] shadow-2xl' : 'w-[320px]'}
                h-[400px] group select-none
              `}
              onClick={(e) => handleCardClick(game.id, e)}
            >
              <Image
                src={game.image}
                alt={game.title}
                width={500}
                height={400}
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>
              
              <div className={`absolute bottom-8 sm:bottom-10 md:bottom-12 left-0 right-0 p-3 sm:p-4 md:p-6 text-white transition-transform duration-300 ease-in-out pointer-events-none
                ${activeId === game.id ? 'translate-y-0' : 'translate-y-[calc(100%-42px)] sm:translate-y-[calc(100%-48px)] md:translate-y-[calc(100%-54px)]'}
              `}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">{game.title}</h3>
                <p className={`text-sm sm:text-base transition-all duration-300 delay-200 line-clamp-3
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

export default Portfolio;