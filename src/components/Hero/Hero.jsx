import "./Hero.css";
import HeroNode from "../HeroNode/HeroNode";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faLink,
  faLocationDot,
  faEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import image from "../../assets/hero-image.avif";

const Hero = ({ skills }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <img src={image} alt="hero image" className="hero__image" />
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
          <ul className="hero__nodes">
            {skills.map((skill) => {
              return <HeroNode skill={skill} key={skill._id} />;
            })}
          </ul>
        </ul>
        <a
          className="hero__resume-btn"
          href="http://"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
          <FontAwesomeIcon className="hero__resume-icon" icon={faDownload} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
