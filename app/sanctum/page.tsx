"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const hebrewLetters = [
  "א","ב","ג","ד","ה","ו","ז","ח","ט","י",
  "כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת",
];

const letterMeta: Record<string, { quote: string; ratio: string; skew: string }> = {
  "א": { quote: "האלף — ראש כל האותיות, בלתי נשמעת ובכל זאת ראשית הקול", ratio: "2.4", skew: "0°" },
  "ב": { quote: "הבית — הבית הראשון שנכתב בתורה, שתי קוות מלאות חיים", ratio: "2.1", skew: "2°" },
  "ג": { quote: "הגימל — צעד, תנועה, האות שיש בה מהלך", ratio: "1.8", skew: "3°" },
  "ד": { quote: "הדלת — פתח, סף, גבול בין פנים לחוץ", ratio: "2.0", skew: "0°" },
  "ה": { quote: "הה — הנשמה, שם ה׳, צורה של אדם עם ידיים פשוטות", ratio: "2.3", skew: "1°" },
  "ו": { quote: "הוו — ישרות מוחלטת, קשר, חיבור וסמל שלמות", ratio: "0.5", skew: "0°" },
  "ז": { quote: "הזין — נשק, כלי, כוח בצורה אנכית אחת", ratio: "0.7", skew: "0°" },
  "ח": { quote: "החית — גשר, שני עמודים וקשת מעל, חיים בין ניגודים", ratio: "2.2", skew: "0°" },
  "ט": { quote: "הטית — סלסול, עגינות, פנימה ולא החוצה", ratio: "1.9", skew: "5°" },
  "י": { quote: "היוד — הקטנה מבכולן, ובה הכל מתחיל", ratio: "0.4", skew: "0°" },
  "כ": { quote: "הכף — כף יד פתוחה, קבלה ונתינה", ratio: "1.7", skew: "4°" },
  "ל": { quote: "הלמד — מגדל המתנשא, כלב לב, הגבוהה בכולן", ratio: "1.3", skew: "2°" },
  "מ": { quote: "המם — מים, גל, תנועה ועומק שאין לו קצה", ratio: "2.5", skew: "0°" },
  "נ": { quote: "הנון — נפש, גמישות, מי שמתכופף ואינו נשבר", ratio: "1.6", skew: "3°" },
  "ס": { quote: "הסמך — עיגול שלם, חיבוק, גבול שמגן", ratio: "2.0", skew: "0°" },
  "ע": { quote: "העין — הרואה ונראית, עין פתוחה לעולם", ratio: "2.4", skew: "6°" },
  "פ": { quote: "הפה — דיבור, יצירה, האות שפותחת עולם", ratio: "2.1", skew: "4°" },
  "צ": { quote: "הצדי — צדיק, עוגן, שלוש נקודות תמיכה", ratio: "2.3", skew: "2°" },
  "ק": { quote: "הקוף — יורד מתחת לשורה, אות שנוגעת בעולם שמתחת", ratio: "1.8", skew: "1°" },
  "ר": { quote: "הריש — ראש, עמוד שנשען ימינה, תנועה קדימה", ratio: "1.5", skew: "0°" },
  "ש": { quote: "השין — שלהבת, שלוש לשונות אש, שלמות בשלישי", ratio: "2.8", skew: "0°" },
  "ת": { quote: "התיו — חתימה, סוף וגם תחילה חדשה, שתי רגליים על הקרקע", ratio: "2.6", skew: "0°" },
};

const annotations = [
  { label: "זווית", top: "12%", right: "8%", lineDir: "diagonal" },
  { label: "קו", bottom: "15%", left: "8%", lineDir: "horizontal" },
  { label: "משקל", top: "45%", right: "4%", lineDir: "short" },
  { label: "ניקוד", top: "38%", left: "4%", lineDir: "short" },
];

export default function SanctumPage() {
  const [selectedLetter, setSelectedLetter] = useState("א");
  const [weight, setWeight] = useState(900);
  const [width, setWidth] = useState(100);
  const [activeAnnotation, setActiveAnnotation] = useState<string | null>(null);

  const meta = letterMeta[selectedLetter] ?? letterMeta["א"];

  return (
    <div
      dir="rtl"
      lang="he"
      style={{
        background: "#131313",
        color: "#e5e2e1",
        fontFamily: "'Space Grotesk', sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <TopBar section="Inner Sanctum" />

      {/* Monolith background letter */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "80vw",
          fontWeight: 900,
          WebkitTextStroke: "1px rgba(242,202,80,0.05)",
          color: "transparent",
          fontFamily: "'Space Grotesk', sans-serif",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          overflow: "hidden",
          opacity: 0.05,
          zIndex: 0,
        }}
      >
        {selectedLetter}
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          paddingTop: "5rem",
          paddingBottom: "6rem",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          minHeight: "100vh",
          alignItems: "start",
        }}
      >

        {/* LEFT COLUMN — col-span 3 */}
        <div
          style={{
            gridColumn: "span 3",
            padding: "2.5rem 1.5rem 2.5rem 2rem",
            borderRight: "2px solid #f2ca50",
            display: "flex",
            flexDirection: "column",
            gap: "1.8rem",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "1rem",
                fontWeight: 900,
                letterSpacing: "0.08em",
                color: "#e5e2e1",
                lineHeight: 1.3,
                marginBottom: "0.8rem",
              }}
            >
              האנטומיה של האות
            </h2>
            <p
              style={{
                fontSize: "0.8rem",
                lineHeight: 1.8,
                color: "#d0c5af",
              }}
            >
              כל אות עברית היא עולם בפני עצמו. ממד, זווית, משקל ומרחב — כולם מצטרפים ליצירה שיש בה תמיד משהו קדמון.
            </p>
          </div>

          {/* Weight slider */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#99907c",
                }}
              >
                משקל
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#f2ca50",
                }}
              >
                {weight}
              </span>
            </div>
            <input
              type="range"
              min={100}
              max={900}
              step={100}
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          {/* Width slider */}
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#99907c",
                }}
              >
                רוחב
              </span>
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 800,
                  color: "#f2ca50",
                }}
              >
                {width}%
              </span>
            </div>
            <input
              type="range"
              min={50}
              max={150}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          {/* Technical metadata */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <p
              style={{
                fontSize: "0.6rem",
                fontFamily: "monospace",
                color: "#4d4635",
                letterSpacing: "0.1em",
              }}
            >
              COORD: 32.0853° N, 34.7818° E
            </p>
            <p
              style={{
                fontSize: "0.6rem",
                fontFamily: "monospace",
                color: "#4d4635",
                letterSpacing: "0.1em",
              }}
            >
              VERSION: ARCHIVE_V.03
            </p>
          </div>
        </div>

        {/* CENTER COLUMN — col-span 6 */}
        <div
          style={{
            gridColumn: "span 6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "3rem 1.5rem",
            position: "relative",
            minHeight: "80vh",
          }}
        >
          {/* Main glyph with annotation callouts */}
          <div style={{ position: "relative", display: "inline-block" }}>

            {/* Annotation: זווית — top right */}
            <div
              style={{
                position: "absolute",
                top: "8%",
                right: "-5%",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.4rem",
                cursor: "pointer",
                opacity: activeAnnotation === "זווית" ? 1 : 0.5,
                transition: "opacity 0.2s",
                zIndex: 2,
              }}
              onClick={() =>
                setActiveAnnotation(activeAnnotation === "זווית" ? null : "זווית")
              }
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#f2ca50",
                  whiteSpace: "nowrap",
                  paddingTop: "0.1rem",
                }}
              >
                זווית
              </span>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderTop: "1px dashed rgba(242,202,80,0.5)",
                  borderLeft: "1px dashed rgba(242,202,80,0.5)",
                }}
              />
            </div>

            {/* Annotation: קו — bottom left */}
            <div
              style={{
                position: "absolute",
                bottom: "12%",
                left: "-5%",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                cursor: "pointer",
                opacity: activeAnnotation === "קו" ? 1 : 0.5,
                transition: "opacity 0.2s",
                zIndex: 2,
                flexDirection: "row-reverse",
              }}
              onClick={() =>
                setActiveAnnotation(activeAnnotation === "קו" ? null : "קו")
              }
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#f2ca50",
                  whiteSpace: "nowrap",
                }}
              >
                קו
              </span>
              <div
                style={{
                  width: "50px",
                  height: "1px",
                  borderTop: "1px dashed rgba(242,202,80,0.5)",
                }}
              />
            </div>

            {/* Annotation: משקל — center right */}
            <div
              style={{
                position: "absolute",
                top: "45%",
                right: "-8%",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                cursor: "pointer",
                opacity: activeAnnotation === "משקל" ? 1 : 0.5,
                transition: "opacity 0.2s",
                zIndex: 2,
              }}
              onClick={() =>
                setActiveAnnotation(activeAnnotation === "משקל" ? null : "משקל")
              }
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#f2ca50",
                  whiteSpace: "nowrap",
                }}
              >
                משקל
              </span>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  borderTop: "1px dashed rgba(242,202,80,0.5)",
                }}
              />
            </div>

            {/* Annotation: ניקוד — center left */}
            <div
              style={{
                position: "absolute",
                top: "38%",
                left: "-8%",
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                cursor: "pointer",
                opacity: activeAnnotation === "ניקוד" ? 1 : 0.5,
                transition: "opacity 0.2s",
                zIndex: 2,
                flexDirection: "row-reverse",
              }}
              onClick={() =>
                setActiveAnnotation(activeAnnotation === "ניקוד" ? null : "ניקוד")
              }
            >
              <span
                style={{
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  color: "#f2ca50",
                  whiteSpace: "nowrap",
                }}
              >
                ניקוד
              </span>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  borderTop: "1px dashed rgba(242,202,80,0.5)",
                }}
              />
            </div>

            {/* The main letter */}
            <div
              style={{
                fontSize: "60vh",
                fontWeight: weight,
                lineHeight: 1,
                WebkitTextStroke: "1.5px rgba(242,202,80,0.4)",
                color: "transparent",
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                transform: `scaleX(${width / 100})`,
                transition: "all 0.15s ease",
                display: "block",
              }}
            >
              {selectedLetter}
            </div>
          </div>

          {/* Letter selector row */}
          <div
            style={{
              display: "flex",
              gap: "0.3rem",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "2rem",
              maxWidth: "360px",
            }}
          >
            {hebrewLetters.map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLetter(l)}
                style={{
                  width: "36px",
                  height: "36px",
                  background: selectedLetter === l ? "#f2ca50" : "transparent",
                  border: selectedLetter === l
                    ? "none"
                    : "1px solid rgba(153,144,124,0.2)",
                  color: selectedLetter === l ? "#1a1200" : "#99907c",
                  fontSize: "1rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  transition: "all 0.15s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN — col-span 3, offset */}
        <div
          style={{
            gridColumn: "span 3",
            padding: "2.5rem 2rem 2.5rem 1.5rem",
            marginTop: "8rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Metadata card */}
          <div
            style={{
              background: "#1c1b1b",
              padding: "1.8rem",
              borderBottom: "1px solid rgba(242,202,80,0.1)",
            }}
          >
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#f2ca50",
                marginBottom: "1rem",
              }}
            >
              מטא-דאטה
            </p>

            <p
              style={{
                fontSize: "0.82rem",
                fontStyle: "italic",
                lineHeight: 1.75,
                color: "#d0c5af",
                marginBottom: "1.5rem",
              }}
            >
              &ldquo;{meta.quote}&rdquo;
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
              }}
            >
              <div style={{ background: "#131313", padding: "0.9rem" }}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#99907c",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  יחס
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: "#f2ca50",
                    lineHeight: 1,
                  }}
                >
                  {meta.ratio}
                </p>
              </div>
              <div style={{ background: "#131313", padding: "0.9rem" }}>
                <p
                  style={{
                    fontSize: "0.58rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#99907c",
                    marginBottom: "0.3rem",
                    textTransform: "uppercase",
                  }}
                >
                  הטייה
                </p>
                <p
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 900,
                    color: "#f2ca50",
                    lineHeight: 1,
                  }}
                >
                  {meta.skew}
                </p>
              </div>
            </div>
          </div>

          {/* Alphabet grid */}
          <div>
            <p
              style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#99907c",
                marginBottom: "1rem",
              }}
            >
              בחר אות
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "2px",
                background: "rgba(242,202,80,0.04)",
              }}
            >
              {hebrewLetters.map((l) => (
                <button
                  key={l}
                  onClick={() => setSelectedLetter(l)}
                  style={{
                    background: selectedLetter === l ? "#f2ca50" : "#1c1b1b",
                    border: "none",
                    color: selectedLetter === l ? "#1a1200" : "#d0c5af",
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    fontFamily: "'Space Grotesk', sans-serif",
                    cursor: "pointer",
                    padding: "0.6rem 0",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
