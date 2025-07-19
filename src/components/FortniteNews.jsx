import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { SplitText } from "gsap/SplitText";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Button from "./Button";
import Title from "./Title";
import { GSDevTools } from "gsap/all";

const newsData = [
  {
    id: 1,
    imageUrl: "/n1.jpg",
    category: "V26.30 UPDATE",
    title: "FORTNITEMARES 2023 DAWNS IN THE FORTNITE BATTLE ROYALE",
  },
  {
    id: 2,
    imageUrl: "/n2.jpg",
    category: "SEP 27, 2023",
    title: "UPCOMING FORTNITE PRICING ALIGNMENT IN - OCTOBER 2023",
  },
  {
    id: 3,
    imageUrl: "/n3.webp",
    category: "V26.20 UPDATE",
    title: "THE FORTNITE SAVE THE WORLD HOTFIX HOMEBASE STATUS REPORT",
  },
];

export default function FortniteNewsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: ".textnews",
          start: "top 85%",
        },
      });

      timeLine

        .from(".news-card", {
          opacity: 0,
          scale: 3.2,
          xPercent: -50,
          duration: 0.8,
          stagger: 0.08,
          rotate: 10,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".news-grid",
            start: "top 80%",
          },
        })
        .from(".button-news", {
          opacity: 0,
          scale: 2.2,
          xPercent: -50,
          duration: 0.8,
          stagger: 0.2,
          rotate: 10,

          ease: "power3.out",
        });
      // GSDevTools.create({ animation: timeLine });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="fortnite-font overflow-hidden bg-black text-white">
      <MaxWidthWrapper>
        <Title
          classNameTitle="textnews"
          title="NEWS"
          description="The fate of the Island's at stake in Fortnite Battle Royale Chapter 4 Season 4, and thievery's the last resort. Are you in?"
        />

        <div className="news-grid grid grid-cols-1 justify-center md:grid-cols-3 gap-6">
          {newsData.map((item) => (
            <div key={item.id} className="news-card group relative  overflow-hidden cursor-pointer">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm lg:text-base fortnite text-yellow-200 tracking-widest">{item.category}</p>
                <h3 className="text-2xl mt-1 font-bold fortnite ">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-6 mx-auto w-fit button-news">VIEW ALL</Button>
      </MaxWidthWrapper>
    </div>
  );
}
