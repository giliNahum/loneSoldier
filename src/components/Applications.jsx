import React, { useState } from "react";

import ToHouseBtn from "./ToHouseBtn";

import ktzina from "../assets/images/ktzina.svg";
import ApplicationHow from "./ApplicationHow";
import ApplicationRetro from "./ApplicationRetro";

function Applications({ onComplete, onBack }) {
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const [didFinish, setDidfinish] = useState(false);
  const [page, setPage] = useState(0);
  const LAST_PAGE = 1;
  const backToHouse = () => {
    if (didFinish) {
      onComplete();
    } else {
      onBack();
    }
  };

  const handleNextPage = () => {
    setIsBackNavigation(false); // מאפסים את מצב החזרה
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
    setPage(page - 1);
  };
  return (
    <div className="Applications">
      <ToHouseBtn didFinish={didFinish} backToHouse={backToHouse} />
      {page === 0 && (
        <ApplicationHow nextPage={handleNextPage} isBack={isBackNavigation} />
      )}
      {page === 1 && (
        <ApplicationRetro
          previousPage={handlePreviousPage}
          onGameComplete={() => setDidfinish(true)}
        />
      )}
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

export default Applications;
