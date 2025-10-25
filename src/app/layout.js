import { Montserrat, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ScrollarButton from "@/components/ScrollarButton/ScrollarButton";

const poppins = Poppins({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
});
const monserrat = Montserrat({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
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
      <body className={` ${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <ScrollarButton />
        <Footer />
      </body>
    </html>
  );
}
