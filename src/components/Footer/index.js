import React from "react";

const Footer = () => {
  return (
    <div className="bg-navy-light p-12 text-gray-400">
      <div className="w-full m-auto max-w-screen-lg md:flex items-center justify-between">
        <div>
          <p className="text-sm md:text-md text-gray-500">
            All rights reserved
          </p>
          <p className="text-sm md:text-md mt-2">
            Designed & Developed by{" "}
            <span className="text-brand animate-pulse">Zabir Anik</span>
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <div className="flex items-center">
            <svg
              className="h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="text-sm ml-2">(+880) 1814-015492</div>
          </div>
          <div className="flex items-center mt-2">
            <svg
              className="h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="text-sm ml-2">zabiranik.me@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
