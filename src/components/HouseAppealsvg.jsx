import React, { useState } from "react";
import "../css/HouseAppealsvg.css";

import stoveImg from "../assets/images/stoveImg.png";

function HouseAppealsvg({ setCanContinue }) {
  const [openedCircles, setOpenedCircles] = useState([]);

  const handleCircleClick = (circleName) => {
    setOpenedCircles((prev) => {
      // מונע ספירה כפולה של אותו עיגול
      if (prev.includes(circleName)) {
        return prev;
      }

      const updatedCircles = [...prev, circleName];

      if (updatedCircles.length === 4) {
        setCanContinue(true);
      }

      return updatedCircles;
    });
  };

  const isOpened = (circleName) =>
    openedCircles.includes(circleName);

  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1026 541"
      className="HouseAppealsvg"
    >
      <g id="Layer_1-2" data-name="Layer_1">
        <image
          href={stoveImg}
          x="0"
          y="0"
          width="1026"
          height="541"
          preserveAspectRatio="xMidYMid meet"
        />

        <rect
          className="HouseAppealsvg-1"
          width="1026"
          height="541"
        />

        {/* ימני עליון */}
        <g
          className="HouseAppealsvg-circle"
          onClick={() => handleCircleClick("topRight")}
        >
          <path
            className={`HouseAppealsvg-3 ${
              isOpened("topRight") ? "HouseAppealsvg-hidden" : ""
            }`}
            d="M582.57,45.48c30.32-14.88,73.35-23.23,122.86-21.48h.04s.03,0,.03,0c47.12,0,89.68,9.44,120.39,24.46,30.85,15.09,49.11,35.46,49.11,57.04s-18.09,40.92-48.82,55.02c-30.59,14.03-73.04,22.48-120.19,22.48s-88.06-9.21-118.03-23.62c-30-14.43-48.58-33.84-51.98-54.09-.89-23.79,16.24-44.93,46.57-59.82Z"
          />

          <text
            className={`HouseAppealsvg-2 ${
              isOpened("topRight") ? "HouseAppealsvg-visible" : ""
            }`}
            x="706"
            y="67"
            textAnchor="middle"
            direction="rtl"
          >
            <tspan x="706" dy="0">
              חייל שאינו שבע רצון
            </tspan>
            <tspan x="706" dy="32.4">
              מההחלטה השלילית אשר
            </tspan>
            <tspan x="706" dy="32.4">
              התקבלה רשאי להגיש
            </tspan>
            <tspan x="706" dy="32.4">
              ערעור תוך 30 ימים
            </tspan>
          </text>
        </g>

        {/* ימני תחתון */}
        <g
          className="HouseAppealsvg-circle"
          onClick={() => handleCircleClick("bottomRight")}
        >
          <path
            className={`HouseAppealsvg-3 ${
              isOpened("bottomRight") ? "HouseAppealsvg-hidden" : ""
            }`}
            d="M723.09,195.5c47.89-2.23,96.15,9.81,131.96,29.14,17.9,9.66,32.61,21.1,42.6,33.41,9.99,12.3,15.19,25.35,14.35,38.33v.06s0,.06,0,.06c0,25.5-16.95,48.55-47.17,65.6-30.2,17.03-73.35,27.86-124.87,28.9-49.02.99-97.78-7.6-134.86-24.26-37.16-16.7-62.07-41.24-64.61-71.9-2.4-29.07,17.99-54.72,52.01-72.82,33.95-18.06,80.96-28.26,130.43-26.52h.08s.08,0,.08,0Z"
          />

          <text
            className={`HouseAppealsvg-2 ${
              isOpened("bottomRight") ? "HouseAppealsvg-visible" : ""
            }`}
            x="726"
            y="258"
            textAnchor="middle"
            direction="rtl"
          >
            <tspan x="726" dy="0">
              בקשת ערעור על החלטת ק.
            </tspan>
            <tspan x="726" dy="32.4">
              הלנות תעלה לבחינת רת״ח
            </tspan>
            <tspan x="726" dy="32.4">
              פתרונות הדיור בצירוף
            </tspan>
            <tspan x="726" dy="32.4">
              התייחסות ק. ת״ש חונכת
            </tspan>
          </text>
        </g>

        {/* שמאלי תחתון */}
        <g
          className="HouseAppealsvg-circle"
          onClick={() => handleCircleClick("bottomLeft")}
        >
          <path
            className={`HouseAppealsvg-3 ${
              isOpened("bottomLeft") ? "HouseAppealsvg-hidden" : ""
            }`}
            d="M287.26,195.26c55.87-2.37,104.48,8.89,138.02,27.33,33.65,18.5,51.6,43.85,47.74,69.61-3.63,24.21-20.74,46.06-49.63,63.3-28.89,17.24-69.39,29.75-119.3,35.28-43.57,4.83-93.09-2.41-132.09-18.73-39.15-16.39-66.9-41.56-68.51-72.15-1.44-27.36,19.1-53.47,53.14-72.9,33.93-19.37,80.75-31.73,130.54-31.73h.09Z"
          />

          <text
            className={`HouseAppealsvg-2 ${
              isOpened("bottomLeft") ? "HouseAppealsvg-visible" : ""
            }`}
            x="290"
            y="242"
            textAnchor="middle"
            direction="rtl"
          >
            <tspan x="290" dy="0">
              בקשת ערעור על החלטת
            </tspan>
            <tspan x="290" dy="32.4">
              רת״ח פתרונות הדיור תעלה
            </tspan>
            <tspan x="290" dy="32.4">
              לבחינת רמ״ד בודדים
            </tspan>
            <tspan x="290" dy="32.4">
              בצירוף התייחסות של קצינת
            </tspan>
            <tspan x="290" dy="32.4">
              ת״ש בדרגת רס״ן
            </tspan>
          </text>
        </g>

        {/* שמאלי עליון */}
        <g
          className="HouseAppealsvg-circle"
          onClick={() => handleCircleClick("topLeft")}
        >
          <path
            className={`HouseAppealsvg-3 ${
              isOpened("topLeft") ? "HouseAppealsvg-hidden" : ""
            }`}
            d="M312.54,24.23c47.15,0,88.71,8.27,118.4,22.11,29.8,13.89,47.06,33.07,47.06,54.66s-16.76,41.37-46.21,56.2c-29.35,14.79-70.77,24.41-118.79,26.02-47.15,0-88.72-7.78-118.98-21.47-30.25-13.68-48.75-33.03-50.97-56.03,1.97-20.31,19.1-40.64,48.63-56,29.54-15.36,71.09-25.5,120.85-25.5Z"
          />

          <text
            className={`HouseAppealsvg-2 ${
              isOpened("topLeft") ? "HouseAppealsvg-visible" : ""
            }`}
            x="312"
            y="75"
            textAnchor="middle"
            direction="rtl"
          >
            <tspan x="312" dy="0">
              הגורם אשר יבחן את
            </tspan>
            <tspan x="312" dy="32.4">
              הבקשה הוא זה שיזין את
            </tspan>
            <tspan x="312" dy="32.4">
              התשובה
            </tspan>
          </text>
        </g>
      </g>
    </svg>
  );
}

export default HouseAppealsvg;