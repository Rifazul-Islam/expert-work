import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollarButton from "@/components/ScrollarButton/ScrollarButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prompt Expert",
  description:
    "Google Gemini - Best Professional Ai Photo Editors,Advanced intelligence at your fingertips, empowering you to create stunning visuals effortlessly with next-generation AI precision.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <ScrollarButton />
        <Footer />
      </body>
    </html>
  );
}
