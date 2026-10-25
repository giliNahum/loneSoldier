import React, { useState } from "react";
import "../css/ApplicationHow.css";

import NextBtn from "./NextBtn";

import computer from "../assets/images/Applications-computer.svg";
import ApplicationDeskSvg from "./ApplicationDeskSvg";

function ApplicationHow({ nextPage, isBack }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [clickedItems, setClickedItems] = useState([]);

  const texts = {
    1: "אין להגיש בקשות במייל להקלות באי יצירת קשר עם הורים או גורמים אובייקטיביים",
    2: "כאשר נדרשת הקלה באישורים, יש לפנות לקצינה שבחנה את הבקשה. יש לוודא שהבקשה מנותבת לגורם הנכון. בקשה להכרה - קצינת בודדים.",
    3: "על קצינת הת״ש למצות את כלל האפשרויות ולחתור לפתרון. הקלה אינה המוצא הראשון, משום שבהיעדר אישור אין תמונה מלאה.",
    4: "אם לא קיימת אלטרנטיבה אחרת, יש לציין זאת בריכוז הנתונים ולפרט את הסיבה לפער באחד האישורים. במקרה הצורך, ביקור בית יתבצע מול קצינת ת״ש חונכת.",
  };

  const handleItemClick = (itemNumber) => {
    // משנה את הטקסט שמוצג במחשב
    setSelectedItem(itemNumber);

    // שומר שעל הפריט הזה כבר לחצו
    setClickedItems((prev) => {
      if (prev.includes(itemNumber)) {
        return prev;
      }

      return [...prev, itemNumber];
    });
  };

  const canContinue = clickedItems.length === 4 || isBack;

  return (
    <div className="ApplicationHow">
      <h1 className="title">
        טיפול בבקשת הקלה
      </h1>

      <p className="application-instruction">
        - לחצו על הפריטים השונים -
      </p>

      <div className="ApplicationHow-content">

        <ApplicationDeskSvg
          onItemClick={handleItemClick}
        />

        <div className="ApplicationHow-computer-container">
          <img
            src={computer}
            alt="computer"
            className="Applications-computer"
          />

          {selectedItem !== null && (
            <p className="ApplicationHow-computer-text">
              {texts[selectedItem]}
            </p>
          )}
        </div>

      </div>

      <NextBtn
        color={"#023F0E"}
        onClick={nextPage}
        disabled={!canContinue}
      />
    </div>
  );
}

export default ApplicationHow;