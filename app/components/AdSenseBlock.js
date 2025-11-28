"use client";

import { useEffect, useRef } from "react";

export default function AdSenseBlock() {
  const adRef = useRef(null);

  useEffect(() => {
    try {
      if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-6884321061151028"
      data-ad-slot="4528275669"
    ></ins>
  );
}
