"use client";

import { useState, useRef } from "react";
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
}

const projects: Project[] = [
  {
    id: "1",
    title: "Unikahidha",
    mediaType: "image",
    mediaUrl: "/Adit_DDM.jpg",
    description:
      "A modern website for Unikahidha, featuring responsive design and interactive elements.",
    category: "Web Dev",
  },
  {
    id: "2",
    title: "Edutech",
    mediaType: "image",
    mediaUrl: "/placeholder.svg?height=500&width=400",
    description:
      "An elegant platform for a boutique hotel, highlighting its unique features and local attractions.",
    category: "Web Dev",
  },
  {
    id: "3",
    title: "Alarem",
    mediaType: "image",
    mediaUrl: "/Alarem.jpeg",
    description:
      "An elegant platform for a boutique hotel, highlighting its unique features and local attractions.",
    category: "App Dev",
  },

  {
    id: "4",
    title: "LawMate",
    mediaType: "image",
    mediaUrl: "/placeholder.svg?height=500&width=400",
    description:
      "An elegant platform for a boutique hotel, highlighting its unique features and local attractions.",
    category: "App Dev",
  },
  {
    id: "5",
    title: "CALTRACK",
    mediaType: "image",
    mediaUrl: "/Caltrack.png",
    description:
      "An elegant platform for a boutique hotel, highlighting its unique features and local attractions.",
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
      "A luxurious hotel website showcasing breathtaking views and top-notch amenities. Watch the stunning video tour on YouTube.",
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
      "A luxurious hotel website showcasing breathtaking views and top-notch amenities. Watch the stunning video tour on YouTube.",
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
      "A luxurious hotel website showcasing breathtaking views and top-notch amenities. Watch the stunning video tour on YouTube.",
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
      "A luxurious hotel website showcasing breathtaking views and top-notch amenities. Watch the stunning video tour on YouTube.",
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
      "A luxurious hotel website showcasing breathtaking views and top-notch amenities. Watch the stunning video tour on YouTube.",
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

  return (
    <div className="relative min-h-screen bg-black" ref={containerRef}>
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

      <div className="pt-16 sm:pt-24 px-4 relative z-20">
        <div className="flex justify-center space-x-8 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`text-lg transition-colors duration-300 ${
              selectedCategory === "All" ? "text-white" : "text-gray-400"
            }`}
          >
            All
          </button>
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
              className="flex flex-col items-center"
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
              <div className="flex flex-col sm:flex-row justify-between w-full mt-12 px-4">
                <button
                  onClick={handleBackToList}
                  className="text-white text-base sm:text-lg hover:underline focus:outline-none mb-4 sm:mb-0"
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
                projects={filteredProjects}
                onProjectClick={handleProjectClick}
                onProjectHover={handleProjectHover}
                hoveredProject={hoveredProject}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecentWork;
