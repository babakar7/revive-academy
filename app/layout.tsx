import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Revive Academie | Formation Pilates Certifiante au Senegal",
  description:
    "Devenez Coach de Pilates Certifié avec Revive Academie. Formation professionnelle de haut niveau a Dakar, Senegal. Certification Balanced Body, encadrement medical, studio premium aux Almadies.",
  keywords: [
    "formation pilates",
    "certification pilates",
    "coach pilates",
    "senegal",
    "dakar",
    "balanced body",
    "pilates mat",
    "pilates reformer",
  ],
  authors: [{ name: "Revive Academie" }],
  openGraph: {
    title: "Revive Academie | Formation Pilates Certifiante",
    description:
      "Devenez Coach de Pilates Certifié avec Revive Academie a Dakar, Senegal.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
