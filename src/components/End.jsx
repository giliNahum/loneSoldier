import React, { useState } from "react";
import Summary from "./Summary";
import Practice from "./Practice";
import EndPage from "./EndPage";

function End({ setSection }) {
  const [page, setPage] = useState(0);
  const [isBackNavigation, setIsBackNavigation] = useState(false);
  const handleNextPage = () => {
    setIsBackNavigation(false); // מאפסים את מצב החזרה
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setIsBackNavigation(true); // מסמנים שהגענו לכאן מחזרה אחורה
    setPage(page - 1);
  };
  return (
    <div className="End">
      {page === 0 && (
        <Summary nextPage={handleNextPage} setSection={setSection} />
      )}
     {page === 1 && <Practice previousPage={handlePreviousPage} nextPage={handleNextPage} setSection={setSection}/>}
     {page === 2 && <EndPage setSection={setSection}/>}
    </div>
  );
}

export default End;
