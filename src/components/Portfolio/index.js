import Fade from "react-reveal/Fade";
import ProjectCard from "./ProjectCard";
import { ProjectData } from "./data/ProjectData";

const Portfolio = () => {
  const isEven = (index) => {
    return index % 2 === 0;
  };

  return (
    <div
      id="portfolio"
      className="w-full m-auto max-w-screen-lg text-left px-8 mt-32"
    >
      <div className="section-heading">
        <Fade bottom>
          <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            Projects
          </h1>
        </Fade>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-8">
          {ProjectData.map((project, index) => {
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
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
