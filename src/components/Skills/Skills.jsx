import React from "react";
import { MySkills } from "../Utils/Info";
// import { FaReact, FaHtml5, FaJs, FaCss3, FaNodeJs, Fa500Px } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <p className="skills-subtitle">My Technical level</p>
      <div className="skills-container">
        <div className="skills-box">
          <h3>Fullstack Skills</h3>
          <div className="skills-list">
            {MySkills.map((skill, index) => (
              <div className="badge" key={index}>
                <img src={skill.PNG} alt={skill.alter} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-box">
          <h3>Basic Skills</h3>
          <div className="basic-skills-list">
            <div className="basic-skills">
              <span className="icon">🤝</span> Teamwork
            </div>
            <div className="basic-skills">
              <span className="icon">🗣️</span> Communication
            </div>
            <div className="basic-skills">
              <span className="icon">♻️</span> Adaptability
            </div>
            <div className="basic-skills">
              <span className="icon">🔥</span> Commitment
            </div>
            <div className="basic-skills">
              <span className="icon">🧘‍♂️</span> Patience
            </div>
            <div className="basic-skills">
              <span className="icon">🎯</span> Problem Solving
            </div>
            <div className="basic-skills">
              <span className="icon">💡</span> Creativity
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
