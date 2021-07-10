import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

const Projects = ({ projects, showMore, projectsToShow }) => {
  const isEven = (index) => {
    return index % 2 === 0;
  };

  const numberOfProjects = showMore ? projectsToShow : projects.length;
  return (
    <>
      {projects.slice(0, numberOfProjects).map((project, index) => {
        return isEven(index) ? (
          <Fade left key={index}>
            <ProjectCard
              thumbnail={project.thumbnail}
              name={project.name}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          </Fade>
        ) : (
          <Fade right key={index}>
            <ProjectCard
              thumbnail={project.thumbnail}
              name={project.name}
              description={project.description}
              tags={project.tags}
              links={project.links}
            />
          </Fade>
        );
      })}
    </>
  );
};

export default Projects;
