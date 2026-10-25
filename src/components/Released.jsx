import React, { useState } from "react";
import ReleasedBenefits from "./ReleasedBenefits";
import ReleasedInterview from "./ReleasedInterview";
import ReleasedMental from "./ReleasedMental";

function Released({ onComplete, onBack }) {
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
    <div className="Released">
     {page === 0 && <ReleasedBenefits nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
        {page === 1 &&  <ReleasedInterview nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
       {page === 2 && <ReleasedMental nextPage={handleNextPage}
          prevPage={handlePrevPage}/>}
    </div>
  )
}

export default Released
