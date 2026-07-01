import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

import GridBackground from "@/components/GridBackground";

export const metadata: Metadata = {
  title: `${siteConfig.nameEn} — ${siteConfig.role}`,
  description: siteConfig.bio,
  openGraph: {
    title: `${siteConfig.nameEn} — ${siteConfig.role}`,
    description: siteConfig.bio,
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// Настройка Space Grotesk (основной шрифт)
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk", // CSS-переменная для гибкости
});

// Настройка Inter (вспомогательный шрифт)
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-inter",
});

// Настройка JetBrains Mono (для кода)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`
        ${spaceGrotesk.variable}
        ${inter.variable}
        ${jetbrainsMono.variable}
      `}
    >
      <body>
        <GridBackground /> {/* 3D-сетка как фон */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
