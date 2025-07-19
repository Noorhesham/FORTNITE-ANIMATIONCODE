"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText, GSDevTools);

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);

    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      window.lenis = null;
      gsap.ticker.remove(tickerCallback);
    };
  }, []);

  return <>{children}</>;
}
