import React, { useState } from "react";
import "../css/StandardHouseOption.css";

import toFridgeBtn from "../assets/images/to-fridge-icon.svg";

function StandardHouseOption({ data, onBack }) {
  const [showPopup, setShowPopup] = useState(false);
  const [canContinue, setCanContinue] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
    setCanContinue(true);
  };
  const goBack = () => {
    if (canContinue) {
      onBack();
    }
  };

  return (
    <div
      className={`
        StandardHouseOption
        StandardHouseOption--${data.variant}
      `}
    >
      <h1 className="title title-HouseBenefits">{data.title}</h1>

      {data.description && (
        <p className="standard-house-option-description">{data.description}</p>
      )}

      <div className="standard-house-option-cards">
        {/* הפריט הימני */}
        <div className="standard-house-option-card standard-house-option-card--right">
          <img
            src={data.itemImage}
            alt={data.rightItem.alt}
            className="standard-house-option-card-image"
            draggable="false"
          />

          <h2 className="standard-house-option-card-title">
            {data.rightItem.title}
          </h2>

          <div className="standard-house-option-card-content">
            {data.rightItem.content}
          </div>
        </div>

        {/* הפריט השמאלי */}
        <div className="standard-house-option-card standard-house-option-card--left">
          <img
            src={data.itemImage}
            alt={data.leftItem.alt}
            className="standard-house-option-card-image"
            draggable="false"
          />

          <h2 className="standard-house-option-card-title">
            {data.leftItem.title}
          </h2>

          <div className="standard-house-option-card-content">
            {data.leftItem.content}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="standard-house-option-popup-button"
        onClick={() => setShowPopup(true)}
      >
        {data.popupButtonText}
      </button>

      {data.bottomText && (
        <div className="standard-house-option-bottom-text">
          {data.bottomText}
        </div>
      )}

      <img
        src={toFridgeBtn}
        alt="toFridgeBtn"
        className={`toFridgeBtn ${!canContinue ? "toFridgeBtn-disabled" : ""}`}
        onClick={goBack}
      />

      {showPopup && (
        <div
          className="standard-house-option-popup-overlay"
          onClick={closePopup}
        >
          <div
            className="standard-house-option-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="standard-house-option-popup-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="standard-house-option-popup-close"
              onClick={closePopup}
              aria-label="סגירת החלון"
            >
              ×
            </button>

            <h2
              id="standard-house-option-popup-title"
              className="standard-house-option-popup-title"
            >
              {data.popupTitle}
            </h2>

            <div className="standard-house-option-popup-content">
              {data.popupContent}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StandardHouseOption;
