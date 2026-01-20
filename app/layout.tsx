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
  title: "Revive Académie | Formation de Pilates Certifiante au Sénégal",
  description:
    "Devenez Coach de Pilates Certifié avec Revive Académie. Formation professionnelle de haut niveau à Dakar, Sénégal. Certification Balanced Body, encadrement médical, studio premium aux Almadies.",
  keywords: [
    "formation pilates",
    "certification pilates",
    "coach pilates",
    "sénégal",
    "dakar",
    "balanced body",
    "pilates mat",
    "pilates reformer",
  ],
  authors: [{ name: "Revive Académie" }],
  openGraph: {
    title: "Revive Académie | Formation de Pilates Certifiante",
    description:
      "Devenez Coach de Pilates Certifié avec Revive Académie à Dakar, Sénégal.",
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
