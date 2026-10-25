import React, { useState } from "react";
import "../css/HouseAppeal.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";
import HouseAppealsvg from "./HouseAppealsvg";

function HouseAppeal({ nextPage, previousPage, isBack }) {
  const [canContinue, setCanContinue] = useState(isBack);
  return (
    <div>
      <h1 className="title title-HouseBenefits">ערעור</h1>
      <p className="HouseBenefits-instruction">- לחצו על כל כירה כדי ללמוד על דגשי הערעור -</p>
      <HouseAppealsvg setCanContinue={setCanContinue}/>
      <BackBtn color={"#502009"} onClick={previousPage} />

      <NextBtn color={"#502009"} onClick={nextPage} disabled={!canContinue} />
    </div>
  );
}

export default HouseAppeal;
