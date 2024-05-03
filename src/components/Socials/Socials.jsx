import "./Socials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <nav className="socials">
      <ul className="socials__items">
        <li className="socials__item">
          <FontAwesomeIcon className="socials__icon" icon={faLinkedin} />
          <a className="socials__text" href="#">
            LinkedIn
          </a>
        </li>
        <li className="socials__item">
          <FontAwesomeIcon className="socials__icon" icon={faGithub} />
          <a className="socials__text" href="#">
            Github
          </a>
        </li>
        <li className="socials__item">
          <FontAwesomeIcon className="socials__icon" icon={faDiscord} />
          <a className="socials__text" href="#">
            Discord
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Socials;
