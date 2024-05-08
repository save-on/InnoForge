import "./Skills.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import SkillsTab from "../SkillsTab/SkillsTab";
import SkillNodes from "../SkillNodes/SkillNodes";

const Skills = () => {
  return (
    <section className="skills">
      <SectionTitle title="skills" />
      <p className="skills__description">
        Always striving to never stop growing and improving
      </p>
      <SkillsTab className="skills__tab" />
      <SkillNodes />
    </section>
  );
};

export default Skills;
