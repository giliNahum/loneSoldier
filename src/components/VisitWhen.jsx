import React, { useState } from "react";
import "../css/VisitWhen.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import jars from "../assets/images/visitJars.png";

function VisitWhen({ nextPage, previousPage, isBack }) {
  const jarsData = [
    {
      id: 1,
      firstText: "בעת קליטה ליחידה",
      secondText: "ביקור תוך 30 ימים מקליטת החייל",
    },
    {
      id: 2,
      firstText: "בהכשרה ראשונית ארוכה מחודש",
      secondText: "ביקור תוך חודש ",
    },
    {
      id: 3,
      firstText: "בהכשרות קצרות מחודש",
      secondText: "אין חובת ביקור בשלב ההכשרה",
    },
    {
      id: 4,
      firstText: "במעבר לפתרון דיור חדש",
      secondText: "התזכור יוצא ביום הכניסה לפתרון הדיור החדש",
    },
    {
      id: 5,
      firstText: "ביקור בוצע ביום הכניסה לדיור",
      secondText: "אין צורך בתזכור נוסף.",
    },
    {
      id: 6,
      firstText: "סגל ת”ש בלבד התלווה לחייל במעבר",
      secondText: "על המפקדים לבצע ביקור תוך חודש.",
    },
    {
      id: 7,
      firstText: "שינוי כתובת במהלך השירות",
      secondText: "יבוצע ביקור נוסף תוך חודש בכתובת החדשה.",
    },
  ];

  // אילו צנצנות מציגות כרגע את הטקסט השני
  const [activeJars, setActiveJars] = useState({});

  // על אילו צנצנות כבר לחצו לפחות פעם אחת
  const [clickedJars, setClickedJars] = useState(() => new Set());

  const handleJarClick = (id) => {
    // מעבר בין הטקסט הראשון לשני
    setActiveJars((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    // מסמנים שהמשתמש כבר לחץ על הצנצנת
    setClickedJars((prev) => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const canContinue =
    isBack || clickedJars.size === jarsData.length;

  return (
    <div className="VisitWhen">
      <h1 className="title title-HouseBenefits">
        מתי מבצעים ביקור?
      </h1>

      <p className="HouseBenefits-instruction">
        - לחצו על צנצנות התבלינים -
      </p>

      <div className="VisitWhen-jars-wrapper">
        <img
          src={jars}
          alt="צנצנות תבלינים"
          className="VisitWhen-jars-image"
        />

        <div className="VisitWhen-jars-texts">
          {jarsData.map((jar) => {
            const isActive = activeJars[jar.id];

            return (
              <button
                key={jar.id}
                type="button"
                className={`
                  VisitWhen-jar-text
                  VisitWhen-jar-${jar.id}
                  ${isActive ? "active" : ""}
                `}
                onClick={() => handleJarClick(jar.id)}
              >
                {isActive ? jar.secondText : jar.firstText}
              </button>
            );
          })}
        </div>
      </div>

      <BackBtn
        color="#502009"
        onClick={previousPage}
      />

      <NextBtn
        color="#502009"
        onClick={nextPage}
        disabled={!canContinue}
      />
    </div>
  );
}

export default VisitWhen;