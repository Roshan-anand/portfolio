import type { Metadata } from "next";
import "@/globals.css";
import { Geist_Mono, JetBrains_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--geist-mono",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Roshan Anand",
  description: "engineer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${geistMono.variable} ${jetBrainsMono.variable}`}
      >
        <head />
        <body>{children}</body>
      </html>
    </>
  );
}
