import type { Metadata } from "next";
import { Playfair_Display, Inter, Prompt } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-latin",
  weight: ["300", "400", "500", "600"],
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MY VISION — เป้าหมายเพื่อแรงบันดาลใจในการเทรด",
  description:
    "Vision board รวมเป้าหมายด้านที่พัก รถ และธุรกิจ เพื่อเป็นแรงบันดาลใจในการเทรดทุกวัน",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body
        className={`${display.variable} ${inter.variable} ${prompt.variable} bg-night text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
