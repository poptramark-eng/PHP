"use client";

import { useEffect, useRef } from "react";

export default function AdSenseBlock() {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.hasAttribute("data-adsbygoogle-status")) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT}
      data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
