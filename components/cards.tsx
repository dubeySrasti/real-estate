"use client";
import { useRef, useState } from "react";
import PropertyCardsSlider from "./propertyCardsSlider";

export default function RecentSearchSlider() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<number | null>(0);
  const [activeArrow, setActiveArrow] = useState<"left" | "right" | null>(null);
  const [showAll, setShowAll] = useState(false);

  const tabs = [
    { label: "House", icon: "/assets/images/svg/house_fill.svg" },
    { label: "Villa", icon: "/assets/images/svg/villa.svg" },
    { label: "Apartment", icon: "/assets/images/svg/apartment.svg" },
    { label: "Apartment", icon: "/assets/images/svg/apartment.svg" }
  ];

  // SCROLL by exactly one card + gap (step-by-step)
  const scrollByCard = (direction: "left" | "right", step = 1) => {
    const container = scrollRef.current;
    if (!container) return;

    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;

    const cardWidth = firstChild.offsetWidth;
    const gapPx = 24;

    const amount = (cardWidth + gapPx) * step;

    if (direction === "left") {
      container.scrollBy({ left: -amount, behavior: "smooth" });
      setActiveArrow("left");
    } else {
      container.scrollBy({ left: amount, behavior: "smooth" });
      setActiveArrow("right");
    }
  };

  const scrollLeft = () => scrollByCard("left", 1);
  const scrollRight = () => scrollByCard("right", 1);

  return (
    <div
      className="
        py-10
        w-full
        flex flex-col
        gap-10
        px-4
        lg:pl-[clamp(40px,6vw,80px)]
        lg:pr-4
      "
    >
      {/* Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-6 sm:w-8 h-[2px] bg-[#F59E0B] rounded-full"></div>
          <h2 className="text-xs sm:text-sm font-medium text-[#F59E0B] mb-0">
            Our Recommendation
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <h3 className="text-[#170085] mb-0 text-xl sm:text-2xl md:text-[32px] whitespace-nowrap font-semibold leading-tight">
            Featured House
          </h3>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 px-0 sm:px-4 overflow-x-auto hide-scrollbar">
            {tabs.map((item, i) => {
              const isActive = activeTab === i;

              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`
                    flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2 
                    rounded-full text-sm sm:text-lg font-medium flex-shrink-0
                    border border-[#E0E3EB] transition-all duration-300
                    ${isActive ? "bg-[#D4D5FF] text-[#0E1735]" : "text-[#888B97]"}
                  `}
                >
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={`w-4 h-4 sm:w-5 sm:h-5 object-contain ${isActive ? "brightness-0" : ""}`}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Arrows - Only show on desktop (≥992px) */}
          <div className="hidden lg:flex gap-4 justify-end">
            <button
              onClick={scrollLeft}
              className={`
                md:w-13 md:h-10 lg:w-15 lg:h-13 flex justify-center items-center rounded-4xl transition
                ${activeArrow === "left" ? "bg-[#0E1735]" : "bg-[#E0E3EB]"}
              `}
            >
              <svg width="20" height="20" fill="none" stroke={activeArrow === "left" ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 4 L6 10 L12 16" />
              </svg>
            </button>

            <button
              onClick={scrollRight}
              className={`
                md:w-13 md:h-10 lg:w-15 lg:h-13 flex justify-center items-center rounded-4xl transition
                ${activeArrow === "right" ? "bg-[#0E1735]" : "bg-[#E0E3EB]"}
              `}
            >
              <svg width="20" height="20" fill="none" stroke={activeArrow === "right" ? "white" : "black"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 4 L14 10 L8 16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Property Cards Slider Component */}
      <PropertyCardsSlider ref={scrollRef} activeTab={activeTab} showAll={showAll} />

      {/* View More Button - Only visible on mobile/tablet */}
      <div className="lg:hidden flex justify-center px-4">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 bg-[#170085] hover:bg-[#407BFF] text-white rounded-full font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
        >
          {showAll ? "Show Less" : "View More"}
        </button>
      </div>
    </div>
  );
}