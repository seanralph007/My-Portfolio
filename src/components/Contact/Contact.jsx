import React, { useRef } from "react";
import { FaTwitter, FaGoogle } from "react-icons/fa";
import emailjs from "emailjs-com";
import { alertMessage } from "../Utils/Notifications";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmailMess = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_haq5gzo",
        "template_1w5zi25",
        form.current,
        "uCU4nxLfvAMM4urjf"
      )
      .then(
        (result) => {
          alertMessage();
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Send again");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <h4 className="contact-subtitle">Reach Me, I'm ready to work</h4>
      <div className="contacts-container">
        <div className="socials">
          <div className="social">
            <i className="contact-icon">
              <FaTwitter />
            </i>
            <h3>Twitter</h3>
            <p>KingsleyChuk007</p>
            <a href="https://x.com/KingsleyChuk007" className="contact-icon">
              write me →
            </a>
          </div>
          <div className="social">
            <i href="#" className="contact-icon">
              <FaGoogle />
            </i>
            <h3>Email</h3>
            <p>web3chuks007@gmail.com</p>
            <p className="contact-icon">write me →</p>
          </div>
        </div>
        <div className="write-me">
          <form className="form" ref={form} onSubmit={sendEmailMess}>
            <input
              type="text"
              name="name"
              placeholder="Whats your name"
              className="name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Whats your email"
              className="email"
              required
            ></input>
            <textarea
              name="message"
              placeholder="Write me"
              className="message"
              required
            ></textarea>
            <button type="submit">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
