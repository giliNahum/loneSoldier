import React, { useState } from "react";
import "../css/ReleasedMental.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import desk0 from "../assets/images/ReleasedMental-desk0.svg";
import desk1 from "../assets/images/ReleasedMental-desk1.svg";
import desk2 from "../assets/images/ReleasedMental-desk2.svg";
import desk3 from "../assets/images/ReleasedMental-desk3.svg";
import note1 from "../assets/images/ReleasedMental-note1.svg";
import note2 from "../assets/images/ReleasedMental-note2.svg";
import note3 from "../assets/images/ReleasedMental-note3.svg";

function ReleasedMental({ nextPage, prevPage }) {
  const [page, setPage] = useState(0);
  const desks = [desk0, desk1, desk2, desk3];
  const notes = [note1, note2, note3];

  const handleNextPage = () => {
    if (page !== 3) {
      setPage((prev) => prev + 1);
    }
  };
  const handlePrevPage = () => {
    if (page !== 0) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="ReleasedMental">
      <h1 className="title title-exceptions">חייל בודד הפוסל שירות</h1>
      <p className="exceptions-instruction">
        לחצו על המסמך כדי לעבור למסמך הבא -
      </p>
        <img
          src={desks[page]}
          alt="desk"
          className="ReleasedMental-desk"
          onClick={handleNextPage}
        />
        {page > 0 && (
          <div className="ReleasedMental-note" onClick={handlePrevPage}>
            <p className="ReleasedMental-note-instruction">
              - לחצו כדי לחזור למסמך הקודם -
            </p>
            <img
              src={notes[page - 1]}
              alt="note"
              className="ReleasedMental-note-img"
            />
          </div>
        )}
      <NextBtn color={"#032057"} onClick={nextPage} disabled={page !== 3} />

      <BackBtn color={"#032057"} onClick={prevPage} />
    </div>
  );
}

export default ReleasedMental;
