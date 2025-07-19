import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const Title = ({ title, description, classNameTitle, variant = "default" }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mySplitText = new SplitText(descriptionRef.current, { type: "lines" });
      const lines = mySplitText.lines;
      const mySplitTextTitle = new SplitText(titleRef.current, { type: "chars", charsClass: "animated-word" });
      const chars = mySplitTextTitle.chars;

      const timeLine = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
        },
      });
      timeLine
        .to(chars, {
          ease: "power3.out",
          transform: `translate3d(0,0,0) rotateY(0deg) rotateX(0deg)`,
          duration: 1,
          stagger: 0.05,
          opacity: 1,
        })
        .from(
          lines,
          {
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
            y: 100,
          },
          "<"
        );
    });
    return () => ctx.revert();
  }, []);

  const titleSizes = {
    default: "text-7xl sm:text-9xl",
    small: "text-4xl sm:text-6xl",
    medium: "text-5xl sm:text-7xl",
  };

  const descriptionSizes = {
    default: "text-lg",
    small: "text-base",
    medium: "text-lg",
  };

  return (
    <div className="text-center mb-12">
      <h2 ref={titleRef} className={`${titleSizes[variant]} clip fortnite tracking-wider uppercase ${classNameTitle}`}>
        {title}
      </h2>
      <p ref={descriptionRef} className={`text-gray-400 mt-2 clip ${descriptionSizes[variant]}`}>
        {description}
      </p>
    </div>
  );
};

export default Title;
