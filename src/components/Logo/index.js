import { Link } from "react-router-dom";
import logo from "../../assets/xlogo.svg";

const Logo = (prop) => {
  return (
    <Link to="/">
      <img className={`${prop.height} logo`} src={logo} alt="Logo" />
    </Link>
  );
};

export default Logo;
