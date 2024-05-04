import "./About.css";
import image from "../../assets/about-img.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <div className="about__text">
          <p className="about__p-tag">{`<p>`}</p>
          <p className="about__summary">
            Hello! My name is Sinan and I specialize in web developement that
            utilizes HTML, CSS, JS, and REACT etc. I am a highly motivated
            individual and eternal optimist dedicated to writing clear, concise,
            robust code that works. Striving to never stop learning and
            improving. When I'm not coding, I am writing bolgs, reading, or
            picking up some new hands-on art project like photography. I like to
            have my perspective and belief systems challenged so that I see the
            world through new eyes.
          </p>
          <p className="about__p-tag">{`</p>`}</p>
        </div>
      </div>
      <img src={image} alt="about image" className="about__image" />
    </section>
  );
};

export default About;
