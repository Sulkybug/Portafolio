import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutMe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/O3pz7XtMOF8?controls=0&autoplay=1&mute=1&playsinline=1&playlist=O3pz7XtMOF8&loop=1"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture; web-share"
      ></iframe>
      <div className="coverVideo"></div>
      <div className="boxAbout">
        <p className="langTitle">My ToolBox</p>
        <div className="boxIcons">
          <img
            src="/Portafolio/img/js.png"
            alt="Javascript"
            title="Javascript"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/typescript.png"
            alt="typescript"
            title="Typescript"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/css-3.png"
            alt="CSS"
            title="CSS"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/html-5.png"
            alt="HTML"
            title="HTML"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/react.png"
            alt="REACT"
            title="REACT"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/git.png"
            alt="Git"
            title="Git"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/python.png"
            alt="Python"
            title="Python"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/github.png"
            alt="github"
            title="Github"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />

          <img
            src="/Portafolio/img/visual-studio.png"
            alt="Visual Studio Code"
            title="Visual Studio Code"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
        </div>
      </div>
      <div className="boxAboutMe">
        <div>
          <img
            src="/Portafolio/img/web-development.png"
            alt="CP"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
          <img
            src="/Portafolio/img/pilot.png"
            alt="Pilot"
            className="langImg"
            width="512"
            height="512"
            loading="lazy"
          />
        </div>

        <h2 className="titleAbout">About Me</h2>
        <hr className="hrAbout" />
        <p className="textAboutMe">
          I am a Pilot and a <strong>Frontend Developer ReactJS. </strong>{" "}
          Proficient in JavaScript, TypeScript, CSS, HTML, and React, with
          intermediate knowledge of Python and SQL.
        </p>
        <p className="textAboutMe">
          Adept at collaborating with teams to deliver high-quality web
          applications. Seeking to leverage my skills and passion for web
          development in a dynamic and innovative company.
        </p>
        <a href="#ContactMe">
          <button className="sendToContact">Send me a message</button>
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
