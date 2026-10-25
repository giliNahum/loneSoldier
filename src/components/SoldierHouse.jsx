import React from "react";
import "../css/SoldierHouse.css";

import toFridgeBtn from "../assets/images/to-fridge-icon.svg";

function SoldierHouse({ onBack }) {
  return (
    <div className="SoldierHouse">
      <h1 className="title title-HouseBenefits">בית החייל</h1>
      <p className="standard-house-option-description">
        <strong>ישנם בתי חייל פזורים ברוב הארץ: </strong>ת"א, ירושלים, אילת, רמת
        גן, קריית שמונה, טבריה, חיפה, באר שבע.
      </p>
      <div className="soldier-house-content">
        <div className="soldier-house-juice">
          בתי החייל מכילים בין 4-6 חיילים בכל חדר.
        </div>
        <div className="soldier-house-bowl">
          <p>
            <span className="underline">ארוחות בבתי החייל-</span> ארוחות חמות
            בסופי השבוע - בשישי בערב ובשבת בצהריים. ארוחת בוקר וערב ניתנת בכל
            בתי החייל.
          </p>
          <p>
            ארוחת צהריים ניתנת בכמות מצומצמת למי ששוהה בבית החייל מפאת גימלים,
            חופשה, שירות של שבוע - שבוע.
          </p>
        </div>
      </div>
      <div className="standard-house-option-bottom-text">
        בעת פתיחת בקשה לפתרון דיור קבוע (כגון שכ"ד, הא"ד, אימוץ בקיבוץ ודירת
        יל"ח) יש צורך בפתיחת בקשה לביטול הטבת בית החייל שכן הזכאות אינה מתקצרת
        באופן אוטומטי.
      </div>
      <img
        src={toFridgeBtn}
        alt="toFridgeBtn"
        className="toFridgeBtn"
        onClick={onBack}
      />
    </div>
  );
}

export default SoldierHouse;
