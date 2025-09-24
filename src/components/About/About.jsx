import React from "react";
import "./About.css";
import profilepic from "../../assets/my-pic.jpg";

function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="image-container">
          <img src={profilepic} alt="profile" />
        </div>
        <div className="text-container">
          <p>
            Hello! I'm <strong>Kingsley Chukwudi Okoro</strong>, a Full-Stack
            Developer with a passion for crafting dynamic, high-performance web
            applications. I specialize in building scalable and efficient
            digital solutions using modern web technologies.
          </p>
          <p>
            With a strong foundation in both{" "}
            <span className="highlight">
              front-end and back-end development
            </span>
            , I bridge the gap between design and functionality, ensuring
            seamless user experiences and robust system architectures. Whether
            it's designing sleek UI components or optimizing database
            performance, I thrive on solving complex problems with clean,
            maintainable code.
          </p>
          <p>
            In addition to my technical abilities, I have{" "}
            <span className="highlight">strong communication skills</span> and
            work well in a <span className="highlight">team environment</span>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
