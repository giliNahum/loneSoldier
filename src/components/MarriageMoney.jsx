import React, { useState } from "react";
import "../css/MarriageMoney.css";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

import envelope1 from "../assets/images/MarriageMoney-envelope1.svg";
import envelope2 from "../assets/images/MarriageMoney-envelope2.svg";
import envelope2back from "../assets/images/MarriageMoney-envelope2back.svg";
import safe from "../assets/images/MarriageMoney-safe.svg";

function MarriageMoney({ nextPage, prevPage }) {
    const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);

    const [canContinue, setCanContinue] = useState(false);
  
    const handleEnvelopeClick = () => {
        setIsEnvelopeOpened((prev) => !prev);
      setCanContinue(true);
    };
  return (
    <div className="MarriageMoney">
      <h1 className="title title-exceptions">תשמ”ש נשוי</h1>
      <div className="MarriageMoney-text">
        <p>
          חייל בודד שנישא תמיד יהיה זכאי לתשמ״ש נשוי, גם אם אשתו אינה עומדת
          בקריטריונים הרגילים.
        </p>
        <p>
          אם סכום התשמ״ש נמוך מסכום זכאות הבודד הכוללת, יש להגיש לתא תשמ״ש בקשה
          להעלאת הסכום.
        </p>
      </div>
      <div className="MarriageMoney-envelopes">
        <div>
          <img
             src={isEnvelopeOpened ? envelope2back : envelope2}
            alt="envelope2"
            className="MarriageMoney-envelope MarriageMoney-envelope2"
            onClick={handleEnvelopeClick}
          />
          <p className="MarriageMoney-envelope-text">- לחצו על המעטפה -</p>
        </div>
        <img
          src={envelope1}
          alt="envelope1"
          className="MarriageMoney-envelope"
        />
      </div>
      <img src={safe} alt="safe" className="MarriageMoney-safe" />
      <NextBtn color={"#032057"} onClick={nextPage} disabled={!canContinue} />
      <BackBtn color={"#032057"} onClick={prevPage} />
    </div>
  );
}

export default MarriageMoney;
