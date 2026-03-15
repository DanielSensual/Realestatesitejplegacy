import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import AIChatbot from "@/components/AIChatbot";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "JP Legacy Group | Exclusive Florida Real Estate",
  description: "Curating Florida's Most Exclusive Real Estate Portfolios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-obsidian text-pearl antialiased font-sans`}
      >
        {children}
        <AIChatbot />
      </body>
    </html>
  );
}
