import { PROJECTS } from "@/data/projects";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="min-h-50 mt-14 sm:mt-24 font-mono"
    >
      {/* Section Heading */}
      <h2
        id="projects-heading"
        className="font-mono font-semibold mb-10 text-2xl"
      >
        Projects
      </h2>

      {/* List of projects */}
      <div className="pl-3 sm:pl-4 ">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isLastProject={index === PROJECTS.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
