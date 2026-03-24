import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "מקדש הפונט העברי | Hebrew Font Temple",
  description: "בית מקדש דיגיטלי לפונטים ישראלים עבריים. תערוכה אוונגרדית של האות העברית — מהיתדות ועד לעידן הדיגיטלי.",
  keywords: ["Hebrew fonts", "פונט עברי", "טיפוגרפיה", "typography", "Israeli design"],
  authors: [{ name: "אורי גליקמן", url: "https://github.com/Urig1212" }],
  creator: "אורי גליקמן",
  openGraph: {
    title: "מקדש הפונט העברי",
    description: "בית מקדש דיגיטלי לפונטים ישראלים עבריים",
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#131313] text-[#e5e2e1] min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
