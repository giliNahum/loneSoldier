import React, { useEffect, useRef, useState } from "react";
import "../css/Practice.css";

import ToHouseBtn from "./ToHouseBtn";
import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import housingTitle from "../assets/images/housing-title.svg";
import moneyTitle from "../assets/images/money-title.svg";
import addedTitle from "../assets/images/added-title.svg";

const BENEFITS = [
  // הטבות דיור
  {
    id: "housing-1",
    label: 'שכ"ד',
    target: "housing",
  },
  {
    id: "housing-2",
    label: 'הא"ד',
    target: "housing",
  },
  {
    id: "housing-3",
    label: 'דירת אל"ח',
    target: "housing",
  },
  {
    id: "housing-4",
    label: "אימוץ בקיבוץ",
    target: "housing",
  },
  {
    id: "housing-5",
    label: "ביקור מפקדים בהטבות דיור",
    target: "housing",
  },

  // הטבות כספיות
  {
    id: "money-1",
    label: "מענק חודשי",
    target: "money",
  },
  {
    id: "money-2",
    label: "תווי קנייה",
    target: "money",
  },
  {
    id: "money-3",
    label: 'מענק גאות ושפל (רמ"פ א ומעלה)',
    target: "money",
  },
  {
    id: "money-4",
    label: "מענקים ממשרד הקליטה והשיכון",
    target: "money",
  },

  // הטבות נלוות
  {
    id: "added-1",
    label: "תווי קנייה",
    target: "added",
  },
  {
    id: "added-2",
    label: "שי לחג",
    target: "added",
  },
  {
    id: "added-3",
    label: "הטסת חירום",
    target: "added",
  },
  {
    id: "added-4",
    label: "מימון טיסה",
    target: "added",
  },
  {
    id: "added-5",
    label: 'מיוחדת ביקור הורה בחו"ל',
    target: "added",
  },
  {
    id: "added-6",
    label: "מיוחדת ביקור הורה בארץ",
    target: "added",
  },
  {
    id: "added-7",
    label: "יציאה מוקדמת",
    target: "added",
  },
  {
    id: "added-8",
    label: 'חו"מ מעבר דירה',
    target: "added",
  },
  {
    id: "added-9",
    label: "יום סידורים",
    target: "added",
  },
  {
    id: "added-10",
    label: 'הע"פ',
    target: "added",
  },
];

const CATEGORIES = [
  {
    id: "housing",
    image: housingTitle,
    alt: "הטבות דיור",
  },
  {
    id: "money",
    image: moneyTitle,
    alt: "הטבות כספיות",
  },
  {
    id: "added",
    image: addedTitle,
    alt: "הטבות נלוות",
  },
];

const shuffleArray = (array) => {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]];
  }

  return shuffled;
};

function Practice({ nextPage, previousPage, setSection }) {
  const [selectedBenefitId, setSelectedBenefitId] = useState(null);
  const [benefits, setBenefits] = useState(() =>
    shuffleArray(
      BENEFITS.map((benefit) => ({
        ...benefit,
        status: "bank",
        currentBox: null,
      }))
    )
  );

  const timersRef = useRef([]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const handleDragStart = (event, benefitId) => {
    event.dataTransfer.setData("text/plain", benefitId);
    event.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const placeBenefit = (benefitId, boxId) => {
    const draggedBenefit = benefits.find((benefit) => benefit.id === benefitId);

    if (!draggedBenefit || draggedBenefit.status !== "bank") {
      return;
    }

    // תשובה נכונה
    if (draggedBenefit.target === boxId) {
      setBenefits((currentBenefits) =>
        currentBenefits.map((benefit) =>
          benefit.id === benefitId
            ? {
                ...benefit,
                status: "correct",
                currentBox: boxId,
              }
            : benefit
        )
      );

      setSelectedBenefitId(null);
      return;
    }

    // תשובה לא נכונה
    setBenefits((currentBenefits) =>
      currentBenefits.map((benefit) =>
        benefit.id === benefitId
          ? {
              ...benefit,
              status: "wrong",
              currentBox: boxId,
            }
          : benefit
      )
    );

    setSelectedBenefitId(null);

    const timer = setTimeout(() => {
      setBenefits((currentBenefits) =>
        currentBenefits.map((benefit) =>
          benefit.id === benefitId
            ? {
                ...benefit,
                status: "bank",
                currentBox: null,
              }
            : benefit
        )
      );
    }, 1000);

    timersRef.current.push(timer);
  };

  const handleDrop = (event, boxId) => {
    event.preventDefault();

    const benefitId = event.dataTransfer.getData("text/plain");

    placeBenefit(benefitId, boxId);
  };

  const handleBenefitClick = (benefitId) => {
    setSelectedBenefitId((currentId) =>
      currentId === benefitId ? null : benefitId
    );
  };

  /*
    ברגע שכל הפריטים קיבלו status של correct,
    אין יותר פריטים במחסן וגם אין פריט שנמצא כרגע בטעות.
  */
  const CanContinue = benefits.every((benefit) => benefit.status === "correct");

  const benefitsInBank = benefits.filter(
    (benefit) => benefit.status === "bank"
  );

  const getBenefitsForBox = (boxId) =>
    benefits.filter(
      (benefit) =>
        benefit.currentBox === boxId &&
        (benefit.status === "correct" || benefit.status === "wrong")
    );

  const handleNext = () => {
    if (!CanContinue) {
      return;
    }

    nextPage();
  };

  return (
    <div className="Practice" dir="rtl">
      <ToHouseBtn didFinish={false} backToHouse={() => setSection(1)} />

      <p className="practice-instruction">- גררו או לחצו על הטבה ובחרו את המחסן המתאים לה -</p>

      <div className="practice-categories">
        {CATEGORIES.map((category) => {
          const boxBenefits = getBenefitsForBox(category.id);

          return (
            <div
              key={category.id}
              className={`practice-category practice-category--${category.id}`}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, category.id)}
              onClick={() => {
                if (selectedBenefitId) {
                  placeBenefit(selectedBenefitId, category.id);
                }
              }}
            >
              <img
                className="practice-category-title"
                src={category.image}
                alt={category.alt}
                draggable="false"
              />

              <div className="practice-category-content">
                {boxBenefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className={`practice-benefit ${
                      benefit.status === "wrong"
                        ? "practice-benefit--wrong"
                        : "practice-benefit--correct"
                    }`}
                  >
                    {benefit.label}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="practice-bank">
        <div className="practice-bank-title">מחסן הטבות</div>

        <div className="practice-bank-content">
          {benefitsInBank.map((benefit) => (
            <div
              key={benefit.id}
              className={`practice-benefit practice-benefit--bank ${
                selectedBenefitId === benefit.id
                  ? "practice-benefit--selected"
                  : ""
              }`}
              draggable
              onDragStart={(event) => handleDragStart(event, benefit.id)}
              onClick={() => handleBenefitClick(benefit.id)}
            >
              {benefit.label}
            </div>
          ))}
        </div>
      </div>

      <NextBtn
        color="#330067"
        onClick={handleNext}
        disabled={!CanContinue}
      />

      <BackBtn color="#330067" onClick={previousPage} />
    </div>
  );
}

export default Practice;
