import React, { useState } from "react";
import "../css/MarriageStage.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import bookPurple from "../assets/images/MarriageStage-book-purple.svg";
import bookBlue from "../assets/images/MarriageStage-book-blue.svg";
import bookDarkBlue from "../assets/images/MarriageStage-book-darkblue.svg";
import MarriageBooksSvg from "./MarriageBooksSvg";

function MarriageStage({ nextPage, prevPage }) {
  const [selectedBook, setSelectedBook] = useState(bookPurple);
  const [clickedBooks, setClickedBooks] = useState([]);

  const handleBookClick = (bookNumber) => {
    if (bookNumber === 1) {
      setSelectedBook(bookDarkBlue);
    }

    if (bookNumber === 2) {
      setSelectedBook(bookBlue);
    }

    if (bookNumber === 3) {
      setSelectedBook(bookPurple);
    }

    setClickedBooks((prev) => {
      if (prev.includes(bookNumber)) {
        return prev;
      }

      return [...prev, bookNumber];
    });
  };

  const canContinue = clickedBooks.length >= 2;
  return (
    <div className="MarriageStage">
      <h1 className="title title-exceptions">חייל בודד הנישא במהלך שירותו</h1>
      <p className="exceptions-instruction">- לחצו על הספרים שבמדף -</p>
      <div className="MarriageStage-content">
        <MarriageBooksSvg onBookClick={handleBookClick} />
        <img
          src={selectedBook}
          alt="marriage-stage-main-book"
          className="marriage-stage-main-book"
        />
      </div>
      <NextBtn color={"#032057"} onClick={nextPage} disabled={!canContinue} />
      <BackBtn color={"#032057"} onClick={prevPage} />
    </div>
  );
}

export default MarriageStage;
