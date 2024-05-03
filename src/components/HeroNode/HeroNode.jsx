import "./HeroNode.css";

const HeroNode = ({ skill }) => {
  return (
    <li className="heronode" key={skill._id}>
      <p className="heronode__text">{skill.text}</p>
    </li>
  );
};

export default HeroNode;
