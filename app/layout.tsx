import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";
import AnimatedCat from "@/components/AnimatedCat";

export const metadata: Metadata = {
  title: `${siteConfig.nameEn} — ${siteConfig.role}`,
  description: siteConfig.bio,
  openGraph: {
    title: `${siteConfig.nameEn} — ${siteConfig.role}`,
    description: siteConfig.bio,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
        <AnimatedCat />
      </body>
    </html>
  );
}
