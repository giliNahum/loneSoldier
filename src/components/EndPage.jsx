import React from "react";
import "../css/EndPage.css";

import ToHouseBtn from "./ToHouseBtn";
import restartImg from "../assets/images/restart-img.svg";
import EndPageImg from "../assets/images/EndPage-img.svg";

function EndPage({ setSection }) {
  return (
    <div className="EndPage">
      <ToHouseBtn didFinish={false} backToHouse={() => setSection(1)} />
      <img src={EndPageImg} alt="EndPageImg" className="EndPageImg" />
      <div className="restart-btn" onClick={() => setSection(0)}>
        <img src={restartImg} alt="restartImg" className="restartImg" />
        <p>התחל מחדש</p>
      </div>
    </div>
  );
}

export default EndPage;
