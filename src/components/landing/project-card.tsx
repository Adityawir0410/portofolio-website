import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  mediaType: 'image' | 'localVideo' | 'youtubeVideo'
  mediaUrl: string
  thumbnailUrl?: string
  youtubeId?: string
  description: string
  category: 'Web Dev' | 'App Dev' | 'Video Editing'
}

interface ProjectCardProps {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  // Function to extract YouTube ID from URL if needed
  const getYoutubeId = (url: string): string => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
    const match = url.match(regExp)
    return (match && match[7].length === 11) ? match[7] : ''
  }

  // Handle video play state
  const handleVideoPlay = () => {
    setIsVideoPlaying(true)
  }

  const handleVideoPause = () => {
    setIsVideoPlaying(false)
  }

  // Reset video state when project changes
  useEffect(() => {
    setIsVideoPlaying(false)
    setIsLoaded(false)
  }, [project.id])

  const renderMedia = () => {
    switch (project.mediaType) {
      case 'image':
        return (
          <img
            src={project.mediaUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            onLoad={() => setIsLoaded(true)}
          />
        )

      case 'localVideo':
        return (
          <>
            <video
              className="w-full h-full object-cover"
              src={project.mediaUrl}
              poster={project.thumbnailUrl}
              controls
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onLoadedData={() => setIsLoaded(true)}
            />
            {!isVideoPlaying && (
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-opacity"
                  onClick={() => {
                    const video = document.querySelector('video')
                    video?.play()
                  }}
                >
                  <svg 
                    className="w-8 h-8 text-black" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            )}
          </>
        )

      case 'youtubeVideo':
        const youtubeId = project.youtubeId || getYoutubeId(project.mediaUrl)
        return (
          <>
            <div className="relative w-full h-0 pb-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoaded(true)}
              />
            </div>
            {!isLoaded && project.thumbnailUrl && (
              <div className="absolute inset-0">
                <img
                  src={project.thumbnailUrl}
                  alt={`${project.title} thumbnail`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </>
        )
    }
  }

  return (
    <motion.div
      className="relative w-full max-w-2xl aspect-video rounded-lg overflow-hidden bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {renderMedia()}
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </motion.div>
  )
}

export default ProjectCard