import "./Main.css";
import Hero from "../Hero/Hero";

const Main = ({ skills }) => {
  return (
    <main className="content">
      <Hero skills={skills} />
    </main>
  );
};

export default Main;
