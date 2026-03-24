"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", icon: "home", label: "בית" },
  { href: "/gallery", icon: "gallery_thumbnail", label: "היכל" },
  { href: "/lab", icon: "science", label: "מעבדה" },
  { href: "/chronicles", icon: "auto_stories", label: "ארכיון" },
  { href: "/sanctum", icon: "hexagon", label: "מקדש" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 200,
      display: "flex",
      justifyContent: "space-around",
      alignItems: "stretch",
      background: "rgba(14,14,14,0.9)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderTop: "1px solid rgba(242,202,80,0.08)",
      height: "60px",
    }}>
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "2px",
              textDecoration: "none",
              background: isActive ? "linear-gradient(to bottom, rgba(242,202,80,0.15), rgba(242,202,80,0.05))" : "transparent",
              borderTop: isActive ? "2px solid #f2ca50" : "2px solid transparent",
              color: isActive ? "#f2ca50" : "rgba(242,202,80,0.35)",
              transition: "all 0.15s",
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "20px", direction: "ltr" }}>
              {item.icon}
            </span>
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: "9px", letterSpacing: "0.05em" }}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
