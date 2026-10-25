import React, { useState } from "react";
import "../css/HouseBenefits.css";

import ToHouseBtn from "./ToHouseBtn";

import ktzina from "../assets/images/ktzina.svg";
import AfterLone from "./AfterLone";
import HouseOptions from "./HouseOptions";
import CancelHouse from "./CancelHouse";
import HouseAppeal from "./HouseAppeal";
import HousingGap from "./HousingGap";
import HouseVisit from "./HouseVisit";
import VisitWhen from "./VisitWhen";
import HouseEnd from "./HouseEnd";

function HouseBenefits({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
  const [page, setPage] = useState(0);
  const LAST_PAGE = 7;
  const backToHouse = () => {
    if (didFinish) {
      onComplete();
    } else {
      onBack();
    }
  };

  const handleNextPage = () => {
    setIsBackNavigation(false); // מאפסים את מצב החזרה
    if (page + 1 === LAST_PAGE) {
      setTimeout(() => {
        setDidfinish(true);
      }, 500);
    }

    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
    setPage(page - 1);
  };
  return (
    <div className="HouseBenefits">
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse} />
      {page === 0 && (
        <AfterLone nextPage={handleNextPage} isBack={isBackNavigation} />
      )}
      {page === 1 && (
        <HouseOptions
          nextPage={handleNextPage}
          isBack={isBackNavigation}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 2 && (
        <CancelHouse
          nextPage={handleNextPage}
          isBack={isBackNavigation}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 3 && (
        <HouseAppeal
          nextPage={handleNextPage}
          isBack={isBackNavigation}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 4 && (
        <HousingGap
          nextPage={handleNextPage}
          isBack={isBackNavigation}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 5 && (
        <HouseVisit
          nextPage={handleNextPage}
          isBack={isBackNavigation}
          previousPage={handlePreviousPage}
        />
      )}
      {page === 6 && <VisitWhen
        nextPage={handleNextPage}
        isBack={isBackNavigation}
        previousPage={handlePreviousPage}
      />}
      {page === 7 && <HouseEnd previousPage={handlePreviousPage}/>}
      {didFinish && (
        <div className="ktzina-bubble ktzina-bubble-endSubject">
          <div className="bubble bubble-endSubject">
            <p>כל הכבוד סיימת את הנושא! חזרו למפת הנושאים בעזרת הכפתור</p>
          </div>
          <img src={ktzina} alt="קצינה" className="ktzina-endSubject" />
        </div>
      )}
    </div>
  );
}

export default HouseBenefits;
