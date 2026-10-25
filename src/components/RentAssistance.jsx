import React from 'react'
import "../css/RentAssistance.css";
import toFridgeBtn from "../assets/images/to-fridge-icon.svg";

function RentAssistance({ onBack }) {
  return (
    <div className='RentAssistance'>
      <h1 className="title title-HouseBenefits">שכר דירה</h1>
      <div className='RentAssistance-eggs'>
        <p>שכר דירה: 1,4482.49₪ <br /> הא”ד: 372.39₪</p>
        <p className='RentAssistance-eggs-bold'>סה”כ שכ”ד: 1855.42₪</p>
      </div>
      <div className='RentAssistance-text'>
        <p className='underline'>אוכלוסיה זכאית:</p>
        <p>כלל החיילים הבודדים מלבד בני שליחים אשר המוסד השולח אכן משלם עבור החייל פתרון דיור - עדכון</p>
        <p>עדכון: חייל בודד אשר שוכר דירה מקרוב מדרגה ראשונה יהיה זכאי להשתתפות של עד 100% מגובה תקרת שכר הדירה</p>
      </div>
      <img
        src={toFridgeBtn}
        alt="toFridgeBtn"
        className="toFridgeBtn"
        onClick={onBack}
      />
    </div>
  )
}

export default RentAssistance
