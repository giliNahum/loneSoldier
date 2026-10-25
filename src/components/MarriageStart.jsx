import React, { useState } from "react";
import "../css/MarriageStart.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import MarriageStartImg from "../assets/images/MarriageStart-img.svg";
import flower1 from "../assets/images/MarriageStart-flower1.png";
import flower2 from "../assets/images/MarriageStart-flower2.png";

function MarriageStart({ nextPage, prevPage }) {
  const [page, setPage] = useState(0);
  const cards = [
    {
      img: flower1,
      text: (
        <>
          אם החייל לן בבית החייל, יש להגיש קיצור זכאות ברמת היחידה
          <br />
          קיצור הזכאות יתבצע כך שתום הזכאות יהיה 3 חודשים מיום הנישואין
        </>
      ),
    },
    {
      img: flower2,
      text: (
        <>
          חייל בודד שנישא במהלך שירותו יהיה זכאי להטבות חייל בודד משוחרר, ללא
          תלות במועד נישואיו
        </>
      ),
    },
  ];
  const [openCards, setOpenCards] = useState([]);
  const allOpened = openCards.length === cards.length;
  const canContinue = allOpened || page === 0;
  const handleNextPage = () => {
    if (page === 0) {
      setPage(1);
    } else {
      nextPage();
    }
  };

  const handlePreviousPage = () => {
    if (page === 0) {
      prevPage();
    } else {
      setPage(0);
    }
  };

  return (
    <div className="MarriageStart">
      {page === 0 && <img
        src={MarriageStartImg}
        alt="MarriageStartImg"
        className="MarriageStartImg"
      />}
      {page === 0 && <div className="MarriageStart-text">
        <p>חייל שמתחתן במהלך שירותו זכאי למענק נישואין בסך 1,448₪.</p>
        <p>חייל בודד שנישא זכאי בנוסף למענק נוסף בסך 723.95₪.</p>
      </div>}
      {page === 1 && (
        <h1 className="title title-exceptions">חייל בודד הנישא במהלך שירותו</h1>
      )}
      {page === 1 && (
        <p className="exceptions-instruction">- לחצו על הפרחים -</p>
      )}
      {page === 1 && (
        <div className="MarriageStart-cards-wrapper">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`MarriageStart-card ${
                openCards.includes(index) ? "MarriageStart-card-active" : ""
              }`}
              onClick={() =>
                setOpenCards((previousCards) =>
                  previousCards.includes(index)
                    ? previousCards
                    : [...previousCards, index]
                )
              }
            >
              <img src={card.img} alt="" className="MarriageStart-card-img" />

              <div className="MarriageStart-card-text">{card.text}</div>
            </div>
          ))}
        </div>
      )}
      <NextBtn
        color={"#032057"}
        onClick={handleNextPage}
        disabled={!canContinue}
      />
      <BackBtn color={"#032057"} onClick={handlePreviousPage} />
    </div>
  );
}

export default MarriageStart;
