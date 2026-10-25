import React, { useState } from "react";
import MarriageStart from "./MarriageStart";
import MarriageStage from "./MarriageStage";
import MarriageMoney from "./MarriageMoney";

function Marriage({ onComplete, onBack }) {
  const [page, setPage] = useState(0);

  const handleNextPage = () => {
    if (page < 2) {
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
    <div className="Marriage">
     {page === 0 && <MarriageStart nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
        {page === 1 &&  <MarriageStage nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
         {page === 2 && <MarriageMoney nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
    </div>
  )
}

export default Marriage
