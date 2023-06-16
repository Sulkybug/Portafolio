import React, { useEffect, useState } from "react";
import "./PrePageLoader.css";

function PrePageLoader() {
  const [WebStar, SetWebStar] = useState("preLoader");

  useEffect(() => {
    const timer = setTimeout(() => {
      SetWebStar("hidePreLoad");
      console.log("I am here");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={WebStar}>
      <img
        src="/Portafolio/img/logo.png"
        alt="icon"
        className="myLogoPreload"
        loading="lazy"
      />
      <h2 className="textLoading">Loading..</h2>
    </div>
  );
}

export default PrePageLoader;
