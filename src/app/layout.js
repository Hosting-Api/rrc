import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import WhatsappBtn from "./components/WhatsappBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RRC",
  description: "Rivaa Rehab Center",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <link rel="icon" href="/logo.png" sizes="any" />
      <Navbar />
        {children}
        <WhatsappBtn   />
        <br />
      <Footer />
        </body>
    </html>
  );
}
