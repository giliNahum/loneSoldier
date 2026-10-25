import React from 'react'
import "../css/Summary.css";

import ToHouseBtn from './ToHouseBtn';
import NextBtn from "./NextBtn";
import SummaryImg from "../assets/images/Summary-img.svg";

function Summary({ nextPage, setSection }) {
  return (
    <div className='Summary'>
      <ToHouseBtn didFinish={false} backToHouse={()=> setSection(1)}/>
      <h1 className="title">דגשים לק’ ת”ש</h1>
      <img src={SummaryImg} alt="SummaryImg" className='SummaryImg' />
      <NextBtn color={"#330067"} onClick={nextPage} />
    </div>
  )
}

export default Summary
