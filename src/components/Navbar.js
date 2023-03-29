import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import { socialLinks } from "../data";
import SocialLinks from "./SocialLinks";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <PageLinks parentClass="nav-links" itemClass="nav-link" />

          <ul className="nav-icons">
            {socialLinks.map((link) => {
              return (
                <SocialLinks key={link.id} {...link} itemClass="nav-icon" />
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
