import React, { useState } from "react";
import "../css/HouseVisit.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import island from "../assets/images/HouseVisit-img.svg";
import ktzina from "../assets/images/ktzina.svg";

function HouseVisit({ nextPage, previousPage, isBack }) {
    const [canContinue, setCanContinue] = useState(isBack);
    const [isPopOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="HouseVisit">
      <h1 className="title title-HouseBenefits"> ביקור מפקדים וסגל ת”ש במקום מגורים</h1>
      <p className="HouseVisit-text">על פי פקודה, קיימת <strong>חובת ביצוע ביקור בית על ידי מפקדים וסגל הת"ש של החייל, במקומות מגוריו.</strong> וזאת במטרה להכיר את תנאי מנוריו של החייל הבודד, זכאי הסיוע או ההלנ"פ ולוודא שהינם סבירים.</p>
      <img src={island} alt="HouseVisit-img" className="HouseVisit-img" onClick={()=> setIsPopupOpen(true)} />
      <p className="HouseVisit-instruction">- לחצו על אי המטבח -</p>
      {isPopOpen && <div className="blur-background"></div>}
     {isPopOpen && <div className="HouseVisit-popup">
        <button
            type="button"
            className="HouseVisit-popup-close"
            onClick={() => {
                setCanContinue(true);
              setIsPopupOpen(false);
            }}
            aria-label="סגירת הדוגמה"
          >
            ×
          </button>
        <p className="boldText">מי יבצע את הביקור?</p>
        <ul>
            <li>הביקור יתבצע ע”י מפקדו הישיר של החייל, קצין או נגד.</li>
            <li>עובד צה”ל, המפקד על החיילים, שהוכשר לראיין / לבקר חיילים, ומפקד היחידה אישר לו לבצע</li>
        </ul>
        <img src={ktzina} alt="ktzina" className="ktzina-HouseVisit" />
      </div>}
      <BackBtn color={"#502009"} onClick={previousPage} />

      <NextBtn color={"#502009"} onClick={nextPage} disabled={!canContinue} />
    </div>
  );
}

export default HouseVisit;
