import React from "react";
import "../css/HouseEnd.css";

import cupcake from "../assets/images/house-cupcake.svg";
import oven from "../assets/images/house-oven.svg";

import BackBtn from "./BackBtn";

function HouseEnd({ previousPage }) {
  return (
    <div className="HouseEnd">
      <h1 className="title title-HouseBenefits">דגשים</h1>
      <div className="HouseEnd-content">
        <img src={cupcake} alt="house-cupcake" className="house-cupcake" />
        <img src={oven} alt="house-oven" className="house-oven" />
      </div>
      <BackBtn color={"#011760"} onClick={previousPage} />
    </div>
  );
}

export default HouseEnd;
