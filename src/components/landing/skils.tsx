'use client'

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="min-h-screen bg-black py-12 md:py-16 px-4 relative overflow-hidden">
      {/* Gradient Circle - Left Top with Animation */}
      <motion.div
        animate={{
          y: [0, -80, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-0 w-[200px] md:w-[300px] lg:w-[600px] h-[200px] md:h-[300px] lg:h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Yellow Gradient Circle - Right Top - Moving Down and Up */}
      <motion.div
        animate={{
          y: [0, 100, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute -top-20 md:-top-10 right-0 md:right-8 w-[150px] md:w-[200px] lg:w-[400px] h-[150px] md:h-[200px] lg:h-[400px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.3) 0%, rgba(255,215,0,0.1) 40%, rgba(255,215,0,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Gradient Circle - Right Middle - Moving Up and Down */}
      <motion.div
        animate={{
          y: [0, -100, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-20 md:right-0 w-[300px] md:w-[400px] lg:w-[700px] h-[300px] md:h-[400px] lg:h-[700px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24 md:mb-32" // Increased bottom margin further
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 md:mb-8">
            Tech Stack
          </h2>
        </motion.div>

        <div className="flex justify-center items-center mb-16 md:mb-20"> {/* Increased bottom margin */}
          {/* Circle Background */}
          <div className="relative w-full max-w-[280px] md:max-w-md aspect-square">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10"></div>
          </div>

          {/* Stacked Cards */}
          <div className="absolute w-full max-w-sm md:max-w-xl lg:max-w-2xl">
            <div className="relative flex flex-col justify-start gap-y-5 md:gap-y-6 w-full"> {/* Increased gap further */}
              <GlassCard
                title="Frontend"
                items={["React", "Next.js", "Tailwind CSS"]}
                className="-translate-y-[10%] md:-translate-y-[20%] z-30" // Increased translation
              />
              <GlassCard
                title="Backend"
                items={["Node.js", "Express", "MongoDB"]}
                className="-translate-y-[40%] md:-translate-y-[50%] self-end z-20" // Increased translation
              />
              <GlassCard
                title="Tools"
                items={["Git", "Docker", "VS Code"]}
                className="-translate-y-[70%] md:-translate-y-[80%] z-10" // Increased translation
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface GlassCardProps {
  title: string;
  items: string[];
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ title, items, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-3 md:p-4 flex flex-col justify-center ${className}`}
    >
      <h3 className="text-white text-base md:text-lg lg:text-2xl font-semibold mb-1 md:mb-2">
        {title}
      </h3>
      <ul className="text-white/80 text-sm md:text-base lg:text-lg">
        {items.map((item, index) => (
          <li key={index} className="mb-0.5 md:mb-1">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Skills;