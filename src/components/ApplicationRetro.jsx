import React, { useState } from "react";
import "../css/ApplicationRetro.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import shelves from "../assets/images/retro-shelves.svg";

function ApplicationRetro({ previousPage, onGameComplete }) {
  const answers = [
    {
      id: 8,
      text: "תא בודדים",
      correctSlot: "slot8",
    },
    {
      id: 2,
      text: 'ק.ת"ש יחידה',
      correctSlot: "slot2",
    },
    {
      id: 1,
      text: 'תחקיר ק.ת"ש',
      correctSlot: "slot1",
    },
    {
      id: 5,
      text: 'תחקיר רמ"ד פרט',
      correctSlot: "slot5",
    },
    {
      id: 4,
      text: 'ק.ת"ש חונכת',
      correctSlot: "slot4",
    },
    {
      id: 6,
      text: 'רמ"ד פרט',
      correctSlot: "slot6",
    },
    {
      id: 3,
      text: 'תחקיר ק.ת"ש חונכת',
      correctSlot: "slot3",
    },
    {
      id: 7,
      text: 'תחקיר רמ"ד פרט',
      correctSlot: "slot7",
    },
  ];

  const [placedAnswers, setPlacedAnswers] = useState({});
  const [wrongAnswerId, setWrongAnswerId] = useState(null);

  // חדש - שומר איזו תשובה נבחרה בלחיצה
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);

  /* =========================
      גרירה במחשב
  ========================== */

  const handleDragStart = (e, answerId) => {
    e.dataTransfer.setData("answerId", String(answerId));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  /* =========================
      פונקציה משותפת
      גם לגרירה וגם ללחיצה
  ========================== */

  const placeAnswer = (answerId, slotId) => {
    const answer = answers.find((item) => item.id === answerId);

    if (!answer) {
      return;
    }

    // אם התא כבר מלא - לא עושים כלום
    if (placedAnswers[slotId]) {
      return;
    }

    // אם התשובה כבר שובצה - לא עושים כלום
    if (Object.values(placedAnswers).includes(answerId)) {
      return;
    }

    // תשובה נכונה
    if (answer.correctSlot === slotId) {
      setPlacedAnswers((prev) => {
        const updatedAnswers = {
          ...prev,
          [slotId]: answerId,
        };

        if (Object.keys(updatedAnswers).length === answers.length) {
          setTimeout(() => {
            onGameComplete();
          }, 500);
        }

        return updatedAnswers;
      });

      setSelectedAnswerId(null);
      return;
    }

    // תשובה לא נכונה
    setWrongAnswerId(answerId);
    setSelectedAnswerId(null);

    setTimeout(() => {
      setWrongAnswerId(null);
    }, 1000);
  };

  /* =========================
      Drop במחשב
  ========================== */

  const handleDrop = (e, slotId) => {
    e.preventDefault();

    const answerId = Number(
      e.dataTransfer.getData("answerId")
    );

    placeAnswer(answerId, slotId);
  };

  /* =========================
      לחיצה במובייל / טאבלט
  ========================== */

  const handleAnswerClick = (answerId) => {
    setSelectedAnswerId((currentId) =>
      currentId === answerId ? null : answerId
    );
  };

  const handleSlotClick = (slotId) => {
    if (!selectedAnswerId) {
      return;
    }

    placeAnswer(selectedAnswerId, slotId);
  };

  /* =========================
      פונקציות עזר
  ========================== */

  const getAnswerText = (slotId) => {
    const answerId = placedAnswers[slotId];

    if (!answerId) {
      return "";
    }

    return answers.find(
      (answer) => answer.id === answerId
    )?.text;
  };

  const isAnswerPlaced = (answerId) => {
    return Object.values(placedAnswers).includes(answerId);
  };

  return (
    <div className="ApplicationRetro">
      <h1 className="title">טיפול בבקשה ברטרו</h1>

      <p className="application-instruction">
        - גררו או לחצו על התשובה המתאימה ממחסן המילים -
      </p>

      <div className="ApplicationRetro-content">

        {/* =========================
            מחסן מילים
        ========================== */}

        <div className="Retro-word-bank">
          <h2 className="Retro-word-bank-title">
            מחסן מילים
          </h2>

          <div className="Retro-word-bank-content">
            {answers.map((answer) => {
              if (isAnswerPlaced(answer.id)) {
                return null;
              }

              return (
                <div
                  key={answer.id}
                  className={`
                    Retro-word
                    ${
                      wrongAnswerId === answer.id
                        ? "wrong"
                        : ""
                    }
                    ${
                      selectedAnswerId === answer.id
                        ? "selected"
                        : ""
                    }
                  `}
                  draggable
                  onDragStart={(e) =>
                    handleDragStart(e, answer.id)
                  }
                  onClick={() =>
                    handleAnswerClick(answer.id)
                  }
                >
                  {answer.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            המדפים
        ========================== */}

        <div className="ApplicationRetro-shelves">
          <img
            src={shelves}
            alt="מדפי טיפול בבקשה ברטרו"
            className="ApplicationRetro-shelves-img"
          />

          {/* שורה 1 */}

          <div
            className={`Retro-drop-zone Retro-slot-1 ${
              placedAnswers.slot1 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot1")}
            onClick={() => handleSlotClick("slot1")}
          >
            {getAnswerText("slot1")}
          </div>

          <div
            className={`Retro-drop-zone Retro-slot-2 ${
              placedAnswers.slot2 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot2")}
            onClick={() => handleSlotClick("slot2")}
          >
            {getAnswerText("slot2")}
          </div>

          {/* שורה 2 */}

          <div
            className={`Retro-drop-zone Retro-slot-3 ${
              placedAnswers.slot3 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot3")}
            onClick={() => handleSlotClick("slot3")}
          >
            {getAnswerText("slot3")}
          </div>

          <div
            className={`Retro-drop-zone Retro-slot-4 ${
              placedAnswers.slot4 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot4")}
            onClick={() => handleSlotClick("slot4")}
          >
            {getAnswerText("slot4")}
          </div>

          {/* שורה 3 */}

          <div
            className={`Retro-drop-zone Retro-slot-5 ${
              placedAnswers.slot5 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot5")}
            onClick={() => handleSlotClick("slot5")}
          >
            {getAnswerText("slot5")}
          </div>

          <div
            className={`Retro-drop-zone Retro-slot-6 ${
              placedAnswers.slot6 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot6")}
            onClick={() => handleSlotClick("slot6")}
          >
            {getAnswerText("slot6")}
          </div>

          {/* שורה 4 */}

          <div
            className={`Retro-drop-zone Retro-slot-7 ${
              placedAnswers.slot7 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot7")}
            onClick={() => handleSlotClick("slot7")}
          >
            {getAnswerText("slot7")}
          </div>

          <div
            className={`Retro-drop-zone Retro-slot-8 ${
              placedAnswers.slot8 ? "filled" : ""
            }`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, "slot8")}
            onClick={() => handleSlotClick("slot8")}
          >
            {getAnswerText("slot8")}
          </div>
        </div>
      </div>

      <BackBtn
        color="#023F0E"
        onClick={previousPage}
      />
    </div>
  );
}

export default ApplicationRetro;