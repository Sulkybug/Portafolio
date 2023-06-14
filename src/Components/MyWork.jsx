import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MyWork.css";
import { Projects } from "./Projects";

function MyWork() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="myWork">
      <div className="boxProjects">
        <h2 className="titleMyWork">Here are a few projects I've worked on.</h2>

        <Slider {...settings}>
          {Projects.map((item) => (
            <div className="project">
              <a
                href={item.link}
                target="_blank"
                className="imgLink"
                data="Visit Website >"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  height="550"
                  className="imgProj"
                  loading="lazy"
                />
              </a>
              <div className="textBox">
                <p className="projectName">{item.name}</p>
                <a href={item.codeLink} target="_blank" className="checkCode">
                  Check code
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MyWork;
