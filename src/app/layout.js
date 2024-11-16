import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/sections/navSection/navBarSection";
import Footer from "./components/sections/footerSection/footerSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "VitaCode",
  description: "Diseño de sistemas personalizados",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-14 ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black font-sora`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
