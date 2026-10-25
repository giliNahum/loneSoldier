import React from "react";
import "../css/ReleasedInterview.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import couch from "../assets/images/Released-couch.svg";

function ReleasedInterview({ nextPage, prevPage }) {
  return (
    <div className="ReleasedInterview">
      <h1 className="title title-exceptions">חייל בודד הפוסל שירות</h1>
      <img src={couch} alt="couch" className="Released-couch" />
      <p className="ReleasedInterview-text">יש לחבר את החייל, באישורו, לעמותות וגורמי סיוע שיוכלו להמשיך ללוות אותו לאחר השחרור</p>
      <NextBtn color={"#032057"} onClick={nextPage} />
      <BackBtn color={"#032057"} onClick={prevPage} />
    </div>
  );
}

export default ReleasedInterview;
