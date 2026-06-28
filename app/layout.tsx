import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/data";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
