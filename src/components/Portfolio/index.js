import { useState } from "react";
import Fade from "react-reveal/Fade";
import { ProjectData as projects } from "./data/ProjectData";
import Projects from "./Projects";

const Portfolio = () => {
  const [showMoreProjectsButton, setShowMoreProjectsButton] = useState(true);
  // eslint-disable-next-line
  const [projectsToShow, setProjectsToShow] = useState(4);
  const [currentProjects, setCurrentProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  // eslint-disable-next-line
  const [filterCatorgies, setfilterCatorgies] = useState([
    "All",
    "Full Stack",
    "Design",
    "Game Dev",
    "Others",
  ]);

  const handleClick = () => {
    setShowMoreProjectsButton(false);
  };

  const filterProjects = (category) => {
    let filteredProjects = projects;
    if (category !== "All") {
      filteredProjects = projects.filter((item) => {
        return item.category === category;
      });
    }

    setShowMoreProjectsButton(
      filteredProjects.length > projectsToShow ? true : false
    );
    setActiveFilter(category);
    setCurrentProjects([]);
    setTimeout(() => {
      setCurrentProjects(filteredProjects);
    }, 1);
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
        <ul className="hidden md:flex items-center justify-end mt-6">
          {filterCatorgies.map((filter, index) => {
            return (
              <li
                key={index}
                onClick={() => filterProjects(filter)}
                className={`cursor-pointer text-brand opacity-60 hover:opacity-100 transition duration-700 ease-out px-4 py-1 ml-4 first:ml-0 rounded-lg ${
                  activeFilter === filter && "bg-brand-light opacity-100"
                }`}
              >
                {filter}
              </li>
            );
          })}
        </ul>
        <div className="md:hidden flex items-center justify-between mt-6">
          <div className="px-3 py-2 border border-solid border-brand border-opacity-30 opacity-30 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 text-brand"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
          </div>
          <select
            onChange={(event) => filterProjects(event.target.value)}
            defaultValue={activeFilter}
            className="ml-2 relative appearance-none text-brand w-full bg-navy-light border border-navy hover:border-brand px-4 py-3 rounded-lg leading-tight focus:outline-none focus:shadow-outline"
          >
            {filterCatorgies.map((filter, index) => {
              return (
                <option value={filter} key={index} className="rounded-lg">
                  {filter}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-10">
          <Projects
            projects={currentProjects}
            projectsToShow={projectsToShow}
            showMore={showMoreProjectsButton}
          />
        </div>

        <div className="flex items-center justify-center">
          <Fade bottom>
            {showMoreProjectsButton && (
              <button
                onClick={handleClick}
                className="inline-block border-2 border-solid border-brand px-5 py-3 text-brand rounded-lg cursor-pointer transform hover:bg-brand-light text-md font-medium transition duration-700 ease-in-out mt-12 md:mt-24 md:text-xl"
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
