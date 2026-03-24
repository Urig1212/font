import Link from "next/link";
import BottomNav from "../components/BottomNav";

const designers = [
  {
    number: "01",
    name: "אנרי פרידלנדר",
    latin: "Henri Friedlaender",
    font: "הדסה / HADASSAH",
    years: "1903 — 1990",
    origin: "גרמניה ← ירושלים",
    letter: "ה",
    desc: "עיצב את פונט הדסה במשך למעלה משלושים שנה — עבודה של חיים שלמים. פרידלנדר, יליד גרמניה, עלה לישראל ב-1950 ושם הקדיש את יצירתו לחידוש האות העברית. זכה בפרס גוטנברג בשנת 1971.",
    quote: null,
    highlight: true,
  },
  {
    number: "02",
    name: "צבי נרקיס",
    latin: "Zvi Narkiss",
    font: "נרקיס בלוק / NARKISS BLOCK",
    years: "1921 — 1994",
    origin: "ירושלים",
    letter: "נ",
    desc: "תכנן את הפונטים הנפוצים ביותר בישראל. נרקיס בלוק, שפותח בשנות ה-60, הפך לסמל הטיפוגרפי של המדינה הצעירה — ולשפה החזותית של עיתוני ישראל.",
    quote: null,
    highlight: false,
  },
  {
    number: "03",
    name: "עודד עזר",
    latin: "Oded Ezer",
    font: "הייבריד / HYBRID",
    years: "1972 —",
    origin: "תל-אביב",
    letter: "ע",
    desc: "עבודתו נמצאת ב-MoMA בניו-יורק ובאוספים בינלאומיים מובילים. הוא שובר את גבולות האות — מייצר יצורים טיפוגרפיים שחיים בין שפה, אמנות, וביולוגיה.",
    quote: "האות היא יצור חי",
    highlight: false,
  },
  {
    number: "04",
    name: "רפאל פרנק",
    latin: "Rafael Frank",
    font: "פרנק-ריהל",
    years: "1867 — 1933",
    origin: "לייפציג, גרמניה",
    letter: "פ",
    desc: "יצר את פרנק-ריהל בלייפציג ב-1908 — פונט שהפך לסטנדרט לדפוס ספרים עבריים בכל העולם. עיצוב שמשלב את האלגנטיה הקלאסית עם הרוח של האות העברית.",
    quote: null,
    highlight: false,
  },
  {
    number: "05",
    name: "טוביה פרידמן",
    latin: "Tuvia Friedman",
    font: "דוד / DAVID",
    years: "1929 — 2007",
    origin: "ישראל",
    letter: "ד",
    desc: "פיתח את פונט דוד שנישא בין מסורת לחדשנות. פונט דוד, בעל הסריפים העדינים, מייצג את רוח הרנסאנס הטיפוגרפי הישראלי.",
    quote: null,
    highlight: false,
  },
];

export default function ChroniclesPage() {
  return (
    <div dir="rtl" lang="he" style={{ background: "#131313", color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", minHeight: "100dvh" }}>

      {/* ═══ FIXED HEADER ═══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", background: "#0e0e0e", borderBottom: "1px solid rgba(242,202,80,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem" }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: "1.4rem", color: "#f2ca50", textDecoration: "none" }}>אֶלֶף</Link>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4d4635", textTransform: "uppercase" }}>THE CHRONICLES</span>
      </header>

      {/* Background glyphs */}
      <div aria-hidden style={{ position: "fixed", top: "-10vh", left: "-5vw", fontSize: "50vw", lineHeight: 1, WebkitTextStroke: "1px rgba(242,202,80,0.035)", color: "transparent", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>א</div>
      <div aria-hidden style={{ position: "fixed", bottom: "-8vh", right: "-4vw", fontSize: "38vw", lineHeight: 1, WebkitTextStroke: "1px rgba(242,202,80,0.025)", color: "transparent", fontFamily: "'Space Grotesk',sans-serif", fontWeight: 900, userSelect: "none", pointerEvents: "none", zIndex: 0 }}>ת</div>

      <div style={{ position: "relative", zIndex: 1, paddingTop: "56px" }}>

        {/* ═══ HERO ═══ */}
        <section style={{ padding: "3rem 1.5rem 3.5rem" }}>
          <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#4d4635", marginBottom: "1rem" }}>
            היסטוריה של האות
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "clamp(3rem,12vw,9rem)", fontWeight: 900, lineHeight: 0.88, color: "#f2ca50", letterSpacing: "-0.02em" }}>
              ארכיון
            </h1>
            <span style={{ background: "#f2ca50", color: "#1a1200", fontWeight: 800, fontSize: "0.78rem", letterSpacing: "0.14em", padding: "0.35rem 0.9rem", textTransform: "uppercase" }}>
              המעצבים
            </span>
          </div>
          <p style={{ maxWidth: "480px", fontSize: "0.88rem", lineHeight: 1.85, color: "#d0c5af" }}>
            חמישה מעצבים שעיצבו את דמות האות העברית בעולם המודרני. מהדפוס הגרמני ועד לניסויים הדיגיטליים.
          </p>
        </section>

        {/* ═══ DESIGNER CARDS ═══ */}
        <div style={{ padding: "0 0 7rem" }}>
          {designers.map((d, i) => (
            <DesignerCard key={d.number} designer={d} index={i} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

function DesignerCard({ designer: d, index: i }: { designer: typeof designers[0]; index: number }) {
  const isEven = i % 2 === 0;
  const bgColors = ["#1c1b1b", "#201f1f", "#353534", "#1c1b1b", "#2a2a2a"];
  const bg = bgColors[i] || "#1c1b1b";

  return (
    <article
      style={{
        background: bg,
        padding: "2.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        borderBottom: "2px solid #131313",
        borderRight: i === 1 ? "4px solid #f2ca50" : "none",
        // Offset on larger screens — done via margin
        marginRight: i === 1 || i === 4 ? "0" : "0",
      }}
    >
      {/* Number watermark */}
      <span aria-hidden style={{ position: "absolute", bottom: "-1rem", left: "0.5rem", fontSize: "10rem", fontWeight: 900, color: "rgba(242,202,80,0.04)", lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif", userSelect: "none", pointerEvents: "none" }}>
        {d.number}
      </span>

      {/* Large letter watermark */}
      <span aria-hidden style={{ position: "absolute", top: "50%", right: "1rem", transform: "translateY(-50%)", fontSize: "clamp(5rem,18vw,12rem)", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.08)", color: "transparent", lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif", userSelect: "none", pointerEvents: "none" }}>
        {d.letter}
      </span>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "560px" }}>
        {/* Archive number */}
        <p style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", color: "#f2ca50", marginBottom: "0.4rem", textTransform: "uppercase" }}>
          Archive No. {d.number}
        </p>

        {/* Font name */}
        <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4d4635", marginBottom: "0.75rem", textTransform: "uppercase" }}>
          {d.font}
        </p>

        {/* Quote (if any) */}
        {d.quote && (
          <blockquote style={{ fontSize: "clamp(1.1rem,3.5vw,2rem)", fontWeight: 900, fontStyle: "italic", color: "rgba(242,202,80,0.75)", marginBottom: "0.75rem", lineHeight: 1.2 }}>
            &ldquo;{d.quote}&rdquo;
          </blockquote>
        )}

        {/* Designer name */}
        <h2 style={{ fontSize: "clamp(1.6rem,5vw,2.8rem)", fontWeight: 900, color: "#e5e2e1", marginBottom: "0.3rem", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
          {d.name}
        </h2>

        {/* Latin name + years */}
        <p style={{ fontSize: "0.68rem", color: "#4d4635", marginBottom: "0.3rem", letterSpacing: "0.1em" }}>
          {d.latin}
        </p>
        <p style={{ fontSize: "0.62rem", color: "#4d4635", marginBottom: "1.25rem", letterSpacing: "0.08em", fontFamily: "monospace" }}>
          {d.years} · {d.origin}
        </p>

        {/* Description */}
        <p style={{ fontSize: "0.86rem", lineHeight: 1.82, color: "#d0c5af" }}>
          {d.desc}
        </p>
      </div>
    </article>
  );
}
