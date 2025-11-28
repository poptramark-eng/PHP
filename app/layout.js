import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import AdSenseBlock from "./components/AdSenseBlock";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NewsPortal | Latest Business, Sports, Technology & Entertainment Headlines",
  description:
    "Stay updated with NewsPortal — your trusted source for breaking news, business insights, sports highlights, health updates, science discoveries, technology trends, and entertainment stories. Built by Mark Machukhu, a Software Engineering student at Kisisi University, this contemporary portal delivers fast, reliable, and AdSense‑ready headlines with a clean, modern design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Bootstrap CSS */}
       <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossOrigin="anonymous"></link>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6884321061151028"
     crossorigin="anonymous"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AdSenseBlock />
        <Navbar />
        <main className="container my-4">{children}</main>
        
        <Footer />

        {/* ✅ Bootstrap JS (for navbar collapse, modals, etc.) */}
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
