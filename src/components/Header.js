import NavLinks from "./NavLinks";
import logo from "../images/LOGO_N-removebg-preview.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Atharva Bhawsar' Logo"
       width="200"
      />
      <NavLinks />
    </header>
  );
};

export default Header;
