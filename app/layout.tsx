import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Combo Ski | Garanční prohlídka",
  description: "Interaktivní kontrola správného nasazení, bezpečné jízdy a péče o Combo Ski.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">{children}</body>
    </html>
  );
}
