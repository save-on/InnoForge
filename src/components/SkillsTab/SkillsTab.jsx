import "./SkillsTab.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDesktop, faDatabase } from "@fortawesome/free-solid-svg-icons";

const SkillsTab = () => {
  return (
    <div className="skillsTab">
      <ul className="skillsTab__list">
        <li className="skillsTab__item">
          <FontAwesomeIcon className="skillsTab__icon" icon={faDesktop} />
          <p className="skillsTab__title">web development</p>
          <p className="skillsTab__skills">HTML·CSS·JS·REACT</p>
        </li>
        <li className="skillsTab__item">
          <FontAwesomeIcon className="skillsTab__icon" icon={faDatabase} />
          <p className="skillsTab__title">backend development</p>
          <p className="skillsTab__skills">MONGODB·EXPRESS·NODE</p>
        </li>
      </ul>
    </div>
  );
};

export default SkillsTab;
