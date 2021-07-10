import { useState } from "react";
import Fade from "react-reveal/Fade";
import { ProjectData as projects } from "./data/ProjectData";
import Projects from "./Projects";

const Portfolio = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(true);

  const handleClick = () => {
    setShowMoreProjects(false);
  };

  return (
    <div
      id="portfolio"
      className="w-full m-auto max-w-screen-lg text-left px-8 mt-32"
    >
      <div>
        <Fade bottom>
          <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            Projects
          </h1>
        </Fade>
        <ul className="hidden md:flex items-center mt-6">
          <li className="text-brand cursor-pointer opacity-100 hover:opacity-100 transition-opacity duration-700 ease-out px-4 py-1 bg-brand-light rounded-lg">
            All
          </li>
          <li className="text-brand cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-700 ease-out px-4 py-1 bg-brand-light ml-3 rounded-lg">
            Full Stack
          </li>
          <li className="text-brand cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-700 ease-out px-4 py-1 bg-brand-light ml-3 rounded-lg">
            Design
          </li>
          <li className="text-brand cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-700 ease-out px-4 py-1 bg-brand-light ml-3 rounded-lg">
            Game Dev
          </li>
          <li className="text-brand cursor-pointer opacity-40 hover:opacity-100 transition-opacity duration-700 ease-out px-4 py-1 bg-brand-light ml-3 rounded-lg">
            Others
          </li>
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-10">
          <Projects projects={projects} showMore={showMoreProjects} />
        </div>

        <div className="flex items-center justify-center">
          <Fade bottom>
            {showMoreProjects && (
              <button
                onClick={handleClick}
                className="inline-block border-2 border-solid border-brand px-5 py-3 text-brand rounded-md cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-700 ease-in-out mt-12 md:mt-24 md:text-xl"
              >
                Show More
              </button>
            )}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
