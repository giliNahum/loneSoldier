import React, { useState } from "react";
import "../css/ReleasedBenefits.css";

import ReleasedDrawersSvg from "./ReleasedDrawersSvg";
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import openDrawer from "../assets/images/ReleasedBenefits-open-drawer.png";

function ReleasedBenefits({ nextPage, prevPage }) {
  const [selectedDrawer, setSelectedDrawer] = useState(null);
  const [clickedDrawers, setClickedDrawers] = useState([]);

  const drawerTexts = {
    1: "זכאי למענק שחרור יחסי בהתאם לתקופת השירות שביצע",
    2: "זכאי להטבות חייל בודד משוחרר, בהתאם לזכאותו",
    3: "במקרה של שחרור מיידי מכל סיבה שהיא, החייל יהיה זכאי למענק התארגנות מיידית בסך 5,000 ₪",
    4: "עם שחרורו, החייל נדרש לפנות את פתרון הדיור שניתן לו במהלך השירות",
  };

  const handleDrawerClick = (drawerNumber) => {
    // פותח את החלונית עם הטקסט המתאים
    setSelectedDrawer(drawerNumber);

    // שומר שהמגירה כבר נפתחה
    setClickedDrawers((prev) => {
      if (prev.includes(drawerNumber)) {
        return prev;
      }

      return [...prev, drawerNumber];
    });
  };

  const closeDrawer = () => {
    setSelectedDrawer(null);
  };

  const canContinue = clickedDrawers.length === 4;

  return (
    <div className="ReleasedBenefits">
      <h1 className="title title-exceptions">חייל בודד הפוסל שירות</h1>

      <p className="ReleasedBenefits-text">
        חייל בודד המשתחרר בעקבות פרופיל פוסל שירות, כגון פרופיל 21
      </p>

      <p className="ReleasedBenefits-instruction">- לחצו על מגירות השידה -</p>

      <ReleasedDrawersSvg
        onDrawerClick={handleDrawerClick}
        clickedDrawers={clickedDrawers}
      />

      <NextBtn color={"#032057"} onClick={nextPage} disabled={!canContinue} />

      <BackBtn color={"#032057"} onClick={prevPage} />

      {/* החלונית שנפתחת אחרי לחיצה על מגירה */}
      {selectedDrawer !== null && (
        <div
          className="blur-background ReleasedBenefits-overlay"
          onClick={closeDrawer}
        >
          <div
            className="ReleasedBenefits-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={openDrawer}
              alt="מגירה פתוחה"
              className="ReleasedBenefits-open-drawer"
            />

            <p className="ReleasedBenefits-drawer-text">
              {drawerTexts[selectedDrawer]}
            </p>

            <button
              type="button"
              className="ReleasedBenefits-close"
              onClick={closeDrawer}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReleasedBenefits;
