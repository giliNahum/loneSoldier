import React, { useState } from "react";
import "../css/CancelHouse.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import ktzina from "../assets/images/ktzina.svg";
import book from "../assets/images/cancelHouseBook.png";
import Recipe from "../assets/images/cancelHouseRecipe.svg";
import Note1 from "../assets/images/cancelHouseRecipeNote1.svg";
import Note2 from "../assets/images/cancelHouseRecipeNote2.svg";

function CancelHouse({ nextPage, previousPage, isBack }) {
  const [page, setPage] = useState(isBack ? 1 : 0);
  const toBack = () => {
    if (page === 0) {
      previousPage();
    } else {
      setPage(0);
    }
  };
  return (
    <div className="CancelHouse">
      <h1 className="title title-HouseBenefits">ביטול הטבת פתרון דיור</h1>
      {page === 0 && <p className="HouseBenefits-instruction">- לחצו על ספר המתכונים -</p>}
      <div className="CancelHouse-content">
        <div className="ktzina-bubble ktzina-bubble-CancelHouse">
          <div className={`bubble bubble-CancelHouse${page}`}>{page === 0 ?  <p>בואו נלמד על <strong>המתכון המנצח</strong> לביטול הטבת פתרון דיור!</p> : <p>כך נפעל במידה וחייל מעוניין לשנות פתרון דיור!</p>}
    
          </div>
           <img src={ktzina} alt="קצינה" className="ktzina-CancelHouse" />
        </div>
        {page === 0 && <img src={book} alt="book" className="cancelHouseBook" onClick={()=> setPage(1)} />}
       {page === 1 && <img src={Recipe} alt="Recipe" className="cancelHouseRecipe" />}
       {page === 1 && <div className="cancelHouseRecipeNotes">
            <img src={Note1} alt="cancelHouseRecipe" className="cancelHouseRecipeNote1" />
            <img src={Note2} alt="cancelHouseRecipe" className="cancelHouseRecipeNote2" />
        </div>}
      </div>
      <BackBtn color={"#502009"} onClick={toBack} />

      <NextBtn color={"#502009"} onClick={nextPage} disabled={page !== 1} />
    </div>
  );
}

export default CancelHouse;
