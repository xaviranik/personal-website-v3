import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useState } from "react";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Logo from "../../components/Logo";
import "./navbar.scss";

const Navbar = ({ toggle }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBackground);

  return (
    <nav
      className={`flex justify-center items-center sticky transition duration-500 ease-in-out top-0 z-20 h-20 bg-navy ${
        navbar ? "scrolled" : ""
      }`}
    >
      <Fade top>
        <div className="flex justify-between items-center h-20 z-10 w-full px-8 max-w-screen-xl">
          <Logo isScrolled={navbar} height="h-8" />
          <div className="md:hidden text-2xl text-brand" onClick={toggle}>
            <HiOutlineMenuAlt1 />
          </div>
          <ul className="hidden md:flex items-center list-none text-md font-medium text-center -mr-10">
            <li className="h-20">
              <LinkS
                className="flex items-center px-10 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out cursor-pointer"
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-140}
              >
                About
              </LinkS>
            </li>
            <li className="h-20">
              <LinkS
                className="flex items-center px-10 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out cursor-pointer"
                to="portfolio"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-140}
              >
                Projects
              </LinkS>
            </li>
            <li className="h-20">
              <LinkS
                className="flex items-center px-10 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out cursor-pointer"
                to="contact"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-60}
              >
                Contact
              </LinkS>
            </li>
            <li className="h-20">
              <LinkR
                className="flex items-center px-10 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out cursor-pointer"
                to={{
                  pathname: "https://dev.to/xaviranik",
                }}
                target="_blank"
              >
                Blog
              </LinkR>
            </li>
          </ul>
          <LinkR
            className="hidden md:flex border-2 border-solid border-brand px-5 py-1 text-brand rounded-lg hover:bg-brand-light font-medium transition duration-700 ease-in-out"
            to={{
              pathname: "https://cutt.ly/Fmke96K",
            }}
            target="_blank"
          >
            Resume
          </LinkR>
        </div>
      </Fade>
    </nav>
  );
};

export default Navbar;
