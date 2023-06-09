import React from "react";
import "./ContactMe.css";
import { FaPaperPlane } from "react-icons/fa";

function ContactMe() {
  return (
    <section id="ContactMe">
      <div>
        <h2 className="titleContactMe"> Hey there!</h2>
      </div>
      <div className="contactMeBox">
        <div className="boxImgContact">
          <img
            className="ContactImg"
            src="/Portafolio/img/developer.png"
            alt="SulkyBug"
            height="512"
            width="512"
          />
        </div>

        <div className="formBox">
          <p className="p-ContactMe">Let's work together... </p>
          <hr className="hrContact" />
          <form
            action="https://formsubmit.co/feang_c0@hotmail.com"
            method="post"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              required
            />
            <input
              type="text"
              name="Subject"
              id="Subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="80"
              rows="6"
              placeholder="Type your message here"
              required
            ></textarea>
            <button className="sendMessage">
              Send Message <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
