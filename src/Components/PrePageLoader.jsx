import React, { useEffect, useState } from "react";
import "./PrePageLoader.css";

function PrePageLoader() {
  const [WebStar, SetWebStar] = useState("preLoader");

  useEffect(() => {
    const timer = setTimeout(() => {
      SetWebStar("hidePreLoad");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={WebStar}>
      <h2 className="textLoading">Loading..</h2>
    </div>
  );
}

export default PrePageLoader;
