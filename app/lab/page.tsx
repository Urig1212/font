"use client";

import { useState } from "react";
import BottomNav from "../components/BottomNav";

const fontVariants = [
  { name: "Frank-Rühl", hebrewName: "פרנק-ריהל", letter: "א", style: { fontWeight: 400 } },
  { name: "Hadassah", hebrewName: "הדסה", letter: "ה", style: { fontWeight: 300, fontStyle: "italic" as const } },
  { name: "Narkiss Block", hebrewName: "נרקיס", letter: "נ", style: { fontWeight: 900, letterSpacing: "0.05em" } },
  { name: "David", hebrewName: "דוד", letter: "ד", style: { fontWeight: 500 } },
];

const S = {
  label: {
    fontSize: "0.6rem",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase" as const,
    color: "#99907c",
    display: "block",
    marginBottom: "0.4rem",
  } as React.CSSProperties,
  value: {
    fontSize: "0.72rem",
    fontWeight: 800,
    color: "#f2ca50",
    fontVariantNumeric: "tabular-nums",
  } as React.CSSProperties,
};

export default function LabPage() {
  const [weight, setWeight] = useState(700);
  const [spacing, setSpacing] = useState(0);
  const [slant, setSlant] = useState(0);
  const [scale, setScale] = useState(100);
  const [strokeMod, setStrokeMod] = useState(45);
  const [warp, setWarp] = useState<"linear" | "organic">("linear");
  const [distortion, setDistortion] = useState<"quiet" | "fractal" | "chaotic">("quiet");
  const [previewText, setPreviewText] = useState("צורה");
  const [selectedFont, setSelectedFont] = useState(0);
  const [mobileTab, setMobileTab] = useState<"tools" | "variants">("tools");

  const previewStyle: React.CSSProperties = {
    fontWeight: weight,
    letterSpacing: `${spacing}px`,
    transform: `skewX(${slant}deg) scaleX(${scale / 100})`,
    fontFamily: "'Space Grotesk', 'Assistant', sans-serif",
    fontSize: "clamp(4.5rem, 22vw, 16rem)",
    lineHeight: 1,
    color: "#e5e2e1",
    userSelect: "none",
    transition: "all 0.1s ease",
    textAlign: "center",
    display: "block",
    willChange: "transform",
  };

  const glowIntensity = distortion === "chaotic" ? "0 0 60px rgba(242,202,80,0.35)" :
    distortion === "fractal" ? "0 0 30px rgba(242,202,80,0.15)" : "none";

  return (
    <div dir="rtl" lang="he" style={{ background: "#131313", color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", minHeight: "100dvh", display: "flex", flexDirection: "column" }}>

      {/* ═══ FIXED HEADER ═══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", background: "#0e0e0e", borderBottom: "1px solid rgba(242,202,80,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem" }}>
        <span style={{ fontWeight: 900, fontSize: "1.4rem", color: "#f2ca50", letterSpacing: "-0.02em" }}>המעבדה</span>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4d4635", textTransform: "uppercase" }}>THE FORGE</span>
          <button
            style={{ background: "linear-gradient(135deg,#f2ca50,#d4af37)", color: "#1a1200", border: "none", padding: "0.4rem 1rem", fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.12em", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "14px", direction: "ltr" }}>save</span>
            שמור
          </button>
        </div>
      </header>

      {/* ═══ LIVE PREVIEW — always visible, pinned below header ═══ */}
      <div style={{ position: "sticky", top: "56px", zIndex: 50, background: "#131313", borderBottom: "1px solid rgba(242,202,80,0.06)" }}>
        {/* Background ghost letter */}
        <div aria-hidden style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", pointerEvents: "none", userSelect: "none" }}>
          <span style={{ fontSize: "55vw", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.04)", color: "transparent", lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif" }}>
            {previewText[0] || "א"}
          </span>
        </div>

        <div style={{ position: "relative", zIndex: 1, padding: "1.5rem 1.5rem 0.75rem", minHeight: "clamp(180px, 38vh, 340px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          {/* The live preview text */}
          <span style={{ ...previewStyle, filter: `drop-shadow(${glowIntensity})` }}>
            {previewText || "צורה"}
          </span>

          {/* Input field */}
          <div style={{ width: "100%", maxWidth: "480px", marginTop: "1.25rem" }}>
            <input
              type="text"
              value={previewText}
              onChange={(e) => setPreviewText(e.target.value)}
              placeholder="כתוב כאן..."
              maxLength={14}
              style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(242,202,80,0.2)", padding: "0.6rem 0", fontSize: "1rem", fontWeight: 700, color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", outline: "none", textAlign: "center", caretColor: "#f2ca50", boxSizing: "border-box" }}
            />
          </div>

          {/* Mini stats bar */}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.75rem", paddingBottom: "0.5rem" }}>
            {[
              { label: "משקל", val: weight },
              { label: "ריווח", val: `${spacing}px` },
              { label: "נטייה", val: `${slant}°` },
              { label: "קנה מידה", val: `${scale}%` },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "0.55rem", color: "#4d4635", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>{s.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#f2ca50", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{s.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ MOBILE TABS ═══ */}
      <div className="lg:hidden" style={{ background: "#0e0e0e", borderBottom: "1px solid rgba(242,202,80,0.08)", display: "flex" }}>
        {(["tools", "variants"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setMobileTab(tab)}
            style={{ flex: 1, padding: "0.75rem", fontSize: "0.72rem", fontWeight: 800, letterSpacing: "0.14em", fontFamily: "'Space Grotesk',sans-serif", background: "transparent", border: "none", borderBottom: mobileTab === tab ? "2px solid #f2ca50" : "2px solid transparent", color: mobileTab === tab ? "#f2ca50" : "#4d4635", cursor: "pointer", textTransform: "uppercase" as const, transition: "all 0.15s" }}
          >
            {tab === "tools" ? "כלים" : "וריאציות"}
          </button>
        ))}
      </div>

      {/* ═══ MAIN CONTENT (controls + variations) ═══ */}
      <div
        style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr" }}
        className="lg:grid-cols-[300px_1fr_260px] lg:min-h-0"
      >

        {/* ── LEFT: TOOLS ── */}
        <aside
          className={`lg:block ${mobileTab === "tools" ? "block" : "hidden"}`}
          style={{ background: "#0e0e0e", padding: "1.5rem 1.25rem 8rem", overflowY: "auto", borderLeft: "1px solid rgba(242,202,80,0.05)" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>

            {/* Weight */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={S.label}>משקל</span>
                <span style={S.value}>{weight}</span>
              </div>
              <input type="range" min={100} max={900} step={100} value={weight} onChange={(e) => setWeight(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
            </div>

            {/* Spacing */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={S.label}>ריווח אותיות</span>
                <span style={S.value}>{spacing}px</span>
              </div>
              <input type="range" min={-50} max={80} value={spacing} onChange={(e) => setSpacing(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
            </div>

            {/* Slant */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={S.label}>נטייה</span>
                <span style={S.value}>{slant}°</span>
              </div>
              <input type="range" min={-25} max={25} value={slant} onChange={(e) => setSlant(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
            </div>

            {/* Scale X */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={S.label}>קנה מידה אופקי</span>
                <span style={S.value}>{scale}%</span>
              </div>
              <input type="range" min={60} max={160} value={scale} onChange={(e) => setScale(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
            </div>

            {/* Stroke Mod */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                <span style={S.label}>מודולציית קו</span>
                <span style={S.value}>{strokeMod}%</span>
              </div>
              <input type="range" min={0} max={100} value={strokeMod} onChange={(e) => setStrokeMod(+e.target.value)} style={{ accentColor: "#f2ca50", width: "100%" }} />
            </div>

            {/* Warp */}
            <div>
              <span style={S.label}>מצב עיקול</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.4rem" }}>
                {(["linear", "organic"] as const).map((m) => (
                  <button key={m} onClick={() => setWarp(m)} style={{ padding: "0.6rem 0", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em", fontFamily: "'Space Grotesk',sans-serif", background: "transparent", border: warp === m ? "1.5px solid #f2ca50" : "1.5px solid rgba(77,70,53,0.6)", color: warp === m ? "#f2ca50" : "#4d4635", cursor: "pointer", transition: "all 0.15s" }}>
                    {m === "linear" ? "ליניארי" : "אורגני"}
                  </button>
                ))}
              </div>
            </div>

            {/* Distortion */}
            <div>
              <span style={S.label}>עיוות</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.4rem" }}>
                {(["quiet", "fractal", "chaotic"] as const).map((d) => (
                  <button key={d} onClick={() => setDistortion(d)} style={{ padding: "0.55rem 0", fontSize: "0.62rem", fontWeight: 700, fontFamily: "'Space Grotesk',sans-serif", background: distortion === d ? "#f2ca50" : "transparent", border: distortion === d ? "none" : "1.5px solid rgba(77,70,53,0.6)", color: distortion === d ? "#1a1200" : "#4d4635", cursor: "pointer", transition: "all 0.15s" }}>
                    {d === "quiet" ? "שקט" : d === "fractal" ? "פרקטל" : "כאוטי"}
                  </button>
                ))}
              </div>
            </div>

            {/* Reset */}
            <button onClick={() => { setWeight(700); setSpacing(0); setSlant(0); setScale(100); setStrokeMod(45); setWarp("linear"); setDistortion("quiet"); }}
              style={{ padding: "0.7rem", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em", fontFamily: "'Space Grotesk',sans-serif", background: "transparent", border: "1px solid rgba(77,70,53,0.5)", color: "#4d4635", cursor: "pointer" }}>
              איפוס
            </button>
          </div>
        </aside>

        {/* ── CENTER: desktop-only extra space ── */}
        <div className="hidden lg:flex" style={{ background: "#131313", position: "relative", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", opacity: 0.08 }}>
            <p style={{ fontSize: "0.6rem", letterSpacing: "0.3em", color: "#f2ca50", textTransform: "uppercase", fontWeight: 700 }}>
              ← כלים │ וריאציות →
            </p>
          </div>
        </div>

        {/* ── RIGHT: VARIATIONS ── */}
        <aside
          className={`lg:block ${mobileTab === "variants" ? "block" : "hidden"}`}
          style={{ background: "#0e0e0e", padding: "1.5rem 1.25rem 8rem", overflowY: "auto", borderRight: "1px solid rgba(242,202,80,0.05)" }}
        >
          <div style={{ marginBottom: "1.5rem", borderBottom: "1px solid rgba(242,202,80,0.1)", paddingBottom: "0.8rem" }}>
            <h2 style={{ fontSize: "0.85rem", fontWeight: 900, color: "#e5e2e1", letterSpacing: "0.08em" }}>וריאציות</h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            {fontVariants.map((v, i) => (
              <button key={i} onClick={() => setSelectedFont(i)} style={{ background: selectedFont === i ? "#1c1b1b" : "transparent", border: "none", borderRight: selectedFont === i ? "3px solid #f2ca50" : "3px solid transparent", padding: "1.1rem 0.9rem", textAlign: "right", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", transition: "all 0.15s" }}>
                <span style={{ fontSize: "2.8rem", color: selectedFont === i ? "#f2ca50" : "rgba(242,202,80,0.15)", fontFamily: "'Space Grotesk',sans-serif", lineHeight: 1, transition: "color 0.15s", ...v.style }}>
                  {v.letter}
                </span>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", color: selectedFont === i ? "#f2ca50" : "#4d4635", marginBottom: "0.2rem", textTransform: "uppercase" }}>{v.name}</p>
                  <p style={{ fontSize: "0.9rem", fontWeight: 800, color: selectedFont === i ? "#e5e2e1" : "#d0c5af" }}>{v.hebrewName}</p>
                </div>
              </button>
            ))}

            {/* Live values display */}
            <div style={{ marginTop: "2rem", padding: "1.2rem", background: "#131313", borderRight: "2px solid rgba(242,202,80,0.12)" }}>
              <p style={{ fontSize: "0.58rem", color: "#4d4635", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: "0.8rem" }}>פרמטרים פעילים</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.6rem" }}>
                {[
                  ["font-weight", weight],
                  ["letter-spacing", `${spacing}px`],
                  ["skew", `${slant}°`],
                  ["scale-x", `${scale}%`],
                  ["stroke", `${strokeMod}%`],
                  ["warp", warp],
                ].map(([k, v]) => (
                  <div key={k as string}>
                    <div style={{ fontSize: "0.52rem", color: "#4d4635", letterSpacing: "0.12em" }}>{k as string}</div>
                    <div style={{ fontSize: "0.72rem", color: "#f2ca50", fontWeight: 800, fontVariantNumeric: "tabular-nums" }}>{v as string | number}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <BottomNav />
    </div>
  );
}
