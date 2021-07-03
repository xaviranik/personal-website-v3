import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import logo from "../../assets/xlogo.svg";

const Logo = (prop) => {
  const toggleHome = () => {
    console.log("clicked");
    scroll.scrollToTop();
  };

  return (
    <LinkS onClick={toggleHome} to="/">
      <img className={`${prop.height} logo`} src={logo} alt="Logo" />
    </LinkS>
  );
};

export default Logo;
