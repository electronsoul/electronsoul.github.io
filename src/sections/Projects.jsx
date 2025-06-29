import { myProjects } from "../constants";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="relative c-space section-spacing" id="work">
        <h2 className="text-heading">💡 Projects Under Light</h2>
        <div className="bg-gradient-to-r from-transparent
        via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

        { myProjects.map((project) => (
            <Project key={project.id} {...project} />
        ))}

    </div>
  )
}

export default Projects