import React, { useState } from "react";
import "../css/MiluimRights.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import bag from "../assets/images/MiluimRights-bag.svg";
import coat from "../assets/images/MiluimRights-coat.svg";
import hoodie from "../assets/images/MiluimRights-hoodie.svg";
import scarf from "../assets/images/MiluimRights-scarf.svg";

import MiluimRightsSvg from "./MiluimRightsSvg";

function MiluimRights({ nextPage, prevPage }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [clickedItems, setClickedItems] = useState([]);

  const items = {
    1: bag,
    2: scarf,
    3: hoodie,
    4: coat,
  };

  const handleItemClick = (itemNumber) => {
    // פותח את התמונה הרלוונטית
    setSelectedItem(items[itemNumber]);

    // שומר שכבר לחצו על הפריט
    setClickedItems((prev) => {
      if (prev.includes(itemNumber)) {
        return prev;
      }

      return [...prev, itemNumber];
    });
  };

  const closeItem = () => {
    setSelectedItem(null);
  };

  const canContinue = clickedItems.length === 4;

  return (
    <div className="MiluimRights">
      <h1 className="title title-exceptions">זכויות</h1>

      <p className="exceptions-instruction">
        - לחצו על הפריטים התלויים כדי ללמוד על כל נושא -
      </p>

      <MiluimRightsSvg onItemClick={handleItemClick} />

      <NextBtn color={"#032057"} onClick={nextPage} disabled={!canContinue} />

      <BackBtn color={"#032057"} onClick={prevPage} />

      {selectedItem && (
        <div
          className="MiluimRights-overlay blur-background"
          onClick={closeItem}
        >
          <div className="MiluimRights-selected-item">
            <button
              type="button"
              className="MiluimRights-close"
              onClick={closeItem}
            >
              ×
            </button>
            <img
              src={selectedItem}
              alt=""
              className="MiluimRights-selected-item-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MiluimRights;
