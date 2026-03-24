"use client";

import { useState } from "react";
import TopBar from "../components/TopBar";
import BottomNav from "../components/BottomNav";

const fontVariants = [
  { name: "Monolithic Sans", hebrewName: "פרנק-ריהל", letter: "א" },
  { name: "Sacred Script", hebrewName: "הדסה", letter: "ה" },
  { name: "Future Block", hebrewName: "נרקיס", letter: "נ" },
];

export default function LabPage() {
  const [weight, setWeight] = useState(900);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [slant, setSlant] = useState(0);
  const [kerning, setKerning] = useState(0);
  const [strokeMod, setStrokeMod] = useState(45);
  const [warpMode, setWarpMode] = useState<"linear" | "organic">("linear");
  const [distortion, setDistortion] = useState<"quiet" | "fractal" | "chaotic">("quiet");
  const [previewText, setPreviewText] = useState("צורה");
  const [selectedFont, setSelectedFont] = useState(0);

  const sliderStyle = {
    width: "100%",
    accentColor: "#f2ca50",
  } as React.CSSProperties;

  const labelStyle: React.CSSProperties = {
    fontSize: "0.65rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#99907c",
    marginBottom: "0.5rem",
    display: "block",
  };

  const valueStyle: React.CSSProperties = {
    fontSize: "0.75rem",
    fontWeight: 800,
    color: "#f2ca50",
    fontFamily: "'Space Grotesk', sans-serif",
  };

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
      }}
    >
      <TopBar section="The Forge" />

      <div
        style={{
          paddingTop: "4rem",
          display: "grid",
          gridTemplateColumns: "320px 1fr 280px",
          minHeight: "100vh",
        }}
        className="max-lg:flex max-lg:flex-col"
      >

        {/* LEFT SIDEBAR */}
        <aside
          style={{
            background: "#0e0e0e",
            padding: "2rem 1.5rem",
            borderLeft: "1px solid rgba(242,202,80,0.06)",
            overflowY: "auto",
            paddingTop: "5rem",
            paddingBottom: "6rem",
          }}
        >
          {/* Title */}
          <div
            style={{
              borderBottom: "2px solid #f2ca50",
              paddingBottom: "1rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 900,
                letterSpacing: "0.1em",
                color: "#e5e2e1",
              }}
            >
              כלים
            </h2>
          </div>

          {/* Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.8rem" }}>

            {/* Weight */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span style={labelStyle}>משקל</span>
                <span style={valueStyle}>{weight}</span>
              </div>
              <input
                type="range"
                min={100}
                max={900}
                step={100}
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            {/* Letter spacing */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span style={labelStyle}>ריווח</span>
                <span style={valueStyle}>{letterSpacing}px</span>
              </div>
              <input
                type="range"
                min={-50}
                max={50}
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            {/* Slant */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span style={labelStyle}>נטייה</span>
                <span style={valueStyle}>{slant}°</span>
              </div>
              <input
                type="range"
                min={-20}
                max={20}
                value={slant}
                onChange={(e) => setSlant(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            {/* Kerning */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span style={labelStyle}>קרנינג</span>
                <span style={valueStyle}>{kerning}</span>
              </div>
              <input
                type="range"
                min={-10}
                max={10}
                value={kerning}
                onChange={(e) => setKerning(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            {/* Stroke modulation */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.6rem" }}>
                <span style={labelStyle}>מודולציית קו</span>
                <span style={valueStyle}>{strokeMod}%</span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={strokeMod}
                onChange={(e) => setStrokeMod(Number(e.target.value))}
                style={sliderStyle}
              />
            </div>

            {/* Warp mode */}
            <div>
              <span style={labelStyle}>מצב עיקול</span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {(["linear", "organic"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setWarpMode(m)}
                    style={{
                      flex: 1,
                      padding: "0.5rem 0",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: "transparent",
                      border: warpMode === m ? "1px solid #f2ca50" : "1px solid rgba(153,144,124,0.25)",
                      color: warpMode === m ? "#f2ca50" : "#99907c",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {m === "linear" ? "ליניארי" : "אורגני"}
                  </button>
                ))}
              </div>
            </div>

            {/* Distortion */}
            <div>
              <span style={labelStyle}>עיוות</span>
              <div style={{ display: "flex", gap: "0.4rem" }}>
                {(["quiet", "fractal", "chaotic"] as const).map((d) => (
                  <button
                    key={d}
                    onClick={() => setDistortion(d)}
                    style={{
                      flex: 1,
                      padding: "0.45rem 0",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                      background: distortion === d ? "#f2ca50" : "transparent",
                      border: distortion === d ? "none" : "1px solid rgba(153,144,124,0.25)",
                      color: distortion === d ? "#1a1200" : "#99907c",
                      cursor: "pointer",
                      transition: "all 0.15s",
                    }}
                  >
                    {d === "quiet" ? "שקט" : d === "fractal" ? "פרקטל" : "כאוטי"}
                  </button>
                ))}
              </div>
            </div>

            {/* Save button */}
            <button
              style={{
                width: "100%",
                padding: "0.9rem 1rem",
                background: "linear-gradient(135deg, #f2ca50, #d4af37)",
                color: "#1a1200",
                fontWeight: 800,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                fontFamily: "'Space Grotesk', sans-serif",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.6rem",
                marginTop: "0.5rem",
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "18px", direction: "ltr" }}>
                save
              </span>
              שמור יצירה
            </button>
          </div>
        </aside>

        {/* CENTER - Preview Canvas */}
        <main
          style={{
            background: "#131313",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: "600px",
          }}
        >
          {/* Background letter א */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60rem",
              fontWeight: 900,
              WebkitTextStroke: "1px rgba(242,202,80,0.03)",
              color: "transparent",
              fontFamily: "'Space Grotesk', sans-serif",
              userSelect: "none",
              pointerEvents: "none",
              lineHeight: 1,
              opacity: 0.03,
              overflow: "hidden",
            }}
          >
            א
          </div>

          {/* Preview text */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "4rem 2rem 2rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontSize: "clamp(5rem,18vw,14rem)",
                fontWeight: weight,
                letterSpacing: `${letterSpacing}px`,
                fontStyle: slant !== 0 ? "oblique" : "normal",
                transform: `skewX(${slant}deg)`,
                color: "#e5e2e1",
                fontFamily: "'Space Grotesk', sans-serif",
                lineHeight: 1,
                userSelect: "none",
                transition: "all 0.12s ease",
                textAlign: "center",
              }}
            >
              {previewText || "צורה"}
            </p>
          </div>

          {/* Text input */}
          <div
            style={{
              padding: "0 2.5rem",
              position: "relative",
              zIndex: 1,
              marginBottom: "1.5rem",
            }}
          >
            <input
              type="text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              placeholder="כתוב כאן..."
              maxLength={12}
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(153,144,124,0.3)",
                padding: "0.7rem 0",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#e5e2e1",
                fontFamily: "'Space Grotesk', sans-serif",
                outline: "none",
                textAlign: "right",
                direction: "rtl",
              }}
            />
          </div>

          {/* Bottom info bar */}
          <div
            style={{
              padding: "1rem 2.5rem",
              borderTop: "1px solid rgba(242,202,80,0.06)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#0e0e0e",
              position: "relative",
              zIndex: 1,
            }}
          >
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                color: "#4d4635",
                fontFamily: "monospace",
              }}
            >
              3840 × 2160
            </span>
            <span
              style={{
                fontSize: "0.65rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                color: "#4d4635",
                fontFamily: "monospace",
              }}
            >
              Sacred_Aleph_01
            </span>
          </div>
        </main>

        {/* RIGHT SIDEBAR */}
        <aside
          style={{
            background: "#0e0e0e",
            padding: "2rem 1.5rem",
            borderRight: "1px solid rgba(242,202,80,0.06)",
            overflowY: "auto",
            paddingTop: "5rem",
            paddingBottom: "6rem",
          }}
        >
          <div
            style={{
              borderBottom: "2px solid rgba(242,202,80,0.15)",
              paddingBottom: "1rem",
              marginBottom: "2rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.1rem",
                fontWeight: 900,
                letterSpacing: "0.1em",
                color: "#e5e2e1",
              }}
            >
              וריאציות
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {fontVariants.map((v, i) => (
              <button
                key={i}
                onClick={() => setSelectedFont(i)}
                style={{
                  background: selectedFont === i ? "#1c1b1b" : "transparent",
                  border: "none",
                  borderRight: selectedFont === i ? "4px solid #f2ca50" : "4px solid transparent",
                  padding: "1.2rem 1rem",
                  textAlign: "right",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  transition: "all 0.15s",
                }}
              >
                <span
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: 900,
                    color: selectedFont === i ? "#f2ca50" : "rgba(242,202,80,0.2)",
                    fontFamily: "'Space Grotesk', sans-serif",
                    lineHeight: 1,
                    transition: "color 0.15s",
                  }}
                >
                  {v.letter}
                </span>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      color: selectedFont === i ? "#f2ca50" : "#99907c",
                      marginBottom: "0.2rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {v.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 800,
                      color: selectedFont === i ? "#e5e2e1" : "#d0c5af",
                    }}
                  >
                    {v.hebrewName}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>

      <div className="lg:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
