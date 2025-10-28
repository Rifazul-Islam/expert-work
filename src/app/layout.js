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
  title: "Gemini AI Photo Prompts - Copy & Paste Image Ideas | Prompt Expert",
  description:
    "Discover thousands of ready-to-use Gemini AI photo prompts — easy to copy and paste! Create stunning, realistic, and aesthetic AI-generated images instantly with Prompt Expert.",
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
