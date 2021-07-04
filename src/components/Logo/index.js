import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/xlogo.svg";

const Logo = (prop) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <LinkS onClick={toggleHome} to="/" className="cursor-pointer">
      <img
        className={`${prop.height} logo ${prop.isScrolled && "scrolled"}`}
        src={logo}
        alt="Logo"
      />
    </LinkS>
  );
};

export default Logo;
