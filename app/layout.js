import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import AdSenseBlock from "./components/AdSenseBlock";
import Footer from './components/Footer';

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
  description: "Stay updated with NewsPortal — your trusted source for breaking news, business insights, sports highlights, health updates, science discoveries, technology trends, and entertainment stories. Built by Mark Machukhu, a Software Engineering student at Kisisi University, this contemporary portal delivers fast, reliable, and AdSense‑ready headlines with a clean, modern design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-dark text-light`}>
        <Navbar />
        <div className="container my-3">
          <AdSenseBlock />
        </div>
        <main className="container py-5 bg-dark text-light">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
