import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <img src="" alt="" className="hero__image" />
        <h1 className="hero__title">Sayvon</h1>
        <p className="hero__occupation">Full-stack Developer</p>
        <ul className="hero__information-list">
          <li className="hero__information">
            <FontAwesomeIcon className="hero__icon" icon={faEnvelope} />
            <p className="hero__text">sedmon033@gmail.com</p>
          </li>
          <li className="hero__information">
            <FontAwesomeIcon className="hero__icon" icon={faLocationDot} />
            <p className="hero__text">Minnesota</p>
          </li>
          <li className="hero__information">
            <FontAwesomeIcon className="hero__icon" icon={faBriefcase} />
            <p className="hero__text">Freelance</p>
          </li>
          <li className="hero__information">
            <FontAwesomeIcon className="hero__icon" icon={faLink} />
            <p className="hero__text">link to this website</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
