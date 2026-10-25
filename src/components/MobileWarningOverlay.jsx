import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../css/MobileWarningOverlay.css";

function detectDevice() {
  const ua = navigator.userAgent;
  const touch = navigator.maxTouchPoints > 0;

  // כולל iPad שמציג את עצמו בדפדפן כמחשב Mac.
  const isIPad =
    /iPad/i.test(ua) ||
    (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);

  if (isIPad) return "tablet";
  if (/iPhone|iPod/i.test(ua)) return "phone";

  if (/Android/i.test(ua)) {
    return /Mobile/i.test(ua) ? "phone" : "tablet";
  }

  // מחשב עם מסך מגע עדיין נחשב מחשב.
  if (/Windows NT|Macintosh|CrOS/i.test(ua)) {
    return "desktop";
  }

  // גיבוי למכשירי מגע שהדפדפן לא מזהה בבירור.
  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

  if (touch && coarsePointer) {
    const shortSide = Math.min(
      window.screen.width,
      window.screen.height
    );

    return shortSide < 600 ? "phone" : "tablet";
  }

  return "desktop";
}

function MobileWarningOverlay({
  // אפשר להשאיר auto. שימושי גם לבדיקת העיצוב.
  deviceType = "auto",
}) {
  const [view, setView] = useState(null);
  const [copyState, setCopyState] = useState("idle");
  const [manualLink, setManualLink] = useState("");

  useEffect(() => {
    const orientation = window.matchMedia("(orientation: portrait)");

    const update = () => {
      const device =
        deviceType === "auto" ? detectDevice() : deviceType;

      if (device === "phone") {
        setView("phone");
      } else if (device === "tablet" && orientation.matches) {
        setView("tablet");
      } else {
        setView(null);
      }
    };

    update();

    orientation.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      orientation.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, [deviceType]);

  useEffect(() => {
    if (!view) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [view]);

  async function copyLink() {
    const link = window.location.href;

    try {
      await navigator.clipboard.writeText(link);
      setCopyState("copied");
      setManualLink("");
    } catch {
      // אם ההעתקה חסומה, מאפשרים העתקה ידנית.
      setCopyState("manual");
      setManualLink(link);
    }
  }

  if (!view) return null;

  const isTablet = view === "tablet";

  return createPortal(
    <div className="mobile-overlay" dir="rtl">
      <section
        className={`mobile-overlay-card mobile-overlay-card--${view}`}
        role="dialog"
        aria-modal="true"
        aria-label={
          isTablet ? "סיבוב הטאבלט לרוחב" : "פתיחת הלומדה במחשב"
        }
      >
        <div className="mobile-overlay-badge">
          {isTablet ? "סיבוב קטן ומתחילים" : "ניפגש במסך הגדול"}
        </div>

        <div className="mobile-overlay-scene" aria-hidden="true">
          {isTablet ? (
            <>
              <span className="mobile-overlay-rotate-arrow">↻</span>

              <div className="mobile-overlay-device mobile-overlay-tablet">
                <div className="mobile-overlay-screen">
                  <span className="mobile-overlay-face">•‿•</span>
                  <span className="mobile-overlay-screen-line" />
                  <span className="mobile-overlay-screen-line" />
                </div>
              </div>
            </>
          ) : (
            <div className="mobile-overlay-transfer">
              <div className="mobile-overlay-device mobile-overlay-phone">
                <div className="mobile-overlay-screen">
                  <span className="mobile-overlay-face">•‿•</span>
                </div>
              </div>

              <span className="mobile-overlay-transfer-arrow">←</span>

              <div className="mobile-overlay-computer">
                <div className="mobile-overlay-device">
                  <div className="mobile-overlay-screen">
                    <span className="mobile-overlay-face">•‿•</span>
                    <span className="mobile-overlay-screen-line" />
                  </div>
                </div>
                <span className="mobile-overlay-computer-base" />
              </div>
            </div>
          )}
        </div>

        <h1 className="mobile-overlay-title">
          {isTablet ? "מסובבים לרוחב ✨" : "צריך קצת יותר מקום ✨"}
        </h1>

        <p className="mobile-overlay-text">
          {isTablet
            ? "סובבו את הטאבלט — והלומדה תיפתח אוטומטית."
            : "הלומדה אינה מותאמת לטלפון. פתחו אותה במחשב כדי להתחיל."}
        </p>

        {isTablet ? (
          <div className="mobile-overlay-waiting">
            <span className="mobile-overlay-dot" aria-hidden="true" />
            מחכים לסיבוב שלכם
          </div>
        ) : (
          <>
            <button
              type="button"
              className="mobile-overlay-copy-button"
              onClick={copyLink}
            >
              {copyState === "copied"
                ? "הקישור הועתק ✓"
                : "העתקת הקישור למחשב"}
            </button>

            <p className="mobile-overlay-copy-status" role="status">
              {copyState === "copied"
                ? "שלחו לעצמכם את הקישור ופתחו אותו במחשב."
                : copyState === "manual"
                  ? "בחרו את הקישור והעתיקו אותו ידנית:"
                  : "מעתיקים, שולחים לעצמכם ופותחים במחשב."}
            </p>

            {manualLink && (
              <input
                className="mobile-overlay-link"
                aria-label="קישור ללומדה להעתקה ידנית"
                value={manualLink}
                readOnly
                dir="ltr"
                onFocus={(event) => event.target.select()}
                onClick={(event) => event.currentTarget.select()}
              />
            )}
          </>
        )}
      </section>
    </div>,
    document.body
  );
}

export default MobileWarningOverlay;