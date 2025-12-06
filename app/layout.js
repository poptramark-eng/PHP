import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import AdSenseBlock from "./components/AdSenseBlock";
import Footer from "./components/Footer";
// 1. Import Next.js Script component for external scripts
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The metadata is correctly defined, which handles <title>, <meta>, etc.
export const metadata = {
  title: "NewsPortal | Latest Business, Sports, Technology & Entertainment Headlines",
  description:
    "Stay updated with NewsPortal — your trusted source for breaking news, business insights, sports highlights, health updates, science discoveries, technology trends, and entertainment stories. Built by Mark Machukhu, a Software Engineering student at Kisisi University, this contemporary portal delivers fast, reliable, and AdSense‑ready headlines with a clean, modern design.",
};

export default function RootLayout({ children }) {
  return (
    // 2. The <html> element is where the page structure starts.
    <html lang="en">
      {/* 3. Bootstrap CSS is now handled by a <link> outside of a dedicated <head> tag.
          The Next.js App Router automatically places this in the <head>. */}
      <link 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" 
        crossOrigin="anonymous" 
      />
      
      {/* 4. AdSense Script using next/script with 'afterInteractive' strategy for better performance. */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6884321061151028"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      
      {/* 5. The complex custom script is preserved, but moved outside the <head> tag 
          and into the main component body, as the App Router manages this. */}
      <Script id="custom-ad-loader" type="text/javascript" data-cfasync="false" strategy="beforeInteractive">
        {/* The content of the script is wrapped in a string literal */}
        {`
/*<![CDATA[/* */
(function(){var q=window,t="e10c5fc3812399849adfd8888c327459",g=[["siteId",132*824-551+520+260+5148988],["minBid",0],["popundersPerIP","0"],["delayBetween",0],["default",false],["defaultPerDay",0],["topmostLayer","auto"]],h=["d3d3LmRpc3BsYXl2ZXJ0aXNpbmcuY29tL2VyekUvcGZ4SS9iZm91bmRhdGlvbi5taW4uanM=","ZDNtem9rdHk5NTFjNXcuY2xvdWRmcm9udC5uZXQvbWFuZ3VsYXItZ3JpZHN0ZXIubWluLmpz","d3d3LmJraXRvbHlsLmNvbS9wZ08vVC93Zm91bmRhdGlvbi5taW4uanM=","d3d3LmN5Z29zYW1mLmNvbS91YW5ndWxhci1ncmlkc3Rlci5taW4uanM="],l=-1,y,e,b=function(){clearTimeout(e);l++;if(h[l]&&!(1790952033000<(new Date).getTime()&&1<l)){y=q.document.createElement("script");y.type="text/javascript";y.async=!0;var a=q.document.getElementsByTagName("script")[0];y.src="https://"+atob(h[l]);y.crossOrigin="anonymous";y.onerror=b;y.onload=function(){clearTimeout(e);q[t.slice(0,16)+t.slice(0,16)]||b()};e=setTimeout(b,5E3);a.parentNode.insertBefore(y,a)}};if(!q[t]){try{Object.freeze(q[t]=g)}catch(e){}b()}})();
/*]]>/* */
        `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <Navbar />
        <main className="container my-4">{children}</main>
        <AdSenseBlock />
        <Footer />

        {/* 6. Bootstrap JS using next/script with 'afterInteractive' strategy. 
           This is equivalent to loading it right before the closing </body> tag. */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" 
          crossOrigin="anonymous" 
          strategy="afterInteractive"
        />
      </body>

    </html>
  );
}
