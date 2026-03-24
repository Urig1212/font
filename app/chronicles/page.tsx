import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const designers = [
  {
    number: "01",
    name: "אנרי פרידלנדר",
    latin: "Henri Friedlaender",
    font: "הדסה / HADASSAH",
    span: "span 8",
    start: undefined,
    textAlign: "right" as const,
    borderRight: false,
    desc: "עיצב את פונט הדסה במשך למעלה משלושים שנה — עבודה של חיים שלמים. פרידלנדר, יליד גרמניה, עלה לישראל ב-1950 ושם הקדיש את יצירתו לחידוש האות העברית. זכה בפרס גוטנברג בשנת 1971.",
  },
  {
    number: "02",
    name: "צבי נרקיס",
    latin: "Zvi Narkiss",
    font: "נרקיס בלוק / NARKISS BLOCK",
    span: "span 8",
    start: "5",
    textAlign: "left" as const,
    borderRight: true,
    desc: "צבי נרקיס תכנן את הפונטים הנפוצים ביותר בישראל. נרקיס בלוק, שפותח בשנות ה-60, הפך לסמל הטיפוגרפי של המדינה הצעירה — ולשפה החזותית של עיתוני ישראל.",
  },
  {
    number: "03",
    name: "עודד עזר",
    latin: "Oded Ezer",
    font: "הייבריד / HYBRID",
    span: "span 10",
    start: "2",
    textAlign: "right" as const,
    borderRight: false,
    desc: 'עבודתו של עודד עזר נמצאת ב-MoMA בניו-יורק ובאוספים בינלאומיים מובילים. הוא שובר את גבולות האות — מייצר יצורים טיפוגרפיים שחיים בין שפה, אמנות, וביולוגיה.',
    quote: "האות היא יצור חי",
    hasButton: true,
  },
  {
    number: "04",
    name: "רפאל פרנק",
    latin: "Rafael Frank",
    font: "פרנק-ריהל",
    span: "span 6",
    start: undefined,
    textAlign: "right" as const,
    borderRight: false,
    desc: "יצר את פרנק-ריהל בלייפציג ב-1908 — פונט שהפך לסטנדרט לדפוס ספרים עבריים בכל העולם. עיצוב שמשלב את האלגנטיה הקלאסית עם הרוח של האות העברית.",
  },
  {
    number: "05",
    name: "טוביה פרידמן",
    latin: "Tuvia Friedman",
    font: "דוד / DAVID",
    span: "span 6",
    start: "7",
    textAlign: "right" as const,
    borderRight: false,
    desc: "פיתח את פונט דוד שנישא בין מסורת לחדשנות. פונט דוד, בעל הסריפים העדינים, מייצג את רוח הרנסאנס הטיפוגרפי הישראלי.",
  },
];

export default function ChroniclesPage() {
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
      <TopBar section="Chronicles" />

      {/* Fixed background glyphs */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "-10vh",
          left: "-5vw",
          fontSize: "50vw",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.05)",
          color: "transparent",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        א
      </div>

      <div
        aria-hidden
        style={{
          position: "fixed",
          bottom: "-8vh",
          right: "-4vw",
          fontSize: "42vw",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.04)",
          color: "transparent",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        ת
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingTop: "6rem", paddingBottom: "8rem" }}>

        {/* Hero */}
        <section style={{ padding: "3rem 2.5rem 5rem", maxWidth: "1400px", margin: "0 auto" }}>
          <p
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#99907c",
              marginBottom: "1.5rem",
            }}
          >
            היסטוריה של האות
          </p>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
            <h1
              style={{
                fontSize: "clamp(4rem,12vw,10rem)",
                fontWeight: 900,
                lineHeight: 0.88,
                color: "#f2ca50",
                letterSpacing: "-0.02em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ארכיון
            </h1>
            <span
              style={{
                display: "inline-block",
                background: "#f2ca50",
                color: "#1a1200",
                fontWeight: 800,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                padding: "0.4rem 1rem",
                textTransform: "uppercase",
                alignSelf: "center",
              }}
            >
              המעצבים
            </span>
          </div>

          <p
            style={{
              maxWidth: "520px",
              fontSize: "0.95rem",
              lineHeight: 1.85,
              color: "#d0c5af",
            }}
          >
            חמישה מעצבים שעיצבו את דמות האות העברית בעולם המודרני. מהדפוס הגרמני של ראשית המאה ועד לניסויים הדיגיטליים הנועזים של ימינו.
          </p>
        </section>

        {/* Timeline Grid */}
        <div
          style={{
            padding: "0 2.5rem",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2px",
            background: "rgba(242,202,80,0.04)",
          }}
        >

          {/* Designer 1 — Henri Friedlaender, col-span 8 */}
          <div
            style={{
              gridColumn: "span 8",
              background: "#1c1b1b",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "320px",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-2rem",
                left: "1rem",
                fontSize: "16rem",
                fontWeight: 900,
                color: "rgba(242,202,80,0.04)",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              01
            </span>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {designers[0].font}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3.2rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                }}
              >
                {designers[0].name}
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#99907c",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                {designers[0].latin}
              </p>
              <p
                style={{
                  maxWidth: "420px",
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  color: "#d0c5af",
                }}
              >
                {designers[0].desc}
              </p>
            </div>
          </div>

          {/* Empty right col */}
          <div
            style={{
              gridColumn: "span 4",
              background: "#131313",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "8rem",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(242,202,80,0.1)",
                color: "transparent",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              ה
            </span>
          </div>

          {/* Designer 2 — Zvi Narkiss, col-start 5, col-span 8 */}
          <div
            style={{
              gridColumn: "5 / span 8",
              background: "#2a2a2a",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "300px",
              borderRight: "4px solid #f2ca50",
              textAlign: "left",
              direction: "ltr",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-2rem",
                left: "1rem",
                fontSize: "16rem",
                fontWeight: 900,
                color: "rgba(242,202,80,0.04)",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              02
            </span>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  direction: "rtl",
                }}
              >
                {designers[1].font}
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3.2rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                  direction: "rtl",
                }}
              >
                {designers[1].name}
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#99907c",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                {designers[1].latin}
              </p>
              <p
                style={{
                  maxWidth: "420px",
                  fontSize: "0.88rem",
                  lineHeight: 1.85,
                  color: "#d0c5af",
                  direction: "rtl",
                  textAlign: "right",
                }}
              >
                {designers[1].desc}
              </p>
            </div>
          </div>

          {/* Empty left col for offset */}
          <div
            style={{
              gridColumn: "span 4",
              background: "#131313",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "7rem",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(242,202,80,0.1)",
                color: "transparent",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              נ
            </span>
          </div>

          {/* Designer 3 — Oded Ezer, col-start 2, col-span 10 */}
          <div
            style={{
              gridColumn: "2 / span 10",
              background: "#353534",
              padding: "3.5rem 3rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "340px",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-2rem",
                left: "1rem",
                fontSize: "16rem",
                fontWeight: 900,
                color: "rgba(242,202,80,0.05)",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              03
            </span>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {designers[2].font}
              </p>

              <blockquote
                style={{
                  fontSize: "clamp(1.5rem,3vw,2.5rem)",
                  fontWeight: 900,
                  fontStyle: "italic",
                  color: "rgba(242,202,80,0.7)",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                &ldquo;{designers[2].quote}&rdquo;
              </blockquote>

              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,3rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                }}
              >
                {designers[2].name}
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#99907c",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.1em",
                }}
              >
                {designers[2].latin}
              </p>
              <p
                style={{
                  maxWidth: "560px",
                  fontSize: "0.9rem",
                  lineHeight: 1.85,
                  color: "#d0c5af",
                  marginBottom: "2rem",
                }}
              >
                {designers[2].desc}
              </p>

              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.7rem 1.6rem",
                  background: "transparent",
                  border: "1px solid rgba(242,202,80,0.35)",
                  color: "#f2ca50",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                }}
              >
                לצפייה במיצב
                <span className="material-symbols-outlined" style={{ fontSize: "16px", direction: "ltr" }}>
                  open_in_new
                </span>
              </button>
            </div>
          </div>

          {/* Designer 4 — Rafael Frank, col-span 6 */}
          <div
            style={{
              gridColumn: "span 6",
              background: "#1c1b1b",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "260px",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "0.5rem",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(242,202,80,0.04)",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              04
            </span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {designers[3].font}
              </p>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                }}
              >
                {designers[3].name}
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#99907c",
                  marginBottom: "1.2rem",
                  letterSpacing: "0.1em",
                }}
              >
                {designers[3].latin}
              </p>
              <p
                style={{
                  fontSize: "0.86rem",
                  lineHeight: 1.8,
                  color: "#d0c5af",
                }}
              >
                {designers[3].desc}
              </p>
            </div>
          </div>

          {/* Designer 5 — Tuvia Friedman, col-start 7, col-span 6 */}
          <div
            style={{
              gridColumn: "7 / span 6",
              background: "#201f1f",
              padding: "2.5rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "260px",
            }}
          >
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "0.5rem",
                fontSize: "12rem",
                fontWeight: 900,
                color: "rgba(242,202,80,0.04)",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              05
            </span>
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                }}
              >
                {designers[4].font}
              </p>
              <h2
                style={{
                  fontSize: "2.2rem",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "0.3rem",
                  lineHeight: 1.1,
                }}
              >
                {designers[4].name}
              </h2>
              <p
                style={{
                  fontSize: "0.72rem",
                  color: "#99907c",
                  marginBottom: "1.2rem",
                  letterSpacing: "0.1em",
                }}
              >
                {designers[4].latin}
              </p>
              <p
                style={{
                  fontSize: "0.86rem",
                  lineHeight: 1.8,
                  color: "#d0c5af",
                }}
              >
                {designers[4].desc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
