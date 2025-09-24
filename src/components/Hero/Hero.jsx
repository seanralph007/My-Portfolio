import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="socials-links">
          <a href="https://x.com/KingsleyChuk007" className="socials-icon">
            <FaTwitter />
          </a>
          <a href="https://github.com/seanralph007" className="socials-icon">
            <FaGithub />
          </a>
          <a href="#" className="socials-icon">
            <FaLinkedin />
          </a>
        </div>
        <div className="hero-div">
          <p className="intro">
            <span role="img" aria-label="wave">
              👋
            </span>
            Hey there, I'm
          </p>
          <h1 className="my-name">Kingsley Chukwudi</h1>
          <h2 className="subtitle">
            A Full-Stack Developer Crafting Seamless Digital Experiences
          </h2>
          <p className="description">
            I specialize in building{" "}
            <span className="highlight">
              scalable, high-performance web applications
            </span>{" "}
            with a passion for crafting{" "}
            <span className="highlight">intuitive user experiences. </span>
            From sleek frontend designs to powerful backend architectures, I
            turn ideas into reality using modern web technologies. 🚀
          </p>
        </div>
        <div className="reach-me">
          <div className="broken-box"></div>
          <p>
            <a href="#contact" className="ready-to-work">
              Reach Me, I am ready to work <span className="cursor">💻</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
