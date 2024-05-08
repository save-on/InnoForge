import "./SkillNodes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";

const SkillNodes = () => {
  return (
    <ul className="skillNodes">
      <li className="skillNode skillNode__yellow">
        <FontAwesomeIcon className="skillNode__icon" icon={faJs} />
        <p className="skillNode__text">JS</p>
      </li>
      <li className="skillNode skillNode__cyan">
        <FontAwesomeIcon className="skillNode__icon" icon={faReact} />
        <p className="skillNode__text">React</p>
      </li>
      <li className="skillNode skillNode__green">
        <FontAwesomeIcon className="skillNode__icon" icon={faNodeJs} />
        <p className="skillNode__text">Node</p>
      </li>
      <li className="skillNode skillNode__red">
        <FontAwesomeIcon className="skillNode__icon" icon={faHtml5} />
        <p className="skillNode__text">Html</p>
      </li>
    </ul>
  );
};

export default SkillNodes;
