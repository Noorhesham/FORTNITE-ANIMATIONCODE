import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import Button from "./Button";
import MaxWidthWrapper from "./MaxWidthWrapper";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ title, description, buttonText, image, reverse = false }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          scale: 5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <MaxWidthWrapper ref={sectionRef} className=" bg-black   relative overflow-hidden">
      <div className="">
        <div
          className={`flex flex-col ${
            reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center justify-between gap-12`}
        >
          {/* Content Side */}
          <div className="flex-1 z-10 h-full">
            <Title variant="medium" title={title} description={description} classNameTitle="text-center !mb-6" />
            <Button className="mt-8 w-fit mx-auto">{buttonText}</Button>
          </div>

          {/* Image Side */}
          <img ref={imageRef} src={image} alt={title} className="relative z-10 w-full max-w-lg h-full mx-auto" />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Section;
