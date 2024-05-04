import "./Main.css";
import Hero from "../Hero/Hero";
import About from "../About/About";

const Main = ({ skills }) => {
  return (
    <main className="content">
      <Hero skills={skills} />
      <About />
    </main>
  );
};

export default Main;
