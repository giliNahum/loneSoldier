import React, { useState } from "react";
import MiluimStart from "./MiluimStart";
import MiluimRights from "./MiluimRights";

function Miluim({ onComplete, onBack }) {
  const [page, setPage] = useState(0);
  const handleNextPage = () => {
    if (page < 1) {
      setPage((prev) => prev + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    } else {
      onBack();
    }
  };
  return (
    <div className="Miluim">
      {page === 0 && (
        <MiluimStart nextPage={handleNextPage} prevPage={handlePrevPage} />
      )}
      {page === 1 && (
        <MiluimRights nextPage={handleNextPage} prevPage={handlePrevPage} />
      )}
    </div>
  );
}

export default Miluim;
