import "./SectionTitle.css";

const SectionTitle = ({ title }) => {
  return (
    <div className="sectionTitle">
      <h2 className="sectionTitle__title">{title}</h2>
      <ul className="sectionTitle__underline">
        <li className="sectionTitle__dot"></li>
        <li className="sectionTitle__line"></li>
        <li className="sectionTitle__dot"></li>
      </ul>
    </div>
  );
};

export default SectionTitle;
