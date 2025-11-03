import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // Creates a CSS variable for Tailwind or manual use
});

export const metadata = {
  title: "My Next App",
  description: "App using Inter font by default",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
