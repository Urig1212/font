"use client";

import { useState } from "react";
import Link from "next/link";
import BottomNav from "../components/BottomNav";

const hebrewLetters = ["א","ב","ג","ד","ה","ו","ז","ח","ט","י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת"];

const letterMeta: Record<string, { quote: string; ratio: string; skew: string; desc: string }> = {
  "א": { quote: "ראשית הקול, בלתי נשמעת ובכל זאת נוכחת", ratio: "2.4", skew: "0°", desc: "האלף היא ראש האותיות — שתי יודין וקו אלכסוני המחבר ביניהן." },
  "ב": { quote: "הבית הראשון שנכתב בתורה", ratio: "2.1", skew: "2°", desc: "שלוש קווים בצורת בית — פתח מצד ימין, גג ורצפה." },
  "ג": { quote: "תנועה, צעד, מהלך", ratio: "1.8", skew: "3°", desc: "הגימל מורכב מרגל מתוחה קדימה — אות בתנועה מתמדת." },
  "ד": { quote: "פתח, סף, גבול בין פנים לחוץ", ratio: "2.0", skew: "0°", desc: "הדלת — שני קווים יוצרים פינה חדה בפינה הימנית העליונה." },
  "ה": { quote: "הנשמה, צורה של אדם עם ידיים פשוטות", ratio: "2.3", skew: "1°", desc: "הה דומה לכ אך עם חיתוך בצד שמאל. שם ה׳ בתוכה." },
  "ו": { quote: "ישרות מוחלטת, חיבור וסמל שלמות", ratio: "0.5", skew: "0°", desc: "הוו — קו אנכי עם ראש קטן. פשטות מוחלטת." },
  "ז": { quote: "כוח בצורה אנכית אחת", ratio: "0.7", skew: "0°", desc: "הזין מזכיר חרב — קו ישר עם זנב קטן בראש." },
  "ח": { quote: "גשר בין ניגודים — חיים", ratio: "2.2", skew: "0°", desc: "החית — שני עמודים ועליהם גג. החיבור מדגיש את הפתח." },
  "ט": { quote: "סלסול פנימה, עגינות", ratio: "1.9", skew: "5°", desc: "הטית — צורה סגורה עם קו פנימי. חוזר לתוך עצמו." },
  "י": { quote: "הקטנה מכולן, ובה הכל מתחיל", ratio: "0.4", skew: "0°", desc: "היוד — נקודה עם זנב. הקטנה ביותר ובעלת הכוח הגדול ביותר." },
  "כ": { quote: "כף יד פתוחה, קבלה ונתינה", ratio: "1.7", skew: "4°", desc: "הכף מתכופפת שמאלה — צורה של כפיפה ורכות." },
  "ל": { quote: "מגדל המתנשא, הגבוהה בכולן", ratio: "1.3", skew: "2°", desc: "הלמד היא האות הגבוהה ביותר — בעלת עמוד עם ראש מוגבה." },
  "מ": { quote: "מים, גל, תנועה ועומק שאין לו קצה", ratio: "2.5", skew: "0°", desc: "המם הסגורה — ריבוע כמעט מושלם עם פינות מעוגלות בחלקן." },
  "נ": { quote: "נפש, גמישות, מתכופף ואינו נשבר", ratio: "1.6", skew: "3°", desc: "הנון — ראש עם קו ישר. הנון הסופית יורדת מתחת לשורה." },
  "ס": { quote: "עיגול שלם, חיבוק, גבול שמגן", ratio: "2.0", skew: "0°", desc: "הסמך — עיגול כמעט מושלם. הסגירה מסמלת הגנה." },
  "ע": { quote: "הרואה ונראית, עין פתוחה לעולם", ratio: "2.4", skew: "6°", desc: "העין — שתי קווים נפגשים בפינה, כמו עין הצופה החוצה." },
  "פ": { quote: "דיבור, יצירה, פותחת עולם", ratio: "2.1", skew: "4°", desc: "הפה — כף עם ראש ייחודי. הפה הסופית פתוחה למטה." },
  "צ": { quote: "צדיק, עוגן, שלוש נקודות תמיכה", ratio: "2.3", skew: "2°", desc: "הצדי — שתי קרניים עולות משתי רגליים. יציבות ועוצמה." },
  "ק": { quote: "יורד מתחת לשורה, נוגע בעולם שמתחת", ratio: "1.8", skew: "1°", desc: "הקוף — ריש עם רגל ארוכה היורדת. אחת מהאותיות ה'תלויות'." },
  "ר": { quote: "ראש, עמוד שנשען ימינה, תנועה קדימה", ratio: "1.5", skew: "0°", desc: "הריש — ריבוע פתוח עם קו ישר יורד. פשטות ובהירות." },
  "ש": { quote: "שלהבת, שלוש לשונות אש, שלמות בשלישי", ratio: "2.8", skew: "0°", desc: "השין — שלושה ראשים. שלמות ורוחניות טמונים בשלישיות." },
  "ת": { quote: "חתימה, סוף וגם תחילה חדשה", ratio: "2.6", skew: "0°", desc: "התיו — שתי רגליים חזקות. החתימה של הא׳-ב׳ ותחילת הסיפור הבא." },
};

export default function SanctumPage() {
  const [selectedLetter, setSelectedLetter] = useState("א");
  const [weight, setWeight] = useState(900);
  const [width, setWidth] = useState(100);
  const [showInfo, setShowInfo] = useState(false);

  const meta = letterMeta[selectedLetter] ?? letterMeta["א"];

  return (
    <div dir="rtl" lang="he" style={{ background: "#131313", color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", minHeight: "100dvh", display: "flex", flexDirection: "column" }}>

      {/* ═══ HEADER ═══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", background: "#0e0e0e", borderBottom: "1px solid rgba(242,202,80,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem" }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: "1.4rem", color: "#f2ca50", textDecoration: "none" }}>אֶלֶף</Link>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4d4635", textTransform: "uppercase" }}>קדש הקדשים</span>
        <button onClick={() => setShowInfo(!showInfo)} style={{ background: "transparent", border: "none", cursor: "pointer", color: showInfo ? "#f2ca50" : "#4d4635", padding: "0.4rem" }}>
          <span className="material-symbols-outlined" style={{ direction: "ltr", fontSize: "20px" }}>info</span>
        </button>
      </header>

      {/* ═══ MAIN GLYPH DISPLAY ═══ */}
      <div style={{ position: "sticky", top: "56px", zIndex: 50, background: "#131313", borderBottom: "1px solid rgba(242,202,80,0.06)", minHeight: "42vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

        {/* Background monolith */}
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", pointerEvents: "none" }}>
          <span style={{ fontSize: "55vw", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.04)", color: "transparent", lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif", userSelect: "none" }}>
            {selectedLetter}
          </span>
        </div>

        {/* Technical annotation lines */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
          {/* top-right diagonal */}
          <div style={{ position: "absolute", top: "18%", right: "12%", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
            <span style={{ fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.14em", color: "#f2ca50", background: "#131313", padding: "2px 6px" }}>זווית</span>
            <div style={{ width: "48px", height: "1px", background: "repeating-linear-gradient(90deg,#f2ca50 0,#f2ca50 4px,transparent 4px,transparent 8px)", transform: "rotate(-38deg)", transformOrigin: "right center" }} />
          </div>
          {/* bottom-left */}
          <div style={{ position: "absolute", bottom: "18%", left: "12%", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "4px" }}>
            <div style={{ width: "48px", height: "1px", background: "repeating-linear-gradient(90deg,#f2ca50 0,#f2ca50 4px,transparent 4px,transparent 8px)" }} />
            <span style={{ fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.14em", color: "#f2ca50", background: "#131313", padding: "2px 6px" }}>קו</span>
          </div>
          {/* right mid */}
          <div style={{ position: "absolute", top: "48%", right: "6%", display: "flex", alignItems: "center", gap: "4px" }}>
            <span style={{ fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.14em", color: "#f2ca50", background: "#131313", padding: "2px 6px" }}>משקל</span>
            <div style={{ width: "28px", height: "1px", background: "repeating-linear-gradient(90deg,#f2ca50 0,#f2ca50 4px,transparent 4px,transparent 8px)" }} />
          </div>
        </div>

        {/* The letter itself */}
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
          <span style={{
            fontSize: "clamp(7rem, 28vw, 22rem)",
            fontWeight: weight,
            WebkitTextStroke: "1.5px rgba(242,202,80,0.6)",
            color: "transparent",
            lineHeight: 1,
            fontFamily: "'Space Grotesk','Assistant',sans-serif",
            transform: `scaleX(${width / 100})`,
            display: "block",
            transition: "all 0.15s",
          }}>
            {selectedLetter}
          </span>

          {/* Info overlay */}
          {showInfo && (
            <div style={{ position: "absolute", bottom: 0, right: 0, left: 0, background: "rgba(14,14,14,0.92)", padding: "1rem 1.25rem", backdropFilter: "blur(8px)" }}>
              <p style={{ fontSize: "0.78rem", fontStyle: "italic", lineHeight: 1.7, color: "#d0c5af", marginBottom: "0.5rem" }}>
                &ldquo;{meta.quote}&rdquo;
              </p>
              <p style={{ fontSize: "0.72rem", lineHeight: 1.6, color: "#99907c" }}>{meta.desc}</p>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "2rem", marginTop: "0.75rem", paddingBottom: "0.75rem" }}>
          {[["יחס", meta.ratio], ["סטייה", meta.skew], ["משקל", weight], ["רוחב", `${width}%`]].map(([k, v]) => (
            <div key={k} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.5rem", color: "#4d4635", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>{k}</div>
              <div style={{ fontSize: "0.75rem", color: "#f2ca50", fontWeight: 800 }}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ CONTROLS + LETTER PICKER ═══ */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem 1.25rem 7rem" }}>

        {/* Sliders */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem 2rem", marginBottom: "2rem" }}>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#99907c" }}>משקל</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#f2ca50" }}>{weight}</span>
            </div>
            <input type="range" min={100} max={900} step={100} value={weight} onChange={(e) => setWeight(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#99907c" }}>רוחב</span>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#f2ca50" }}>{width}%</span>
            </div>
            <input type="range" min={50} max={160} value={width} onChange={(e) => setWidth(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(242,202,80,0.06)", marginBottom: "1.5rem" }} />

        {/* Letter picker */}
        <div style={{ marginBottom: "1rem" }}>
          <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#4d4635", marginBottom: "0.9rem" }}>בחר אות</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "2px" }}>
            {hebrewLetters.map((l) => (
              <button
                key={l}
                onClick={() => setSelectedLetter(l)}
                style={{
                  background: selectedLetter === l ? "#f2ca50" : "#1c1b1b",
                  border: "none",
                  aspectRatio: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk','Assistant',sans-serif",
                  color: selectedLetter === l ? "#1a1200" : "#e5e2e1",
                  cursor: "pointer",
                  transition: "all 0.12s",
                  WebkitTextStroke: selectedLetter === l ? "none" : "none",
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Metadata box */}
        <div style={{ background: "#1c1b1b", padding: "1.25rem", borderRight: "3px solid rgba(242,202,80,0.2)", marginTop: "1.5rem" }}>
          <p style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#4d4635", marginBottom: "0.7rem" }}>מטא-דאטה</p>
          <p style={{ fontSize: "0.82rem", fontStyle: "italic", lineHeight: 1.75, color: "#d0c5af", marginBottom: "0.8rem" }}>
            &ldquo;{meta.quote}&rdquo;
          </p>
          <p style={{ fontSize: "0.75rem", lineHeight: 1.65, color: "#99907c" }}>{meta.desc}</p>
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem", paddingTop: "0.8rem", borderTop: "1px solid rgba(242,202,80,0.08)" }}>
            <div><p style={{ fontSize: "1.1rem", fontWeight: 900, color: "#f2ca50" }}>{meta.ratio}</p><p style={{ fontSize: "0.52rem", color: "#4d4635", letterSpacing: "0.14em" }}>יחס</p></div>
            <div><p style={{ fontSize: "1.1rem", fontWeight: 900, color: "#f2ca50" }}>{meta.skew}</p><p style={{ fontSize: "0.52rem", color: "#4d4635", letterSpacing: "0.14em" }}>סטייה</p></div>
            <div><p style={{ fontSize: "1.1rem", fontWeight: 900, color: "#f2ca50" }}>{selectedLetter}</p><p style={{ fontSize: "0.52rem", color: "#4d4635", letterSpacing: "0.14em" }}>גליף</p></div>
          </div>
        </div>

        {/* Coordinate decoration */}
        <div style={{ marginTop: "1rem", display: "flex", gap: "1.5rem" }}>
          <p style={{ fontSize: "0.58rem", fontFamily: "monospace", color: "#4d4635", letterSpacing: "0.08em" }}>קואורד: 32.0853° צ</p>
          <p style={{ fontSize: "0.58rem", fontFamily: "monospace", color: "#4d4635", letterSpacing: "0.08em" }}>גרסה: ארכיון_3</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
