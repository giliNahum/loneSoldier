import React, { useState } from "react";
import "../css/Exceptions.css";

import ToHouseBtn from "./ToHouseBtn";

import Marriage from "./Marriage";
import Released from "./Released";
import Miluim from "./Miluim";

import tv from "../assets/images/tv.png";

import releasedImg from "../assets/images/released.png";
import miluimImg from "../assets/images/miluim.png";
import marriageImg from "../assets/images/marriage.png";

import ktzina from "../assets/images/ktzina.svg";

function Exceptions({ onComplete, onBack }) {
  // איזו תמונה מוצגת כרגע בטלוויזיה
  const [currentIndex, setCurrentIndex] = useState(0);

  // איזה מסלול פתוח כרגע
  // null = אנחנו במסך הטלוויזיה
  const [activeSubject, setActiveSubject] = useState(null);

  // המסלולים שכבר הושלמו
  const [completedSubjects, setCompletedSubjects] = useState([]);

  const subjects = [
    {
      id: "marriage",
      image: marriageImg,
    },
    {
      id: "released",
      image: releasedImg,
    },
    {
      id: "miluim",
      image: miluimImg,
    },
  ];

  const didFinish = completedSubjects.length === subjects.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % subjects.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + subjects.length) % subjects.length
    );
  };

  const handleOpenSubject = () => {
    setActiveSubject(subjects[currentIndex].id);
  };

  const handleSubjectComplete = (subjectId) => {
    setCompletedSubjects((prev) => {
      if (prev.includes(subjectId)) {
        return prev;
      }

      return [...prev, subjectId];
    });

    // חוזרים ל-Exceptions
    setActiveSubject(null);
  };

  const handleSubjectBack = () => {
    // חזרה ל-Exceptions בלי לסמן כהושלם
    setActiveSubject(null);
  };

  const backToHouse = () => {
    if (didFinish) {
      onComplete();
    } else {
      onBack();
    }
  };

  const currentSubject = subjects[currentIndex];

  const isCurrentCompleted = completedSubjects.includes(
    currentSubject.id
  );

  return (
    <div className="exceptions">
      <ToHouseBtn
        didFinish={didFinish}
        backToHouse={backToHouse}
      />

      {/* =========================
          המסך הראשי של Exceptions
          ========================== */}

      {activeSubject === null && (
        <>
          <h1 className="title title-exceptions">מקרים חריגים</h1>
          <p className="exceptions-instruction">
          - העבירו בין המקרים בעזרת החיצים ולחצו כדי ללמוד עליהם -
        </p>
          <div className="exceptions-tv-section">

            <button
              className="exceptions-arrow"
              onClick={handlePrev}
            >
              ‹
            </button>

            <div className="exceptions-tv">

              <img
                src={currentSubject.image}
                alt=""
                className={`exceptions-screen ${
                  isCurrentCompleted ? "completed" : ""
                }`}
                onClick={handleOpenSubject}
              />

              <img
                src={tv}
                alt=""
                className="exceptions-tv-frame"
              />

            </div>

            <button
              className="exceptions-arrow"
              onClick={handleNext}
            >
              ›
            </button>

          </div>

          {didFinish && (
            <div className="ktzina-bubble ktzina-bubble-endSubject">
              <div className="bubble bubble-endSubject">
                <p>
                  כל הכבוד סיימת את הנושא! חזרו למפת
                  הנושאים בעזרת הכפתור
                </p>
              </div>

              <img
                src={ktzina}
                alt="קצינה"
                className="ktzina-endSubject"
              />
            </div>
          )}
        </>
      )}

      {/* =========================
          שלושת המסלולים
      ========================== */}

      {activeSubject === "marriage" && (
        <Marriage
          onComplete={() =>
            handleSubjectComplete("marriage")
          }
          onBack={handleSubjectBack}
        />
      )}

      {activeSubject === "released" && (
        <Released
          onComplete={() =>
            handleSubjectComplete("released")
          }
          onBack={handleSubjectBack}
        />
      )}

      {activeSubject === "miluim" && (
        <Miluim
          onComplete={() =>
            handleSubjectComplete("miluim")
          }
          onBack={handleSubjectBack}
        />
      )}

    </div>
  );
}

export default Exceptions;