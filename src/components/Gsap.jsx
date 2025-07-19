import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools"; // لاستيراد أداة التحكم

gsap.registerPlugin(ScrollTrigger, GSDevTools);
const CssAnimationsDemo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="p-8 border rounded-lg bg-gray-700 text-white mb-8">
      <style>
        {`
                /* تعريف الحركات الثلاثة بشكل منفصل */
                @keyframes move-right {
                    to { transform: translateX(400px); }
                }

                @keyframes move-down-rotate {
                    to { transform: translateX(400px) translateY(100px) rotate(360deg); }
                }

                @keyframes move-back {
                    to { transform: translateX(0) translateY(0) rotate(0deg); }
                }

                .css-anim-container.is-animating .css-ball {

                    animation-name: move-right, move-down-rotate, move-back;
                    animation-duration: 1s, 1s, 1s;
                    animation-timing-function: ease-in-out, ease-in-out, ease-in-out;
                    animation-fill-mode: forwards, forwards, forwards;
                    animation-delay: 0s, 1s, 2s; /* الحركة الثانية تبدأ بعد ثانية، والثالثة بعد ثانيتين */
                }

                /* لعمل تأثير stagger، يجب أن نستهدف كل عنصر على حدة
                 ونضيف تأخير يدوي لكل حركة، وهذا أمر مرهق جداً في المشاريع الكبيرة.
                */
                .css-anim-container.is-animating .css-ball-1 {
                    animation-delay: 0s, 1s, 2s;
                }
                .css-anim-container.is-animating .css-ball-2 {
                    animation-delay: 0.2s, 1.2s, 2.2s;
                }
                .css-anim-container.is-animating .css-ball-3 {
                    animation-delay: 0.4s, 1.4s, 2.4s;
                }
                `}
      </style>
      <h2 className="text-3xl font-bold mb-4">مقارنة: نفس الأنيميشن بـ CSS فقط</h2>
      <p className="mb-6">
        هنا، نستخدم CSS Keyframes لمحاولة تقليد نفس الأنيميشن. لاحظ التعقيد في ملف الـ CSS المطلوب لترتيب الحركات وتطبيق
        تأثير الـ stagger. اضغط على الزر لبدء الأنيميشن.
      </p>

      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6"
      >
        {isAnimating ? "إعادة تعيين" : "بدء الأنيميشن"}
      </button>

      {/* عند تغيير الـ state، يتم إضافة أو إزالة كلاس is-animating */}
      <div className={`relative h-48 css-anim-container ${isAnimating ? "is-animating" : ""}`}>
        <div className="css-ball css-ball-1 w-16 h-16 rounded-full bg-blue-500 absolute"></div>
        <div className="css-ball css-ball-2 w-16 h-16 rounded-full bg-green-500 absolute top-0 left-16"></div>
        <div className="css-ball css-ball-3 w-16 h-16 rounded-full bg-red-500 absolute top-0 left-32"></div>
      </div>
    </div>
  );
};

const GsapBasics = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // كريتنا تايم لاين باي ديفولت متوقف
      const tl = gsap.timeline({ paused: true });

      // 1. Tween: هو حركة واحدة على عنصر أو أكثر
      // هنا، نحن نحرك كل الكرات إلى اليمين لان الكورة كلاس متكرر 3 مرات فهيتعامل معاهم كمصفوفه
      tl.to(".ball", {
        x: 400,
        duration: 1,
        ease: "power2.inOut",
        // stagger: بقول لكل كورة تتاخر عن الي قبلها بمقدار 0.2
        stagger: 0.2,
      });
      // 2. إضافة حركة أخرى للتايم لاين
      // ستعمل هذه الحركة بعد انتهاء الحركة الأولى
      tl.to(".ball", {
        y: 100,
        duration: 1,
        stagger: 0.2,
      });
      // 3. إضافة حركة أخيرة للعودة للمكان الأصلي
      // علامة "-=1" تعني "ابدأ هذه الحركة قبل ثانية واحدة من انتهاء الحركة السابقة"
      tl.to(
        ".ball",
        {
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.inOut",
          stagger: 0.2,
        },
        "-=1"
      );

      GSDevTools.create({ animation: tl });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="p-8 border rounded-lg bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-4">1. أساسيات GSAP: Tweens & Timelines</h2>
      <p className="mb-6">
        المفروض ان دول 3 كور وعاوز اعمل قصه من الانيمشنز المتتاليه المترتبه انا هستخدم المكتبه اني اقولها انا عاوز ايه
        بالضبط بعد ما اعمل التايم لاين
      </p>

      {/* حاوية الكرات */}
      <div className="relative h-48">
        <div className="ball w-16 h-16 rounded-full bg-blue-500 absolute"></div>
        <div className="ball w-16 h-16 rounded-full bg-green-500 absolute top-0 left-16"></div>
        <div className="ball w-16 h-16 rounded-full bg-red-500 absolute top-0 left-32"></div>
      </div>
    </div>
  );
};

// ====================================================================
// المكون الثاني: شرح الـ Scroll Triggers
// ====================================================================
const ScrollTriggerDemo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // المثال الأول: حركة بسيطة عند ظهور العنصر
      gsap.from(".box-1", {
        x: -200,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".box-1",
          start: "top 80%", // "عندما يصل أعلى العنصر إلى 80% من طول الشاشة"
          // toggleActions: "play pause resume reset"
          // ماذا تفعل عند: الدخول، الخروج، العودة للدخول، العودة للخروج
          toggleActions: "play none none reverse",
          markers: true, // لإظهار العلامات المساعدة
        },
      });
      // المثال الثاني: ربط حركة الأنيميشن بحركة السكرول (Scrub)
      gsap.to(".box-2", {
        rotation: 360,
        x: "50vw",
        duration: 3,
        scrollTrigger: {
          trigger: ".box-2",
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
          markers: { startColor: "purple", endColor: "fuchsia" },
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="p-8 border rounded-lg bg-gray-800 text-white mt-8">
      <h2 className="text-3xl font-bold mb-4">2. مشغلات السكرول (Scroll Triggers)</h2>
      <p className="mb-6">هنا نربط الأنيميشن بحركة السكرول. قم بالنزول للأسفل لترى التأثيرات.</p>

      <div className="h-screen flex items-center">
        <p className="text-2xl">استمر بالنزول...</p>
      </div>

      <div className="box-1 w-32 h-32 bg-teal-500 rounded-lg my-32"></div>

      <div className="h-64"></div>

      <div className="box-2 w-32 h-32 bg-indigo-500 rounded-lg my-32"></div>

      <div className="h-screen"></div>
    </div>
  );
};

// ====================================================================
// المكون الثالث: شرح التثبيت (Pinning)
// ====================================================================
const PinningDemo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".pin-container",
          pin: true, // <-- هذا هو الأمر السحري للتثبيت
          start: "top top",
          end: "+=1500", // "استمر بالتثبيت لمسافة 1500 بكسل من السكرول"
          scrub: 1,
          markers: true,
        },
      });

      // أثناء تثبيت الحاوية، قم بتنفيذ هذا الأنيميشن
      timeline.to(".pinned-element", {
        rotation: 360,
        scale: 2,
        x: "70vw",
        ease: "none",
      });

      GSDevTools.create({ animation: timeline });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="mt-8">
      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-2xl">القسم التالي هو قسم التثبيت. استعد...</p>
      </div>

      {/* هذه هي الحاوية التي سيتم تثبيتها */}
      <div className="pin-container h-screen w-full flex flex-col justify-center p-8 border rounded-lg bg-gray-800 text-white overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">3. التثبيت (Pinning)</h2>
        <p className="mb-6">هذا القسم سيبقى ثابتاً في الشاشة أثناء نزولك بالأسفل، بينما يتم تنفيذ أنيميشن آخر.</p>
        <div className="w-full h-full flex items-center">
          <div className="pinned-element w-32 h-32 bg-amber-500 rounded-lg"></div>
        </div>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <p className="text-2xl">لقد انتهى التثبيت! رائع.</p>
      </div>
    </div>
  );
};

// ====================================================================
// المكون الرئيسي الذي يجمع كل شيء
// ====================================================================
export default function GsapTutorialPage() {
  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white text-center mb-12">شرح GSAP </h1>
        {/* <CssAnimationsDemo />
        <GsapBasics /> */}
        <ScrollTriggerDemo />
        {/* <ScrollTriggerDemo />
        <PinningDemo /> */}
      </div>
    </div>
  );
}
