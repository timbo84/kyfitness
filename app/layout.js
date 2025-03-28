import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/HomePageCards/footer";
import NavbarComponent from "@/components/navbar/navbar";
import Chatbot from "@/components/chatbot/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KyKyFitness",
  description: "let me help you reach your goals!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavbarComponent />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
