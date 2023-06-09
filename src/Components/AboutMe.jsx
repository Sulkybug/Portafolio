import React from "react";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutMe">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Rcv7BzNfPvU?controls=0&autoplay=1&mute=1&playsinline=1&playlist=Rcv7BzNfPvU&loop=1"
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
          />
          <img
            src="/Portafolio/img/typescript.png"
            alt="typescript"
            title="Typescript"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/css-3.png"
            alt="CSS"
            title="CSS"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/html-5.png"
            alt="HTML"
            title="HTML"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/react.png"
            alt="REACT"
            title="REACT"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/git.png"
            alt="Git"
            title="Git"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/sass.png"
            alt="Sass"
            title="Sass"
            className="langImg"
            width="512"
            height="512"
          />
          <img
            src="/Portafolio/img/github.png"
            alt="github"
            title="Github"
            className="langImg"
            width="512"
            height="512"
          />

          <img
            src="/Portafolio/img/visual-studio.png"
            alt="Visual Studio Code"
            title="Visual Studio Code"
            className="langImg"
            width="512"
            height="512"
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
          />
          <img
            src="/Portafolio/img/pilot.png"
            alt="Pilot"
            title="Andres A"
            className="langImg"
            width="512"
            height="512"
          />
        </div>

        <h2 className="titleAbout">About Me</h2>
        <hr className="hrAbout" />
        <p className="textAboutMe">
          I am a Pilot and a{" "}
          <strong> JR Frontend Developer Javascript, ReactJS. </strong> I love
          learning and applying my knowlege, always thinking how make things in
          the best way possible.
          <br />
          Currently improving my skills in Algorithm solutions, AI and Computer
          Science learning about Javascript Canvas.
        </p>
        <a href="#ContactMe">
          <button className="sendToContact">Send me a message</button>
        </a>
      </div>
    </section>
  );
}

export default AboutMe;
