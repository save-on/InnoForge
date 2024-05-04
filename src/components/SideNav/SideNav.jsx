import "./SideNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faCode,
  faGears,
  faFeather,
} from "@fortawesome/free-solid-svg-icons";

const SideNav = ({ handleIdClick, location }) => {
  console.log(location);
  return (
    <nav className="sidenav">
      {/* sidenav__button sidenav__(location) */}
      <ul className="sidenav__list">
        <li className="sidenav__item" id="home" onClick={handleIdClick}>
          <button
            className={`sidenav__button ${
              location === "home"
                ? "sidenav__home_active"
                : "sidenav__home_inactive"
            }`}
            name="home"
          >
            <FontAwesomeIcon className="sidenav__icon" icon={faHouse} />
          </button>
        </li>
        <li className="sidenav__item" id="about" onClick={handleIdClick}>
          <button
            className={`sidenav__button ${
              location === "about"
                ? "sidenav__about_active"
                : "sidenav__about_inactive"
            }`}
            name="about"
          >
            <FontAwesomeIcon className="sidenav__icon" icon={faUser} />
          </button>
        </li>
        <li className="sidenav__item" id="skills" onClick={handleIdClick}>
          <button
            className={`sidenav__button ${
              location === "skills"
                ? "sidenav__skills_active"
                : "sidenav__skills_inactive"
            }`}
            name="skills"
          >
            <FontAwesomeIcon className="sidenav__icon" icon={faCode} />
          </button>
        </li>
        <li className="sidenav__item" id="works" onClick={handleIdClick}>
          <button
            className={`sidenav__button ${
              location === "works"
                ? "sidenav__works_active"
                : "sidenav__works_inactive"
            }`}
            name="works"
          >
            <FontAwesomeIcon className="sidenav__icon" icon={faGears} />
          </button>
        </li>
        <li className="sidenav__item" id="contact" onClick={handleIdClick}>
          <button
            className={`sidenav__button ${
              location === "contact"
                ? "sidenav__contact_active"
                : "sidenav__contact_inactive"
            }`}
            name="contact"
          >
            <FontAwesomeIcon className="sidenav__icon" icon={faFeather} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
