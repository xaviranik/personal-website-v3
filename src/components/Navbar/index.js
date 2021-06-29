import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import Logo from "../../components/Logo";
import "./navbar.scss";

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-center items-center sticky transition duration-500 ease-in-out top-0 z-20 h-20">
      <Fade top>
        <div className="flex justify-between items-center h-20 z-10 w-full px-8 max-w-screen-xl">
          <Logo height="h-8" />
          <div className="md:hidden text-2xl text-brand" onClick={toggle}>
            <HiOutlineMenuAlt1 />
          </div>
          <ul className="hidden md:flex items-center list-none text-md font-medium text-center -mr-5">
            <li className="h-20">
              <Link
                className="flex items-center px-7 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out active"
                to="/"
              >
                About
              </Link>
            </li>
            <li className="h-20">
              <Link
                className="flex items-center px-7 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out"
                to="/"
              >
                Projects
              </Link>
            </li>
            <li className="h-20">
              <Link
                className="flex items-center px-7 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out"
                to="/"
              >
                Blog
              </Link>
            </li>
            <li className="h-20">
              <Link
                className="flex items-center px-7 h-full text-gray-300 hover:text-brand transition duration-700 ease-in-out"
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            className="hidden md:flex border-2 border-solid border-brand px-5 py-1 text-brand rounded-md hover:bg-brand hover:text-navy font-medium transition duration-700 ease-in-out"
            to="/"
          >
            Resume
          </Link>
        </div>
      </Fade>
    </nav>
  );
};

export default Navbar;
