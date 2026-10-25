import React, { useState } from "react";
import "../css/HouseOptions.css";

import fridgeOpen from "../assets/images/house-options-fridge.png";
import fridgeClose from "../assets/images/fridgeClose.svg";
import housingExpensesImg from "../assets/images/housing-expenses.png";
import alahApartmentImg from "../assets/images/alah-apartment.png";
import warmHouseImg from "../assets/images/warm-house.png";

import NextBtn from "./NextBtn";
import BackBtn from "./BackBtn";

// קומפוננטה אחת לשלושת העמודים בעלי המבנה הזהה
import StandardHouseOption from "./StandardHouseOption";

// שלושת העמודים בעלי העיצוב הייחודי
import SoldierHouse from "./SoldierHouse";
import RentAssistance from "./RentAssistance";
import KibbutzAdoption from "./KibbutzAdoption";

const pageOneNotes = [
    {
      id: "top-right",
      className: "house-note--top-right",
      text: (
        <>
         חשוב לציין כי במידה ולחייל יש תלונה יש להתייחס לכך בהמלצת ק.ת"ש + המלצת מפקד בדרגת רס"ן על התלונה + מכתב אישי מפורט של החייל על מהות התלונה. יש לארכב את כלל האישורים למערכת
        </>
      ),
    },
    {
      id: "bottom-right",
      className: "house-note--bottom-right",
      dark: true,
      text: (
        <>
          בכל פתרון דיור יש לוודא כי
          <strong> לא מוזן כפל זכאויות!</strong>
          במידה וקיים כפל זכאויות יש לתקן הזנה תוך 7 ימי עבודה.
        </>
      ),
    },
    {
      id: "top-left",
      className: "house-note--top-left",
      dark: true,
      text: (
        <>
          במידה ולחייל מוזנת הטבת בית החייל, עם כניסתו לפתרון דיור חדש באחריות תא הלנות ומשרד הת"ש לוודא קיצור זכאות החייל ללינה בבית החייל, והזנת זכאות לפתרון דיור הנוכחי בהתאם לזכאותו כבודד.
        </>
      ),
    },
    {
      id: "bottom-left",
      className: "house-note--bottom-left",
      text: (
        <>
         בעת כניסת החייל לקיבוץ/דירת אל"ח, על סגל הת"ש לוודא בלשונית "הטבות" כי זכאות החייל שונתה לסטטוס "התקבלה/פעילה".
        </>
      ),
    },
  ];

const options = [
    {
      id: "housing-expenses",
      title: "הוצאות אחזקת דירה",
  
      label: (
        <>
          הוצאות
          <br />
          אחזקת
          <br />
          דירה
        </>
      ),
  
      className: "house-option--housing-expenses",
      type: "standard",
  
      data: {
        variant: "expenses",
        title: "הוצאות אחזקת דירה: 372.39₪",
  
        // אותה תמונה תוצג פעמיים
        itemImage: housingExpensesImg,
  
        rightItem: {
          title: (
            <>
              הא״ד מותנה שכ״ד
              <br />
              (אוטומטי)
            </>
          ),
  
          content: (
            <>
              <p>
              חייל בודד שהוכר להטבת דיור ושוכר דירה/ בבעלותו דירה עליה משלם משכנתא- <strong> בעת הזנת השכ"ד/משכנתא יוזן ההא"ד באופן אוטומטי.</strong>
              </p>
  
              <p>את הטבת ההא"ד האוטומטית לא נראה כהטבה בפני עצמה ברשומות הצהליות אלא בתלוש השכר.</p>
            </>
          ),
        },
  
        leftItem: {
          title: (
            <>
              הא”ד משולם (מוגש כבקשה)
            </>
          ),
  
          content: (
            <>
              <p>
              ניתן לחייל בודד שמתגורר במקום מגורים קבוע, משתתף בהוצאות אחזקת הדירה ומתכוון להמשיך לגור שם — גם אם אינו משלם שכ״ד או משכנתא, למשל בדירה בבעלות הוריו או בבעלותו.
              </p>
  
              <p>
              ההטבה מיועדת להשתתפות בהוצאות השוטפות של תחזוקת הבית, וניתן להזין אותה גם רטרואקטיבית. 
              </p>
              <p>אם יש שינוי במקום המגורים, יש לבטל את ההטבה ולעדכן הטבת דיור חדשה בהתאם.</p>
            </>
          ),
        },
  
        popupButtonText: "איך מגישים?",
        popupTitle: "נוהל הגשה",
  
        popupContent: (
          <ul>
            <li>החייל חותם על הצהרת מהימנות מול מש״קית הת״ש.</li>
            <li> יש לארכב את ההצהרה תחת הבקשה.</li>
            <li> אין צורך באישורים נוספים.</li>
            <li> ניתן לקבל הא״ד גם ללא שכ״ד/משכנתא, אם החייל משתתף בהוצאות הבית.</li>
            <li> ניתן להזין את ההטבה רטרואקטיבית בצירוף הצהרה מתאימה.</li>
            <li> אם החייל עתיד לגור במקום קבוע, ניתן לאשר על סמך הצהרתו.</li>
            <li> גורם מאשר: קצינת הת״ש היחידתית.</li>
          </ul>
        ),
  
        bottomText: null,
      },
    },
  
    {
      id: "soldier-house",
      title: "בית החייל",
  
      label: (
        <>
          בית
          <br />
          החייל
        </>
      ),
  
      className: "house-option--soldier-house",
      type: "custom",
      component: SoldierHouse,
    },
  
    {
      id: "warm-house",
      title: "בית חם",
  
      label: (
        <>
          בית
          <br />
          חם
        </>
      ),
  
      className: "house-option--warm-house",
      type: "standard",
  
      data: {
        variant: "warm",
        title: "בית חם",
  
        description:
          "לינה באחת מדירות ‘האגודה למען החייל’, המאפשרת ללוחם לינה בחדר לבד. ",
  
        itemImage: warmHouseImg,
  
        rightItem: {
          title: "אוכלוסייה זכאית",
  
          content: (
            <ul>
              <li>חיילים לוחמים בלבד.</li>
              <li>חיילים אשר הוכרו כחיילים בודדים.</li>
            </ul>
          ),
        },
  
        leftItem: {
          title: "קריטריונים",
  
          content: (
            <ul>
              <li>חייל ללא עבירות משמעת והתנהגויות חמורות - בחצי שנה האחרונה</li>
              <li>יתרת שירות של 6 חודשים לפחות.</li>
              <li>יתרת זכאות של 6 חודשים לפחות כבודד.</li>
            </ul>
          ),
        },
  
        popupButtonText: "דגשים",
        popupTitle: "דגשים",
  
        popupContent: (
          <ul>
            <li>חייל שרוצה לסיים מגורים לפני תום הזכאות יחתום על ויתור זכאות.</li>
            <li> יש לפתוח בקשת ביטול שתנותב לתא הלנות.</li>
            <li> תא הלנות אחראי להזין את הוויתור ולוודא שהחייל יצא מהדירה.</li>
            <li> ביטול הזכאות יאושר רק לאחר החזרת מפתח ופינוי ציוד.</li>
            <li> במקרה של התנהגות חריגה או פגיעה במשמעת — תועבר תלונה לתא הלנות, ובמידת הצורך החייל יזומן לבירור.</li>
            <li> ההחלטה על המשך שהות בדירה תתקבל רק על ידי רת״ח פתרונות הדיור.</li>
            <li> בקשות חריגות ייבחנו בוועדת חריגים על ידי רע״ן ת״ש.</li>
          </ul>
        ),
  
        bottomText: (
          <>
            חייל הממש פתרון דיור זה יהיה זכאי בכל חודש לתווי קנייה אוטומטיים בשווי 400₪ לרכישת מוצרי מזון
          </>
        ),
      },
    },
  
    {
      id: "kibbutz-adoption",
      title: "אימוץ בקיבוץ",
  
      label: (
        <>
          אימוץ
          <br />
          בקיבוץ
        </>
      ),
  
      className: "house-option--kibbutz-adoption",
      type: "custom",
      component: KibbutzAdoption,
    },
  
    {
      id: "rent-assistance",
      title: "שכר דירה",
      label: "שכר דירה",
      className: "house-option--rent-assistance",
      type: "custom",
      component: RentAssistance,
    },
  
    {
      id: "alah-apartment",
      title: "דירת אל״ח",
  
      label: (
        <>
          דירת
          <br />
          אל״ח
        </>
      ),
  
      className: "house-option--alah-apartment",
      type: "standard",
  
      data: {
        variant: "alah",
        title: "דירת אל״ח",
  
        description:
          "דירת אל״ח היא פתרון דיור לחיילים הזכאים ללינה באחת מדירות האגודה למען החייל.",
  
        itemImage: alahApartmentImg,
  
        rightItem: {
          title: "אוכלוסייה זכאית",
  
          content: (
            <ul>
              <li>כלל החיילים הבודדים למעט מרבית בני שליחים</li>
              <li>חיילים אשר הוכרו לזכאי סיוע והלנה מטעמי פרט</li>
            </ul>
          ),
        },
  
        leftItem: {
          title: "קריטריונים",
  
          content: (
            <ul>
              <li>חייל ללא עבירות משמעת והתנהגויות חמורות - בחצי שנה האחרונה</li>
              <li>יתרת שירות של 6 חודשים לפחות.</li>
              <li>יתרת זכאות של 6 חודשים לפחות כבודד / הלנה מטעמי פרט.</li>
            </ul>
          ),
        },
  
        popupButtonText: "דגשים",
        popupTitle: "דגשים",
  
        popupContent: (
          <ul>
            <li>סמכות אישור הבקשה היא קצינת הת״ש היחידתית.</li>
            <li> החייל ידרג שלוש ערים לפי סדר עדיפות.</li>
            <li> בקשות חריגות ייבחנו בוועדת חריגים על ידי רע״ן ת״ש.</li>
            <li> אם החייל רוצה לסיים את המגורים לפני תום הזכאות, עליו לחתום ויתור, לפתוח בקשת ביטול ולפנות את הדירה.</li>
            <li> ביטול הזכאות יאושר רק לאחר החזרת המפתח ופינוי הציוד.</li>
            <li> במקרה של התנהגות חריגה או פגיעה בכללי המשמעת, תועבר תלונה לתא הלנות, ובמידת הצורך החייל יזומן לבירור. ההחלטה על המשך שהותו בדירה תתקבל על ידי רת״ח פתרונות הדיור בלבד.</li>
          </ul>
        ),
  
        bottomText: (
          <>
            חייל המתגורר בדירת אל״ח זכאי בכל חודש לתווי קנייה אוטומטיים בסך 400 ש״ח לרכישת מוצרי מזון.
          </>
        ),
      },
    },
  ];

function HouseOptions({ nextPage, previousPage, isBack }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [page, setPage] = useState(isBack ? 1 : 0);
  const [canContinue, setCanContinue] = useState(isBack);

  /*
    אם חזרנו לעמוד מעמוד מתקדם יותר,
    כל האפשרויות נחשבות שכבר נפתחו.
  */
  const [visitedOptions, setVisitedOptions] = useState(() =>
    isBack ? options.map((option) => option.id) : []
  );

  const allOptionsVisited = visitedOptions.length === options.length;

  const selectedOptionData = options.find(
    (option) => option.id === selectedOption
  );

  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);

    setVisitedOptions((previousVisited) => {
      if (previousVisited.includes(optionId)) {
        return previousVisited;
      }

      return [...previousVisited, optionId];
    });
  };

  const handleReturnFromOption = () => {
    /*
      לאחר שחוזרים מהאפשרות השישית,
      עוברים אוטומטית לעמוד הבא.

      אם הגענו לכאן באמצעות חזרה מעמוד מתקדם,
      חוזרים למקרר ולא עוברים שוב אוטומטית.
    */
    if (allOptionsVisited) {
        setCanContinue(true);
    }
    
    setSelectedOption(null);
  };

  /*
    הצגת אחד משלושת העמודים בעלי המבנה הזהה.
  */
  if (selectedOptionData?.type === "standard") {
    return (
      <StandardHouseOption
        data={selectedOptionData.data}
        onBack={handleReturnFromOption}
      />
    );
  }

  /*
    הצגת אחד משלושת העמודים הייחודיים.
  */
  if (selectedOptionData?.type === "custom") {
    const SelectedComponent = selectedOptionData.component;

    return <SelectedComponent onBack={handleReturnFromOption} />;
  }

  const toNext = () => {
    if (page === 1) {
        nextPage()
    } else {
        setPage(1);
    }
  }
  const toBack = () => {
    if (page === 0) {
        previousPage()
    } else {
        setPage(0);
    }
  }

  return (
    <div className="HouseOptions">
      <div className="house-options-content">
        <h1 className="title title-HouseBenefits">פתרונות דיור</h1>

       {page === 0 && <p className="HouseBenefits-instruction">
          – לחצו על הפריטים במקרר כדי ללמוד על כל פתרון דיור –
        </p>}

        <div
  className={`house-options-stage ${
    page === 1 ? "house-options-stage--notes" : ""
  }`}
>
  <div className="house-options-fridge-wrapper">
    <img
      src={page === 0 ? fridgeOpen : fridgeClose}
      alt={
        page === 0
          ? "מקרר ובו פתרונות דיור שונים"
          : "מקרר סגור עם דגשים נוספים"
      }
      className="house-options-fridge-image"
      draggable="false"
    />

    {page === 0 &&
      options.map((option) => {
        const isVisited = visitedOptions.includes(
          option.id
        );

        return (
          <button
            key={option.id}
            type="button"
            className={`
              house-option-button
              ${option.className}
              ${
                isVisited
                  ? "house-option-button--visited"
                  : ""
              }
            `}
            onClick={() =>
              handleOptionClick(option.id)
            }
            aria-label={`פתיחת מידע על ${option.title}`}
          >
            <span className="house-option-label">
              {option.label}
            </span>

            {isVisited && (
              <span
                className="house-option-check"
                aria-hidden="true"
              >
                ✓
              </span>
            )}
          </button>
        );
      })}
  </div>

  {page === 1 &&
    pageOneNotes.map((note) => (
      <div
        key={note.id}
        className={`
          house-note
          ${note.className}
          ${note.dark ? "house-note--dark" : ""}
        `}
      >
        {note.text}
      </div>
    ))}
</div>
      </div>

      <BackBtn color={"#502009"} onClick={toBack} />

      <NextBtn color={"#502009"} onClick={toNext} disabled={!canContinue} />
    </div>
  );
}

export default HouseOptions;
