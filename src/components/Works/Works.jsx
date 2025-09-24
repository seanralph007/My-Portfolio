import React from "react";
import "./Works.css";
import { MyWorks } from "../Utils/Info";

const projects = MyWorks;

function Works() {
  return (
    <section id="works" className="works-container">
      <h2 className="section-title">My Works</h2>
      <p className="works-subtitle">Recent Works</p>
      <div className="works-grid">
        {projects.map((project, index) => (
          <div className="works" key={index}>
            <div className="image-and-links">
              <div className="img-container">
                <img src={project.image} />
              </div>
              <div className="links">
                <a
                  href={project.demo}
                  target="blank"
                  rel="noopener noreferrer"
                  className="btn-demo"
                >
                  Demo
                </a>
                <a
                  href={project.github}
                  target="blank"
                  rel="noopener noreferrer"
                  className="btn-git"
                >
                  Github Link
                </a>
              </div>
            </div>
            <div className="description-and-stack">
              <div className="work-description">
                <h3 className="work-title">{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="stacks">
                {project.tags.map((tag, i) => (
                  <span className="stack" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Works;
