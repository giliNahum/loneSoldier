import React, { useState } from "react";
import "../css/AfterLone.css";

import toolsImg from "../assets/images/after-lone-tools.png";
import potImg from "../assets/images/after-lone-pot.svg";

import NextBtn from "./NextBtn";

const steps = [
  {
    id: 1,
    text: (
      <>
        עם ההכרה לבודד והזנת פתרונות הדיור,{" "}
        <strong>אין חובה להזנת פתרון דיור – עדכון תורתי</strong>
        <br />
        עד לבחירתו של החייל פתרון דיור בפועל - בקשת בית החייל{" "}
        <strong>לא</strong> תוזן אוטומטית!
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        פתיחת בקשה לפתרון הלנה בפועל הרלוונטי לחייל, על ידי משקית ת”ש עם החייל
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        ביטול ההטבה הקודמת (במידה ויש) קבלת החלטה על ההטבה החדשה והזנתה על ידי
        הגורם המאשר
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        הגשת הבקשה החדשה לבחינת קצינת ת”ש / תא הלנות <br />
        (תלוי בסוג ההלנה ובסוג הבודד)
      </>
    ),
  },
];

function AfterLone({ nextPage, isBack }) {
  const [activeStep, setActiveStep] = useState(1);

  // שלב 1 כבר מוצג ולכן נחשב כשלב שנצפה
  const [visitedSteps, setVisitedSteps] = useState(() => new Set([1]));

  const currentStep = steps.find((step) => step.id === activeStep);

  const canContinue = visitedSteps.size === steps.length || isBack;

  const handleStepClick = (stepId) => {
    setActiveStep(stepId);

    setVisitedSteps((previousVisited) => {
      const updatedVisited = new Set(previousVisited);

      updatedVisited.add(stepId);

      return updatedVisited;
    });
  };

  return (
    <div className="AfterLone">
      <h1 className="title-HouseBenefits title">סד״פ לאחר הזנת הטבה לבודד</h1>

      <p className="HouseBenefits-instruction">
        - לחצו על הכלים כדי ללמוד על כל שלב -
      </p>

      <div className="after-lone-tools-wrapper">
        <img
          src={toolsImg}
          alt="כלי מטבח המייצגים את שלבי התהליך"
          className="after-lone-tools-image"
        />

        {steps.map((step) => (
          <React.Fragment key={step.id}>
            <button
              type="button"
              className={`
                after-lone-tool-button
                after-lone-tool--${step.id}
              `}
              onClick={() => handleStepClick(step.id)}
              aria-label={`מעבר לשלב ${step.id}`}
              aria-pressed={activeStep === step.id}
            />

            <span
              className={`
                after-lone-step-number
                after-lone-number--${step.id}
                ${
                  visitedSteps.has(step.id)
                    ? "after-lone-step-number--visited"
                    : ""
                }
                ${
                  activeStep === step.id ? "after-lone-step-number--active" : ""
                }
              `}
            >
              {step.id}
            </span>
          </React.Fragment>
        ))}
      </div>

      <div className="after-lone-pot-wrapper">
        <img src={potImg} alt="" className="after-lone-pot-image" />

        <div key={activeStep} className="after-lone-pot-text">
          {currentStep?.text}
        </div>
      </div>
      <NextBtn color={"#502009"} onClick={nextPage} disabled={!canContinue} />
    </div>
  );
}

export default AfterLone;
