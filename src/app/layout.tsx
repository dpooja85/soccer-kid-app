import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GoalZilla - Fun Soccer Stats for Kids!",
  description: "Discover your favorite Premier League players and teams with fun, easy-to-read stats! GoalZilla makes soccer stats fun for young fans.",
  keywords: ["soccer", "football", "premier league", "kids", "stats", "players", "teams", "goalzilla"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
