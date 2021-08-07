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
          <div className="my-8 bg-navy-light border-solid rounded-lg p-5 md:p-6">
            <div className="text-sm text-gray-500 md:text-md">
              <h1 className="text-base font-medium text-gray-400 md:text-lg">
                Software Engineer{" "}
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
              <h2 className="mt-1 text-gray-400"> June 2020 - Present </h2>
              <ul className="leading-relaxed mt-6">
                <li className="relative pl-5 mt-3 md:mt-4">
                  Develop business and client - specific requirements of new
                  modules, features, and enhancements for WooCommerce based
                  large - scale system -{" "}
                  <Link
                    className="text-brand opacity-50"
                    to={{
                      pathname: "https://wedevs.com/dokan",
                    }}
                    target="_blank"
                  >
                    Dokan ( WordPress Plugin )
                  </Link>
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Streamline plugin features to effectively fix the bugs and
                  optimize overall performance, reliability, and efficiency
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Maintain release cycle, Assist team members through
                  architectural and code reviews
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Ensure elevated standards of project management in an Agile
                  environment and communicate with multi-disciplinary teams
                </li>
              </ul>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="my-8 bg-navy-light border-solid rounded-lg p-5 md:p-6 shadow-gray">
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
              <h2 className="mt-1 text-gray-400"> October 2019 - May 2020 </h2>
              <ul className="leading-relaxed mt-6">
                <li className="relative pl-5 mt-3 md:mt-4">
                  Developed a sophisticated Admin panel for WellBeing mobile
                  application for the management and comprehensive reports
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Conceptualized system architecture, designed, assembled
                  Laravel backend to consolidate business requirements
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Implemented, optimized REST APIs, integrated live sync with
                  external POS of outlets
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Established a Live notification system and user-centric
                  customized payment gateway
                </li>
              </ul>
            </div>
          </div>
        </Fade>

        <Fade left>
          <div className="my-8 bg-navy-light border-solid rounded-lg p-5 md:p-6">
            <div className="text-sm text-gray-500 md:text-md">
              <h1 className="text-base font-medium text-gray-400 md:text-lg">
                Freelancer{" "}
                <span className="text-brand opacity-90 animate-pulse">
                  @ Marketplaces
                </span>
              </h1>
              <h2 className="mt-1 text-gray-400">
                {" "}
                April 2018 - September 2019{" "}
              </h2>
              <ul className="leading-relaxed mt-6">
                <li className="relative pl-5 mt-3 md:mt-4">
                  Architected and implemented modern, performant, maintainable
                  code for a diverse array of client and internal projects
                </li>
                <li className="relative pl-5 mt-3 md:mt-4">
                  Oversaw and collaborated with a small team of fellow
                  freelancers devs to spearhead technical requirements for
                  client - specified requirements
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
