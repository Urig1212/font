"use client";

import { useState } from "react";
import Link from "next/link";
import BottomNav from "../components/BottomNav";

const fonts = [
  {
    id: 1,
    tag: "מסורתי",
    tagNum: "01",
    name: "פרנק-ריהל",
    latin: "Frank-Rühl",
    year: "1908",
    designer: "רפאל פרנק",
    origin: "לייפציג, גרמניה",
    letter: "א",
    desc: "עמוד השדרה של הדפוס העברי. פונט שנוצר ב-1908 ומאז מגדיר את הקריאות העברית בספרות ובעיתונות.",
    category: "מסורתי",
  },
  {
    id: 2,
    tag: "מודרני",
    tagNum: "02",
    name: "חיים",
    latin: "Haim",
    year: "1947",
    designer: "חיים בר",
    origin: "תל-אביב",
    letter: "ח",
    desc: "הבאוהאוס העברי. צורות גיאומטריות נוקשות שהגדירו את העיר העברית הראשונה.",
    category: "מודרני",
  },
  {
    id: 3,
    tag: "אלגנטי",
    tagNum: "03",
    name: "דוד",
    latin: "David",
    year: "1954",
    designer: "טוביה פרידמן",
    origin: "ישראל",
    letter: "ד",
    desc: "השילוב המושלם בין הקליגרפיה הקלאסית למודרניזם המוקדם. אלגנטי, קריא, נצחי.",
    category: "מסורתי",
  },
  {
    id: 4,
    tag: "ניסיוני",
    tagNum: "04",
    name: "נרקיס בלוק",
    latin: "Narkiss Block",
    year: "1968",
    designer: "צבי נרקיס",
    origin: "ישראל",
    letter: "נ",
    desc: "צבי נרקיס יצר שפה חזותית חדשה. נרקיס בלוק הפך לסמל הטיפוגרפי של מדינת ישראל.",
    category: "מודרני",
  },
  {
    id: 5,
    tag: "אוונגרד",
    tagNum: "05",
    name: "הדסה",
    latin: "Hadassah",
    year: "1958",
    designer: "אנרי פרידלנדר",
    origin: "ירושלים",
    letter: "ה",
    desc: "שלושים שנות עבודה — ולב ספרדי. הדסה משלב מסורת קלאסית עם ניקיון מודרניסטי. זכה בפרס גוטנברג.",
    category: "ניסיוני",
  },
  {
    id: 6,
    tag: "ניסיוני",
    tagNum: "06",
    name: "הייבריד",
    latin: "Hybrid",
    year: "2002",
    designer: "עודד עזר",
    origin: "תל-אביב",
    letter: "ע",
    desc: "האות כיצור חי. עבודות עודד עזר מוצגות ב-MoMA ומאתגרות את גבולות הטיפוגרפיה.",
    category: "ניסיוני",
  },
];

const categories = ["הכל", "מסורתי", "מודרני", "ניסיוני"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("הכל");
  const [search, setSearch] = useState("");

  const filtered = fonts.filter((f) => {
    const matchCat = activeFilter === "הכל" || f.category === activeFilter;
    const matchSearch = !search || f.name.includes(search) || f.latin.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div dir="rtl" lang="he" style={{ background: "#131313", color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", minHeight: "100dvh" }}>

      {/* ═══ FIXED HEADER ═══ */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: "56px", background: "#0e0e0e", borderBottom: "1px solid rgba(242,202,80,0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1.25rem" }}>
        <Link href="/" style={{ fontWeight: 900, fontSize: "1.4rem", color: "#f2ca50", letterSpacing: "-0.02em", textDecoration: "none" }}>אֶלֶף</Link>
        <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.2em", color: "#4d4635", textTransform: "uppercase" }}>היכל הפונטים</span>
      </header>

      {/* ═══ HERO ═══ */}
      <section style={{ paddingTop: "80px", padding: "80px 1.5rem 0" }}>
        <p style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#4d4635", marginBottom: "1rem" }}>
          אוסף פונטים עבריים
        </p>
        <h1 style={{ fontSize: "clamp(2.8rem,10vw,7rem)", fontWeight: 900, lineHeight: 0.92, marginBottom: "1.25rem", letterSpacing: "-0.02em" }}>
          היכל{" "}
          <span style={{ color: "#f2ca50" }}>הפונטים</span>
        </h1>
        <p style={{ maxWidth: "480px", fontSize: "0.88rem", lineHeight: 1.85, color: "#d0c5af", marginBottom: "2rem" }}>
          תערוכה דיגיטלית של פונטים עבריים מרכזיים — מ-1908 ועד ימינו.
        </p>
      </section>

      {/* ═══ SEARCH + FILTERS ═══ */}
      <div style={{ padding: "0 1.5rem 1.5rem", position: "sticky", top: "56px", zIndex: 40, background: "#131313", paddingTop: "1rem", borderBottom: "1px solid rgba(242,202,80,0.06)" }}>
        {/* Search */}
        <div style={{ position: "relative", marginBottom: "0.9rem" }}>
          <span className="material-symbols-outlined" style={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", fontSize: "18px", color: "#4d4635", direction: "ltr" }}>search</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="חפש פונט..."
            style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(77,70,53,0.5)", padding: "0.5rem 1.5rem 0.5rem 0", fontSize: "0.9rem", color: "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", outline: "none", caretColor: "#f2ca50", boxSizing: "border-box" }}
          />
        </div>
        {/* Filters */}
        <div style={{ display: "flex", gap: "0.5rem", overflowX: "auto", paddingBottom: "0.2rem" }}>
          {categories.map((c) => (
            <button key={c} onClick={() => setActiveFilter(c)} style={{ padding: "0.35rem 1rem", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", fontFamily: "'Space Grotesk',sans-serif", background: activeFilter === c ? "#f2ca50" : "transparent", color: activeFilter === c ? "#1a1200" : "#4d4635", border: activeFilter === c ? "none" : "1px solid rgba(77,70,53,0.5)", cursor: "pointer", whiteSpace: "nowrap", transition: "all 0.15s", flexShrink: 0 }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ FONT CARDS ═══ */}
      <main style={{ padding: "1.5rem 1.5rem 7rem" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem 0", color: "#4d4635" }}>
            <span style={{ fontSize: "4rem", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.2)", color: "transparent" }}>?</span>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem" }}>לא נמצאו פונטים</p>
          </div>
        )}

        {/* Featured: first card big */}
        {filtered.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "2px", background: "rgba(242,202,80,0.03)" }}>

            {/* Card 0 — Featured hero card */}
            <div style={{ background: "#1c1b1b", padding: "2rem 1.5rem", position: "relative", overflow: "hidden", minHeight: "260px" }}>
              <div aria-hidden style={{ position: "absolute", bottom: "-1rem", left: "-0.5rem", fontSize: "12rem", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.07)", color: "transparent", lineHeight: 1, fontFamily: "'Space Grotesk',sans-serif", userSelect: "none", pointerEvents: "none" }}>
                {filtered[0].letter}
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.22em", color: "#f2ca50", marginBottom: "1.2rem", textTransform: "uppercase" }}>
                  {filtered[0].tagNum} / {filtered[0].tag}
                </p>
                <h2 style={{ fontSize: "clamp(2.2rem,8vw,5rem)", fontWeight: 900, color: "#e5e2e1", marginBottom: "0.6rem", lineHeight: 1, letterSpacing: "-0.02em" }}>
                  {filtered[0].name}
                </h2>
                <p style={{ fontSize: "0.72rem", color: "#4d4635", marginBottom: "1.2rem", letterSpacing: "0.1em" }}>
                  {filtered[0].latin} · {filtered[0].year} · {filtered[0].designer}
                </p>
                <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#d0c5af", maxWidth: "420px", marginBottom: "1.5rem" }}>
                  {filtered[0].desc}
                </p>
                <Link href="/sanctum" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.4rem", border: "1px solid rgba(242,202,80,0.3)", color: "#f2ca50", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textDecoration: "none", transition: "all 0.2s" }}>
                  חקור את האות
                  <span className="material-symbols-outlined" style={{ fontSize: "14px", direction: "ltr" }}>arrow_back</span>
                </Link>
              </div>
            </div>

            {/* Cards 1..n — 2-column on mobile for the rest */}
            {filtered.length > 1 && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "rgba(242,202,80,0.03)" }}>
                {filtered.slice(1).map((font) => (
                  <div key={font.id} style={{ background: "#201f1f", padding: "1.4rem 1.2rem", position: "relative", overflow: "hidden", minHeight: "180px" }}>
                    <div aria-hidden style={{ position: "absolute", bottom: "-0.5rem", left: "0.5rem", fontSize: "6rem", fontWeight: 900, WebkitTextStroke: "1px rgba(242,202,80,0.06)", color: "transparent", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                      {font.letter}
                    </div>
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <p style={{ fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", color: "#f2ca50", marginBottom: "0.8rem", textTransform: "uppercase" }}>
                        {font.tagNum} / {font.tag}
                      </p>
                      <h3 style={{ fontSize: "clamp(1.2rem,4vw,1.8rem)", fontWeight: 900, color: "#e5e2e1", marginBottom: "0.3rem", lineHeight: 1 }}>
                        {font.name}
                      </h3>
                      <p style={{ fontSize: "0.65rem", color: "#4d4635", marginBottom: "0.7rem" }}>{font.year}</p>
                      <p style={{ fontSize: "0.75rem", lineHeight: 1.7, color: "#d0c5af" }}>
                        {font.desc.slice(0, 70)}…
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Letter showcase row */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2px", background: "rgba(242,202,80,0.03)", marginTop: "2px" }}>
              {["ל", "פ", "צ", "ת"].map((letter) => (
                <LetterTile key={letter} letter={letter} />
              ))}
            </div>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

function LetterTile({ letter }: { letter: string }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: hover ? "#f2ca50" : "#1c1b1b", cursor: "pointer", transition: "background 0.2s", maxHeight: "130px" }}
    >
      <span style={{ fontSize: "clamp(2rem,6vw,4rem)", fontWeight: 900, color: hover ? "#1a1200" : "#e5e2e1", fontFamily: "'Space Grotesk',sans-serif", transition: "color 0.2s" }}>{letter}</span>
      <span style={{ fontSize: "0.52rem", letterSpacing: "0.18em", fontWeight: 700, color: hover ? "#1a1200" : "#4d4635", marginTop: "0.3rem", transition: "color 0.2s" }}>אות</span>
    </div>
  );
}
