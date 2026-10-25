import React from "react";
import "../css/KibbutzAdoption.css";

import toFridgeBtn from "../assets/images/to-fridge-icon.svg";
import criteriaImg from "../assets/images/kibbutz-img-criteria.svg";
import marksImg from "../assets/images/kibbutz-img-marks.svg";

function KibbutzAdoption({ onBack }) {
  const items = [
    {
      id: "criteria",
      image: criteriaImg,
      imageAlt: "criteria",
      bullets: ["כלל החיילים הבודדים מלבד בני שליחים.", "חיילים אשר הוכרו לזכאי סיוע.", "חייל ללא עבירות משמעת והתנהגויות חמורות בחצי שנה האחרונה.", "יתרת שירות של 6 חודשים לפחות.", "יתרת זכאות של 6 חודשים לפחות.", "על החייל לשרת בתנאי יחידה סגורה."],
    },
    {
      id: "marks",
      image: marksImg,
      imageAlt: "marks",
      bullets: ["רק חיילים המשרתים בבסיס סגור יוכלו ללון באימוץ בקיבוץ, בשל שיקולי תחבורה, החזרי נסיעות ומענה מזון בקיבוצים.", "חייל שרוצה לסיים מגורים בקיבוץ יחתום על ויתור זכאות.", " לבקשה יש לצרף אישור רשמי ממזכירות הקיבוץ על עזיבת הדירה, כולל תאריך העזיבה.", " הבקשה תנותב לתא הלנות.", " חייל מגרעין צבר יקבל זכאות ל״קיבוצים״ כבר משלב המלש״ב, מיום הגיוס ועד תת״ש או עד תום זכאותו כבודד — המוקדם מביניהם.", " חייל שהתגייס ללא ההטבה — יש להגיש עבורו בקשה לפתרון דיור זה."],
    },
  ];
  return (
    <div className="KibbutzAdoption">
      <h1 className="title title-HouseBenefits">אימוץ בקיבוץ</h1>
      <div className="KibbutzAdoption-cards">
        {items.map((item) => (
          <div key={item.id} className="KibbutzAdoption-card">
            <img
              src={item.image}
              alt={item.imageAlt}
              className="KibbutzAdoption-card-header-image"
              draggable="false"
            />
            <ul className="KibbutzAdoption-card-list">
              {item.bullets.map((bullet, index) => (
                <li key={`${item.id}-${index}`}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
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

export default KibbutzAdoption;
