"use client";

import Link from "next/link";

interface TopBarProps {
  section?: string;
}

export default function TopBar({ section }: TopBarProps) {
  return (
    <header className="bg-[#131313] flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50 border-b border-[#f2ca50]/5">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-[#f2ca50] font-black text-3xl tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk'" }}>
          אֶלֶף
        </Link>
      </div>
      <div className="flex items-center gap-6">
        {section && (
          <span className="text-[#f2ca50]/60 font-bold text-sm tracking-widest uppercase hidden sm:block" style={{ fontFamily: "'Space Grotesk'" }}>
            {section}
          </span>
        )}
        <Link href="/gallery">
          <span className="material-symbols-outlined text-[#f2ca50] cursor-pointer hover:bg-[#f2ca50]/10 transition-colors p-2">
            temple_buddhist
          </span>
        </Link>
      </div>
    </header>
  );
}
