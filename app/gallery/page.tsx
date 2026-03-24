"use client";

import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

export default function GalleryPage() {
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
      <TopBar section="The Gallery" />

      {/* Background glyph ה */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          top: "-8vh",
          left: "-4vw",
          fontSize: "55vw",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.04)",
          color: "transparent",
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 900,
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.04,
        }}
      >
        ה
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingTop: "6rem", paddingBottom: "8rem" }}>

        {/* Hero */}
        <section style={{ padding: "3rem 2.5rem 4rem", maxWidth: "1400px", margin: "0 auto" }}>
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
            אוסף פונטים עבריים
          </p>

          <h2
            style={{
              fontSize: "clamp(3rem,10vw,8rem)",
              fontWeight: 900,
              lineHeight: 0.9,
              marginBottom: "2rem",
              color: "#e5e2e1",
              letterSpacing: "-0.02em",
            }}
          >
            היכל{" "}
            <span style={{ color: "#f2ca50" }}>הפונטים</span>
          </h2>

          <p
            style={{
              maxWidth: "520px",
              fontSize: "0.92rem",
              lineHeight: 1.85,
              color: "#d0c5af",
            }}
          >
            מבחר קורטוראלי של הפונטים העבריים המשפיעים ביותר בהיסטוריה — מהדפוס המסורתי ועד לניסויים האוונגרדיים של ימינו.
          </p>
        </section>

        {/* Search + filters */}
        <div
          style={{
            padding: "0 2.5rem 3rem",
            maxWidth: "1400px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          {/* Search bar */}
          <div style={{ position: "relative", maxWidth: "420px" }}>
            <span
              className="material-symbols-outlined"
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                fontSize: "18px",
                color: "#99907c",
                direction: "ltr",
              }}
            >
              search
            </span>
            <input
              type="text"
              placeholder="חפש פונט..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(153,144,124,0.4)",
                padding: "0.7rem 2rem 0.7rem 0",
                fontSize: "0.9rem",
                color: "#e5e2e1",
                fontFamily: "'Space Grotesk', sans-serif",
                outline: "none",
              }}
            />
          </div>

          {/* Filter buttons */}
          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            {[
              { label: "הכל", active: true },
              { label: "מסורתי", active: false },
              { label: "מודרני", active: false },
              { label: "ניסיוני", active: false },
            ].map((f) => (
              <button
                key={f.label}
                style={{
                  padding: "0.4rem 1.1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: f.active ? "#f2ca50" : "transparent",
                  color: f.active ? "#1a1200" : "#99907c",
                  border: f.active ? "none" : "1px solid rgba(153,144,124,0.3)",
                  cursor: "pointer",
                  transition: "all 0.18s",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
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

          {/* Card 1: Frank-Rühl — col-span 8 */}
          <div
            style={{
              gridColumn: "span 8",
              background: "#1c1b1b",
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "340px",
            }}
          >
            {/* Watermark */}
            <span
              aria-hidden
              style={{
                position: "absolute",
                bottom: "-2rem",
                left: "-1rem",
                fontSize: "18rem",
                fontWeight: 900,
                WebkitTextStroke: "1px rgba(242,202,80,0.06)",
                color: "transparent",
                lineHeight: 1,
                fontFamily: "serif",
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              א
            </span>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "1.5rem",
                  textTransform: "uppercase",
                }}
              >
                01 / מסורתי
              </p>

              <h3
                style={{
                  fontSize: "clamp(2rem,5vw,4rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                פרנק-ריהל
              </h3>

              <p
                style={{
                  maxWidth: "380px",
                  fontSize: "0.88rem",
                  lineHeight: 1.8,
                  color: "#d0c5af",
                  marginBottom: "2.5rem",
                }}
              >
                עוצב ב-1908 בלייפציג על ידי רפאל פרנק. הפונט הדפוסי העברי הנפוץ ביותר בעולם — משמש בספרי תנ"ך, ספרות ומסמכים רשמיים למשך יותר ממאה שנה.
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
                חקור את האות
                <span className="material-symbols-outlined" style={{ fontSize: "16px", direction: "ltr" }}>
                  arrow_back
                </span>
              </button>
            </div>
          </div>

          {/* Card 2: Chaim — col-span 4 */}
          <div
            style={{
              gridColumn: "span 4",
              background: "#353534",
              padding: "2.5rem 2rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "340px",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#f2ca50",
                marginBottom: "1.2rem",
                textTransform: "uppercase",
              }}
            >
              02 / מודרני
            </p>

            <h3
              style={{
                fontSize: "2.4rem",
                fontWeight: 900,
                color: "#e5e2e1",
                marginBottom: "0.8rem",
                lineHeight: 1,
              }}
            >
              חיים
            </h3>

            <p
              style={{
                fontSize: "0.83rem",
                lineHeight: 1.75,
                color: "#d0c5af",
                marginBottom: "1.5rem",
              }}
            >
              עיצוב עברי בהשראת הבאוהאוס — צורות גיאומטריות נקיות עם אופי לאומי מודרני.
            </p>

            {/* Big letter */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "0.5rem",
                fontSize: "10rem",
                fontWeight: 900,
                color: "#f2ca50",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                opacity: 0.12,
                userSelect: "none",
                pointerEvents: "none",
              }}
            >
              ח
            </div>
          </div>

          {/* Card 3: David — col-span 4 */}
          <div
            style={{
              gridColumn: "span 4",
              background: "#201f1f",
              padding: "2.5rem 2rem",
              position: "relative",
              overflow: "hidden",
              borderRight: "4px solid #f2ca50",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#99907c",
                marginBottom: "1rem",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              03 / אלגנטי
            </p>

            {/* Center glyph-mask letter */}
            <div
              style={{
                fontSize: "10rem",
                fontWeight: 900,
                WebkitTextStroke: "1.5px rgba(242,202,80,0.5)",
                color: "transparent",
                lineHeight: 1,
                fontFamily: "'Space Grotesk', sans-serif",
                userSelect: "none",
              }}
            >
              ד
            </div>

            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#e5e2e1",
                marginTop: "0.8rem",
                lineHeight: 1,
              }}
            >
              דוד
            </h3>
          </div>

          {/* Card 4: Narkiss — col-span 8 */}
          <div
            style={{
              gridColumn: "span 8",
              background: "#2a2a2a",
              padding: "2.5rem 3rem",
              position: "relative",
              overflow: "hidden",
              minHeight: "280px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "2rem",
              alignItems: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "#f2ca50",
                  marginBottom: "1.2rem",
                  textTransform: "uppercase",
                }}
              >
                04 / ניסיוני
              </p>

              <h3
                style={{
                  fontSize: "clamp(1.8rem,3.5vw,3rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  marginBottom: "1rem",
                  lineHeight: 1,
                }}
              >
                נרקיס
              </h3>

              <p
                style={{
                  fontSize: "0.86rem",
                  lineHeight: 1.8,
                  color: "#d0c5af",
                  maxWidth: "360px",
                }}
              >
                צבי נרקיס יצר פונט שמשלב אקספרסיביות אישית עם קריאות. נרקיס בלוק הפך לסמל של הטיפוגרפיה הישראלית המודרנית.
              </p>
            </div>

            {/* Letter tiles */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              {["נ", "ר", "ק"].map((l) => (
                <div
                  key={l}
                  style={{
                    width: "60px",
                    height: "60px",
                    background: "#131313",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    fontWeight: 900,
                    color: "#f2ca50",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
          </div>

          {/* Card 5: Letter grid row — col-span 12 */}
          <div
            style={{
              gridColumn: "span 12",
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2px",
              background: "rgba(242,202,80,0.04)",
            }}
          >
            {["ל", "פ", "צ", "ת"].map((letter) => (
              <div
                key={letter}
                style={{
                  background: "#1c1b1b",
                  aspectRatio: "1",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "clamp(3rem,6vw,6rem)",
                  fontWeight: 900,
                  color: "#e5e2e1",
                  fontFamily: "'Space Grotesk', sans-serif",
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                  maxHeight: "160px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#f2ca50";
                  (e.currentTarget as HTMLDivElement).style.color = "#1a1200";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#1c1b1b";
                  (e.currentTarget as HTMLDivElement).style.color = "#e5e2e1";
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
