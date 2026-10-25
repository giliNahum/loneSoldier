import React, { useState } from "react";
import "../css/HousingGap.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import close from "../assets/images/HousingGap-close.svg";
import open from "../assets/images/HousingGap-open.svg";

function HousingGap({ nextPage, previousPage, isBack }) {
  const [canContinue, setCanContinue] = useState(isBack);
  const [isCabinetOpen, setIsCabinetOpen] = useState(false);

  const changeImg = () => {
    setIsCabinetOpen((prev) => !prev);

    if (!canContinue) {
      setCanContinue(true);
    }
  };

  return (
    <div className="HousingGap">
      <h1 className="title title-HouseBenefits">פער בהטבת הלנה</h1>

      <p className="HouseBenefits-instruction">
        - לחצו על הארונית כדי ללמוד מה עושים במקרה של פער בהטבת לינה -
      </p>

      <img
        src={isCabinetOpen ? open : close}
        alt={isCabinetOpen ? "ארונית פתוחה" : "ארונית סגורה"}
        className={`HousingGap-cabinet ${
            isCabinetOpen ? "HousingGap-cabinet--open" : ""
          }`}
        onClick={changeImg}
      />

<BackBtn color={"#502009"} onClick={previousPage} />

<NextBtn color={"#502009"} onClick={nextPage} disabled={!canContinue} />
    </div>
  );
}

export default HousingGap;