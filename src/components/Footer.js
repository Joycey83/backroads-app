import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";
import { socialLinks } from "../data";

const Footer = () => {
  return (
    <>
      <footer className="section footer">
        <PageLinks
          key={PageLinks.id}
          parentClass="footer-links"
          itemClass="footer-link"
        />
        {/* Keeping this as a reference IF it was not a seperate component*/}
        {/* <ul className="footer-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="footer-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul> */}

        <ul className="footer-icons">
          {socialLinks.map((link) => {
            return (
              <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
            );
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    </>
  );
};
export default Footer;
