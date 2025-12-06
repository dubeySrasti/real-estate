"use client";
import Image from "next/image";

export default function WhatWeMake() {
  return (
 <section className="relative bg-[#f6f6fc] pt-10 sm:pt-16  sm:pb-15 md:pb-20 pb-10 overflow-hidden">

  {/* 🌟 CENTER BACKGROUND CIRCLE (Always centered behind 5 cards) */}
  <div className="
      absolute 
      left-1/2 
      top-[60%]
      -translate-x-1/2 
      -translate-y-1/2
      w-[353px] 
      h-[353px] 
      pointer-events-none 
      z-0
  ">
    <Image
      src="/assets/images/svg/eventEllipse.svg"
      alt="Background Circle"
      fill
      className="object-contain"
    />
  </div>

  {/* CONTENT CONTAINER */}
  <div className="max-w-7xl mx-auto relative z-10">

    {/* Title */}
    <div className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-5/12 mx-auto text-center mb-12">
      <h2 className=" max-[400px]:text-xl text-3xl sm:text-[40px] font-bold text-black mb-3">
        What We Make
      </h2>
      <p className="text-black font-semibold max-[400px]:text-[10px] text-xs sm:text-xl">
        Leap Social hosts some of the largest singles events in the world!  
        Our Ai matchmaker even suggests who to speak to.
      </p>
    </div>

    {/* ⭐ 5 CARDS STRICTLY IN ONE ROW (Scroll on mobile) */}
    <div
      className="
        flex 
        gap-4 
        sm:gap-9 
        px-6 
        overflow-x-auto 
        pb-6 
        snap-x 
        snap-mandatory 
        justify-center 
        no-scrollbar
      "
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="
            rounded-2xl 
            overflow-hidden 
            flex-shrink-0 
            snap-center
            w-[160px] 
            sm:w-[213px] 
            h-[340px] 
            sm:h-[460px]
          "
        >
          <Image
            src="/assets/images/png/event_mobile_img.png"
            alt={`Event ${i}`}
            width={260}
            height={454}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>

  </div>
</section>


  );
}
