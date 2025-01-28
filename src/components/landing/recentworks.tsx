"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectList from "./project-list";
import ProjectCard from "./project-card";

interface Project {
  id: string;
  title: string;
  mediaType: "image" | "localVideo" | "youtubeVideo";
  mediaUrl: string;
  thumbnailUrl?: string;
  youtubeId?: string;
  description: string;
  category: "Web Dev" | "App Dev" | "Video Editing";
  websiteUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Unikahidha",
    mediaType: "image",
    mediaUrl: "/cover.svg",
    description:
      "Website resmi UKM UNIT AKTIVITAS KEROHANIAN HINDU DHARMA Universitas Brawijaya. Menampilkan informasi kegiatan, artikel, dan resources untuk mahasiswa Hindu di UB.",
    category: "Web Dev",
    websiteUrl: "https://unikahidha.ub.ac.id",
  },
  {
    id: "2",
    title: "Edutech",
    mediaType: "image",
    mediaUrl: "/edutechs.svg",
    description:
      "Website platform edukasi modern yang dirancang untuk memberikan pengalaman belajar interaktif, menarik, dan mudah diakses untuk berbagai kebutuhan pendidikan.",
    category: "Web Dev",
    websiteUrl: "https://edutech-fe-tjvy.vercel.app",
  },
  {
    id: "3",
    title: "CALTRACK",
    mediaType: "image",
    mediaUrl: "/Caltrack.png",
    description:
      "CalTrack adalah aplikasi berbasis mobile yang dirancang untuk mempermudah pelacakan nutrisi dan kesehatan secara otomatis berbasis AI",
    category: "App Dev",
    websiteUrl: "https://github.com/caltrack-mage-x/CALTRACK-APP",
  },

  {
    id: "4",
    title: "LawMate",
    mediaType: "image",
    mediaUrl: "/lawmate.svg",
    description:
      "LawMate adalah aplikasi mobile yang membantu pengguna memahami hukum dengan menyediakan panduan hukum praktis, informasi legal, dan konsultasi berbasis AI.",
    category: "App Dev",
  },

  {
    id: "5",
    title: "Alarem",
    mediaType: "image",
    mediaUrl: "/Alarem.jpeg",
    description:
      "Alarem adalah aplikasi inovatif yang dirancang untuk mengelola alarm pintar dengan fitur kustomisasi unik dan pengingat berbasis lokasi.",
    category: "App Dev",
  },

  {
    id: "6",
    title: "Company Profile",
    mediaType: "youtubeVideo",
    mediaUrl: "https://www.youtube.com/watch?v=mtCJcgzGRiE&t=617s",
    youtubeId: "mtCJcgzGRiE", // Extracted from the YouTube URL
    thumbnailUrl: "/placeholder.svg?height=500&width=400",
    description:
      "Video profil perusahaan yang menampilkan keunggulan layanan, fasilitas, dan pencapaian perusahaan secara profesional. Saksikan video eksklusifnya di YouTube.",
    category: "Video Editing",
  },
  {
    id: "7",
    title: "Merch BUT 2024",
    mediaType: "youtubeVideo",
    mediaUrl: "https://www.youtube.com/watch?v=0c5fIbn4VWQ",
    youtubeId: "0c5fIbn4VWQ", // Extracted from the YouTube URL
    thumbnailUrl: "/placeholder.svg?height=500&width=400",
    description:
      "Video promosi merchandise resmi BUT 2024 dengan visual 3D yang menarik dan desain unik. Tonton videonya di YouTube.",
    category: "Video Editing",
  },
  {
    id: "8",
    title: "Inaugurasi FILKOM UB",
    mediaType: "youtubeVideo",
    mediaUrl: "https://www.youtube.com/watch?v=w_aVsf8cTws",
    youtubeId: "w_aVsf8cTws", // Extracted from the YouTube URL
    thumbnailUrl: "/placeholder.svg?height=500&width=400",
    description:
      "Highlight acara Inaugurasi FILKOM Universitas Brawijaya yang penuh momen berkesan dan inspiratif. Simak keseruan acara ini melalui video YouTube.",
    category: "Video Editing",
  },
  {
    id: "9",
    title: "Merch HBCC 2024",
    mediaType: "youtubeVideo",
    mediaUrl: "https://www.youtube.com/watch?v=UU0jwxtmVbU",
    youtubeId: "UU0jwxtmVbU", // Extracted from the YouTube URL
    thumbnailUrl: "/placeholder.svg?height=500&width=400",
    description:
      "Video promosi merchandise HBCC 2024 dengan tampilan desain kreatif dan visual menarik. Tonton selengkapnya di YouTube.",
    category: "Video Editing",
  },
  {
    id: "10",
    title: "3D Merch HBCC",
    mediaType: "youtubeVideo",
    mediaUrl: "https://www.youtube.com/watch?v=ex24xbDbx68",
    youtubeId: "ex24xbDbx68", // Extracted from the YouTube URL
    thumbnailUrl: "/placeholder.svg?height=500&width=400",
    description:
      "Visualisasi 3D merchandise HBCC yang memberikan pengalaman interaktif dan realistis. Saksikan keunikan desainnya di YouTube.",
    category: "Video Editing",
  },
];

const categories = ["Web Dev", "App Dev", "Video Editing"] as const;

const RecentWork = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project>(projects[0]);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[number] | "All"
  >("App Dev");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appDevProjects = projects.filter(
      (project) => project.category === "App Dev"
    );
    const caltrackProject = appDevProjects.find(
      (project) => project.title === "CALTRACK"
    );
    if (caltrackProject) {
      setHoveredProject(caltrackProject);
    } else if (appDevProjects.length > 0) {
      setHoveredProject(appDevProjects[0]);
    }
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleProjectHover = (project: Project) => {
    setHoveredProject(project);
  };

  const handleBackToList = () => {
    setSelectedProject(null);
  };

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects =
    filteredProjects.length > 0
      ? filteredProjects
      : projects.filter((project) => project.category === "App Dev");

  return (
    <div
      className="relative min-h-screen bg-black pb-32 md:pb-48 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

      <div className="pt-16 sm:pt-24 px-4 relative z-20">
        <div className="flex justify-center space-x-8 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg transition-colors duration-300 ${
                selectedCategory === category ? "text-white" : "text-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {selectedProject ? (
            <motion.div
              key="selected-project"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center mb-24 md:mb-32"
            >
              <motion.h2
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 text-center px-4"
              >
                {selectedProject.title}
              </motion.h2>
              <ProjectCard project={selectedProject} />
              <motion.p
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-white text-base sm:text-lg mt-8 max-w-2xl text-center px-4"
              >
                {selectedProject.description}
              </motion.p>
              {selectedProject.websiteUrl && (
                <motion.a
                  href={selectedProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-8 inline-block bg-white text-black px-6 py-3 rounded-md text-lg hover:bg-opacity-90 transition-colors"
                >
                  Visit
                </motion.a>
              )}
              <div className="flex flex-col sm:flex-row justify-between w-full mt-12 px-4 relative z-30">
                <button
                  onClick={handleBackToList}
                  className="text-white text-base sm:text-lg hover:underline focus:outline-none mb-4 sm:mb-0 cursor-pointer relative z-30"
                >
                  Back to List
                </button>
                <span className="text-white text-base sm:text-lg">
                  Scroll to explore
                </span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="project-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24"
            >
              <ProjectCard project={hoveredProject} />
              <ProjectList
                projects={displayedProjects}
                onProjectClick={handleProjectClick}
                onProjectHover={handleProjectHover}
                hoveredProject={hoveredProject}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute -bottom-1 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,160L48,160C96,160,192,160,288,186.7C384,213,480,267,576,266.7C672,267,768,213,864,208C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default RecentWork;
