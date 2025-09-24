import React, { useState } from "react";
import "./certificates.css";
import { MyEdu } from "../Utils/Info";

const Education = MyEdu;

function Certificates() {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="section-title">My Certificates</h2>
      <p className="certificate-subtitle">My personal journey</p>
      <div className="certs-and-experience">
        <div>
          <i className="fas fa-graduation-cap"></i> Education
        </div>
        {/* <div onClick={changeExp}><i className="fas fa-briefcase"></i> Experience</div> */}
      </div>
      <div className="edu-timeline">
        <div className="cert-line"></div>
        <div className="cert">
          {Education.map((cert, idx) => (
            <div className="edu" key={idx}>
              <div className="cert-dot"></div>
              <div className="cert-item">
                <h4>{cert.title}</h4>
                <p>
                  <i className="fas fa-university"></i> {cert.organization}
                </p>
                <p>
                  <i className="fas fa-calendar-alt"></i> {cert.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
