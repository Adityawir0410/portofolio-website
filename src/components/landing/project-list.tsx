import { motion } from 'framer-motion'

interface Project {
    id: string
    title: string
    image: string
    description: string
  }
  
  interface ProjectListProps {
    projects: Project[]
    onProjectClick: (project: Project) => void
    onProjectHover: (project: Project) => void
    hoveredProject: Project
  }
  
  const ProjectList = ({ projects, onProjectClick, onProjectHover, hoveredProject }: ProjectListProps) => {
    return (
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onClick={() => onProjectClick(project)}
            onMouseEnter={() => onProjectHover(project)}
            className={`cursor-pointer transition-colors duration-300 ${
              hoveredProject.id === project.id ? 'text-white' : 'text-gray-400'
            }`}
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal">
              {project.title}
            </h3>
          </motion.div>
        ))}
      </div>
    )
  }
  
  export default ProjectList