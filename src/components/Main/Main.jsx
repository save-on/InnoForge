import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills/Skills";

const Main = ({ skills }) => {
  return (
    <main className="content">
      <Hero skills={skills} />
      <About />
      <Skills skills={skills} />
    </main>
  );
};

export default Main;
