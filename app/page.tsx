import Link from "next/link";
import BottomNav from "./components/BottomNav";

const hebrewAlphabet = "א ב ג ד ה ו ז ח ט י כ ל מ נ ס ע פ צ ק ר ש ת";

const navCards = [
  {
    href: "/gallery",
    letter: "ה",
    title: "היכל",
    subtitle: "גלריית הפונטים",
    desc: "תערוכת הפונטים העבריים",
  },
  {
    href: "/lab",
    letter: "מ",
    title: "מעבדה",
    subtitle: "מעצב האותיות",
    desc: "כלי עיצוב טיפוגרפי",
  },
  {
    href: "/chronicles",
    letter: "ר",
    title: "ארכיון",
    subtitle: "ארכיון המעצבים",
    desc: "היסטוריה של האות העברית",
  },
  {
    href: "/sanctum",
    letter: "ק",
    title: "מקדש",
    subtitle: "אנטומיית האות",
    desc: "חקר פנימי של הצורה",
  },
];

export default function Home() {
  const ticker = Array(6).fill(hebrewAlphabet).join("   ·   ");

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
      {/* Background glyph מ top-right */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "-10vh",
          right: "-5vw",
          fontSize: "50vw",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.08)",
          color: "transparent",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        מ
      </div>

      {/* Background glyph ת bottom-left */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          bottom: "-8vh",
          left: "-4vw",
          fontSize: "40vw",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.06)",
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

      {/* Inline keyframes */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 28s linear infinite;
          display: inline-flex;
          white-space: nowrap;
          will-change: transform;
        }
        .nav-card:hover .nav-card-arrow {
          transform: translateX(-6px);
        }
        .cta-gold:hover {
          opacity: 0.88;
        }
        .cta-border:hover {
          background: rgba(242,202,80,0.06);
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Top header bar */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 2.5rem 1rem",
          }}
        >
          <span
            style={{
              fontWeight: 800,
              fontSize: "0.85rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#e5e2e1",
            }}
          >
            Hebrew Font Temple
          </span>
          <span
            style={{
              fontWeight: 500,
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              color: "#99907c",
            }}
          >
            Est. 2024
          </span>
        </header>

        {/* Hero */}
        <section
          style={{
            padding: "6rem 2.5rem 4rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          {/* Eyebrow */}
          <p
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#99907c",
              marginBottom: "2rem",
            }}
          >
            בית מקדש דיגיטלי לאות העברית
          </p>

          {/* Main title glyph-mask */}
          <h1
            style={{
              fontSize: "clamp(4rem,18vw,16rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              WebkitTextStroke: "1.5px rgba(242,202,80,0.35)",
              color: "transparent",
              fontFamily: "'Space Grotesk', sans-serif",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            מקדש
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "clamp(1.2rem,3vw,2.2rem)",
              fontWeight: 700,
              color: "#f2ca50",
              marginBottom: "2.5rem",
              letterSpacing: "0.06em",
            }}
          >
            הפונט העברי
          </p>

          {/* Description */}
          <p
            style={{
              maxWidth: "480px",
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "#d0c5af",
              marginBottom: "3rem",
            }}
          >
            בית מקדש דיגיטלי לאות העברית — מהיתדות של עולם עתיק ועד לעיצוב הגרפי של המאה העשרים ואחת. חוקרים, מעצבים, ומגדירים מחדש את צורת האות.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/gallery"
              className="cta-gold"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 2rem",
                background: "linear-gradient(135deg, #f2ca50, #d4af37)",
                color: "#1a1200",
                fontWeight: 800,
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
            >
              כנס להיכל
              <span className="material-symbols-outlined" style={{ fontSize: "18px", direction: "ltr" }}>
                arrow_back
              </span>
            </Link>

            <Link
              href="/lab"
              className="cta-border"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.85rem 2rem",
                border: "1px solid rgba(242,202,80,0.4)",
                color: "#f2ca50",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
            >
              מעבדה
              <span className="material-symbols-outlined" style={{ fontSize: "18px", direction: "ltr" }}>
                science
              </span>
            </Link>
          </div>
        </section>

        {/* Alphabet ticker */}
        <div
          style={{
            overflow: "hidden",
            borderTop: "1px solid rgba(242,202,80,0.08)",
            borderBottom: "1px solid rgba(242,202,80,0.08)",
            padding: "1.1rem 0",
            background: "#0e0e0e",
            marginBottom: "5rem",
          }}
        >
          <div className="marquee-track">
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.3em",
                color: "rgba(242,202,80,0.35)",
                paddingLeft: "4rem",
              }}
            >
              {ticker}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {ticker}
            </span>
          </div>
        </div>

        {/* Navigation cards grid */}
        <section
          style={{
            padding: "0 2.5rem 6rem",
            maxWidth: "1400px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1px",
              background: "rgba(242,202,80,0.06)",
            }}
          >
            {navCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="nav-card"
                style={{
                  display: "block",
                  position: "relative",
                  background: "#1c1b1b",
                  padding: "2.5rem 2rem",
                  textDecoration: "none",
                  overflow: "hidden",
                  transition: "background 0.2s",
                  minHeight: "240px",
                }}
              >
                {/* Big watermark letter */}
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    bottom: "-0.5rem",
                    left: "1rem",
                    fontSize: "9rem",
                    fontWeight: 900,
                    WebkitTextStroke: "1px rgba(242,202,80,0.07)",
                    color: "transparent",
                    lineHeight: 1,
                    fontFamily: "'Space Grotesk', sans-serif",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {card.letter}
                </span>

                <div style={{ position: "relative", zIndex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "#99907c",
                      marginBottom: "1.2rem",
                    }}
                  >
                    {card.subtitle}
                  </p>

                  <h3
                    style={{
                      fontSize: "2.4rem",
                      fontWeight: 900,
                      color: "#e5e2e1",
                      marginBottom: "0.7rem",
                      lineHeight: 1,
                    }}
                  >
                    {card.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#d0c5af",
                      marginBottom: "2rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {card.desc}
                  </p>

                  <span
                    className="nav-card-arrow"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      color: "#f2ca50",
                      transition: "transform 0.2s",
                    }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: "16px", direction: "ltr" }}>
                      arrow_back
                    </span>
                    כנס
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Footer credit */}
        <footer
          style={{
            textAlign: "center",
            padding: "2rem",
            paddingBottom: "7rem",
            borderTop: "1px solid rgba(242,202,80,0.06)",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              color: "#4d4635",
              letterSpacing: "0.14em",
              fontWeight: 500,
            }}
          >
            Designed &amp; Built by{" "}
            <span style={{ color: "#99907c" }}>אורי גליקמן</span>
          </p>
        </footer>
      </div>

      <BottomNav />
    </div>
  );
}
