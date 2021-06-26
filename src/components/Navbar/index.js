import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import "./navbar.scss";

const index = () => {
  return (
    <nav className="flex justify-center items-center sticky transition duration-500 ease-in-out top-0 z-20 h-20">
      <div className="flex justify-between items-center h-20 z-10 w-full px-8 max-w-screen-xl">
        <Logo height="h-8" />
        <div className="md:hidden text-2xl text-brand">
          <HiOutlineMenuAlt1 />
        </div>
        <ul className="hidden md:flex items-center list-none text-lg text-center -mr-5">
          <li className="h-20">
            <Link className="flex items-center px-5 h-full text-brand" to="/">
              About
            </Link>
          </li>
          <li className="h-20">
            <Link className="flex items-center px-5 h-full text-brand" to="/">
              Projects
            </Link>
          </li>
          <li className="h-20">
            <Link className="flex items-center px-5 h-full text-brand" to="/">
              Blog
            </Link>
          </li>
          <li className="h-20">
            <Link className="flex items-center px-5 h-full text-brand" to="/">
              Contact
            </Link>
          </li>
        </ul>
        <Link
          className="border-2 border-solid border-brand px-4 py-1 text-brand rounded-md hover:bg-brand hover:text-navy transition duration-500 ease-in-out"
          to="/"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default index;
