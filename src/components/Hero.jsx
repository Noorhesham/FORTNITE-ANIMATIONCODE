import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "./Button";
import { SplitText } from "gsap/SplitText";
import { GSDevTools } from "gsap/all";

gsap.registerPlugin(SplitText);

export default function FortniteHeroSection() {
  const heroRef = useRef(null);

  const heroData = {
    description:
      "The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?",
    imageUrl: "/p2.png",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      //create new timeline
      const tl = gsap.timeline();

      const mySplitText = new SplitText(".paragraphhero", { type: "lines" });

      const lines = mySplitText.lines;

      gsap.set(lines, { overflow: "hidden" });

      gsap.set(".hero-image", { opacity: 0, xPercent: 50 });
      gsap.set(".fortnite-title-bg", { opacity: 0, scale: 1.5 });

      tl.to(".fortnite-title-bg", {
        duration: 1.2,
        opacity: 1,
        scale: 1,
        ease: "power2.out",
      })
        .to(
          ".hero-image",
          {
            duration: 1.5,
            xPercent: 0,
            opacity: 1,
            ease: "power3.out",
          },
          "-=1.2"
        )
        .from(lines, {
          yPercent: 300,
          stagger: 0.05,

          ease: "power2.out",
        })
        .from(
          ".learn-more-btn",
          {
            duration: 1,
            opacity: 0,
            rotationY: -90,
            transformOrigin: "left center",
            ease: "power3.out",
          },
          "-=0.5"
        );
      // GSDevTools.create({ animation: tl });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative w-full h-screen text-white bg-gradient-to-br from-indigo-800 to-purple-900 overflow-hidden"
    >
      <h1
        className="fortnite-title-bg absolute inset-0 flex items-center
       fortnite justify-center text-[28vw] font-black uppercase text-white/10 select-none"
      >
        FORTNITE
      </h1>

      <div className="hero-image absolute inset-0">
        <img src={heroData.imageUrl} alt="Fortnite Characters" className="w-full h-full object-contain object-bottom" />
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl p-8 flex flex-col items-center z-20">
        <p className="text-lg clip md:text-xl text-center font-medium paragraphhero  ">{heroData.description}</p>

        <Button className="learn-more-btn z-10 ">LEARN MORE</Button>
      </div>
    </div>
  );
}
