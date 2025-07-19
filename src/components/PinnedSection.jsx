import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import { GSDevTools } from "gsap/all";

gsap.registerPlugin(GSDevTools);

const categories = [
  [
    { text: "COMBAT" },
    { text: "MINIGAME" },
    { text: "PRACTICE" },
    { text: "SURVIVAL", highlight: true },
    { text: "HORROR" },
    { text: "ESCAPE" },
  ],

  [
    { text: "POPULAR", highlight: true },
    { text: "1V1" },
    { text: "ADVENTURE" },
    { text: "BOXFIGHT" },
    { text: "DEATHRUN" },
    { text: "ZOMBIES" },
  ],

  [
    { text: "PARKOUR" },
    { text: "ROLEPLAY" },
    { text: "ZONEWARS" },
    { text: "DEATHMATCH", highlight: true },
    { text: "FASHION" },
    { text: "MUSIC" },
  ],
];

export default function PinnedCategoriesSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".category-line-wrapper");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: `+=${window.innerHeight}`,
          markers: true,
        },
      });

      lines.forEach((line, index) => {
        const direction = index % 2 === 0 ? "-25%" : "25%";

        tl.to(
          line,
          {
            x: direction,
            ease: "none",
          },
          0
        );
      });
      //   GSDevTools.create({ animation: tl });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fortnite" ref={sectionRef}>
      <div
        ref={triggerRef}
        className="fortnite-font h-screen w-full bg-black text-white flex flex-col justify-center items-center overflow-hidden"
      >
        <div className="text-center mb-2">
          <Title
            title="TRENDING CATEGORIES"
            description="The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?"
          />
        </div>

        <div className="w-full flex flex-col gap-4">
          {categories.map((line, lineIndex) => (
            <div key={lineIndex} className="category-line w-full overflow-visible">
              <div className="category-line-wrapper flex items-center justify-center gap-8 whitespace-nowrap">
                {line.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className={`text-7xl font-black uppercase ${item.highlight ? "text-yellow-300" : "text-gray-700"}`}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
