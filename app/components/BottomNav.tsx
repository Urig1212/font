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
    <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center border-t border-[#f2ca50]/10 bg-[#131313]/80 backdrop-blur-xl z-50 shadow-[0_-4px_40px_rgba(242,202,80,0.05)]">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-4 py-3 transition-all duration-300 ${
              isActive
                ? "bg-gradient-to-b from-[#f2ca50] to-[#d4af37] text-[#3c2f00]"
                : "text-[#f2ca50]/50 hover:text-[#f2ca50] hover:bg-white/5"
            }`}
          >
            <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
            <span className="font-black text-[10px] mt-1 leading-none" style={{ fontFamily: "'Space Grotesk'" }}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
