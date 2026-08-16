import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-jb",
});

export const metadata: Metadata = {
  title: "Roshan Anand — backend, cloud, fullstack",
  description:
    "Engineer portfolio. I ship backends, the boxes they run on, and the pages in front. Open to work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} ${jetbrains.className}`}>
      <body>{children}</body>
    </html>
  );
}
