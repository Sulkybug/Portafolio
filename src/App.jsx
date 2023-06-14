import React, { useState } from "react";
import PrePageLoader from "./Components/PrePageLoader";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutMe from "./Components/AboutMe";
import MyWork from "./Components/MyWork";
import ContactMe from "./Components/ContactMe";
import LateralBar from "./Components/LateralBar";
import Footer from "./Components/Footer";
//import Images from "./Components/Images";

function App() {
  const [onScroll, SetOnScroll] = useState("");
  const [classDiv, SetClassDiv] = useState("focusArea");

  window.onscroll = function () {
    SetOnScroll(window.pageYOffset > 0 ? "scroll-nav" : "");
    SetClassDiv(window.pageYOffset > 0 ? "" : "focusArea");
  };

  return (
    <div className="App">
      <PrePageLoader />
      <Navbar onScroll={onScroll} SetOnScroll={SetOnScroll} />
      <HeroSection classDiv={classDiv} SetClassDiv={SetClassDiv} />
      <AboutMe />
      <MyWork />
      <ContactMe />
      <LateralBar />
      <Footer />
    </div>
  );
}

export default App;
