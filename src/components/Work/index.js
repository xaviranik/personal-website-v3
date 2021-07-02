import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "./work.scss";

const index = () => {
  return (
    <div
      id="work"
      className="w-full m-auto max-w-screen-lg text-left px-8 mt-32"
    >
      <div className="section-heading">
        <Fade bottom>
          <h1 className="text-gray-300 text-2xl font-medium underline-x md:inline-block md:text-3xl">
            Work Experiences
          </h1>
        </Fade>
      </div>
      <div>
        <Fade left>
          <div className="my-8 bg-navy-light border-solid rounded-md p-5 md:p-6">
            <div className="text-sm text-gray-500 md:text-md">
              <h1 className="text-base font-medium text-gray-400 md:text-lg">
                Sofware Engineer{" "}
                <span className="text-brand opacity-90 animate-pulse">
                  <Link
                    to={{
                      pathname: "https://wedevs.com/",
                    }}
                    target="_blank"
                  >
                    @ weDevs
                  </Link>
                </span>
              </h1>
              <h2 className="mt-1 text-gray-400">June 2020 - Present</h2>
              <ul className="leading-relaxed mt-6">
                <li className="relative pl-5 mt-3 md:mt-4">
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Proposed and implemented scalable solutions to issues
                  identified with cloud services and applications responsible
                  for communicating with Starry Station
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Engineered and maintained major features of Starry's
                  customer-facing web app using ES6, Handlebars, Backbone,
                  Marionette and CSS
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Developed and maintained code for in-house and client websites
                  primarily using HTML, CSS, Sass, JavaScript, and jQuery
                </li>
              </ul>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="my-8 bg-navy-light border-solid rounded-md p-5 md:p-6 shadow-gray">
            <div className="text-sm text-gray-500 md:text-md">
              <h1 className="text-base font-medium text-gray-400 md:text-lg">
                Software Engineer{" "}
                <span className="text-brand opacity-90 animate-pulse">
                  <Link
                    to={{
                      pathname: "https://united.com.bd/",
                    }}
                    target="_blank"
                  >
                    @ United Group
                  </Link>
                </span>
              </h1>
              <h2 className="mt-1 text-gray-400">October 2019 - May 2020</h2>
              <ul className="leading-relaxed mt-6">
                <li className="relative pl-5 mt-3 md:mt-4">
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Proposed and implemented scalable solutions to issues
                  identified with cloud services and applications responsible
                  for communicating with Starry Station
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Engineered and maintained major features of Starry's
                  customer-facing web app using ES6, Handlebars, Backbone,
                  Marionette and CSS
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Developed and maintained code for in-house and client websites
                  primarily using HTML, CSS, Sass, JavaScript, and jQuery
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default index;
