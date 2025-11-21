"use client";

import { useEffect, useRef, useState } from "react";

export default function Counters() {
  const counters = [
    { number: 166, label: "App Downloads" },
    { number: 136, label: "App Downloads" },
    { number: 256, label: "App Downloads" },
    { number: 169, label: "App Downloads" },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-[#f4f4fb] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-4 gap-4 text-center w-full">
          {counters.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col gap-1 sm:gap-3 items-center ${index !== counters.length - 1 ? "border-r border-gray-300" : ""
                }`}
            >
              <h2 className="text-lg sm:text-2xl md:text-6xl font-extrabold sm:font-bold text-black">
                {isVisible ? <CountUp target={item.number} /> : "0"}+
              </h2>

              <p className="text-[9px] sm:text-lg font-semibold text-black">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------
// CountUp Component (number animation)
// ----------------------------------------------
function CountUp({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 1500; // 1.5 seconds animation
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <>{count}</>;
}
