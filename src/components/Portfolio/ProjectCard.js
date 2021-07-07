import { Link } from "react-router-dom";
import ProjectPopup from "./ProjectPopup";

const ProjectCard = ({ thumbnail, name, description, tags, links }) => {
  return (
    <div>
      <div className="bg-navy-light rounded-lg p-5 md:p-6 cursor-pointer transform hover:-translate-y-2 transition duration-1000 ease-in-out min-h-full">
        <Link
          to={{
            pathname: links.github,
          }}
          target="_blank"
        >
          <img
            className="rounded-md transition-transform duration-700 ease-out transform hover:scale-105"
            src={thumbnail}
            alt={`${name}-thumbnail`}
          />
        </Link>
        <div className="flex items-center justify-between text-brand mt-10">
          <h1 className="text-gray-400 font-medium text-lg md:text-xl hover:text-brand transition duration-700">
            {name}
          </h1>
          <div className="text-gray-400 flex items-center">
            <ProjectPopup name={name} />
            {links.github && (
              <Link
                to={{
                  pathname: links.github,
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 ml-4 hover:text-brand transition duration-1000 ease-in-out transform hover:-translate-y-1"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
            )}
            {links.external && (
              <Link
                to={{
                  pathname: links.external,
                }}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 ml-4 hover:text-brand transition duration-1000 ease-in-out transform hover:-translate-y-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-4">
          <div className="text-gray-500">
            <p className="text-sm mt-3 leading-relaxed">{description}</p>
          </div>
          <div className="font-mono text-brand opacity-80 text-sm mt-6 animate-pulse">
            <ul className="flex items-center">
              {tags.map((tag, key) => {
                return (
                  <li key={key} className="first:ml-0 ml-4">
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
