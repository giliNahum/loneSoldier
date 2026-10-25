import React from "react";
import "../css/MiluimStart.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import img from "../assets/images/MiluimStart-img.svg";

function MiluimStart({ nextPage, prevPage }) {
  return (
    <div className="MiluimStart">
      <h1 className="title title-exceptions">חייל בודד הנכנס ברצף משחרורו לשירות מילואים פעיל</h1>
      <img src={img} alt="MiluimStart-img" className="MiluimStart-img" />
      <NextBtn color={"#032057"} onClick={nextPage} />
      <BackBtn color={"#032057"} onClick={prevPage} />
    </div>
  )
}

export default MiluimStart
