"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/assets/images/png/slider_img.png",
  "/assets/images/png/slider_img2.png",
  "/assets/images/png/slider_img3.png",
  "/assets/images/png/slider_img4.png",
  "/assets/images/png/slider_img5.png",
  "/assets/images/png/slider_img.png",
];

export default function GallerySlider() {
  const [current, setCurrent] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-white pb-7">
      {/* Main Image */}
      <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
        {/* Heart Button */}
        <button
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 flex items-center justify-center 
                    rounded-full shadow-md cursor-pointer hover:scale-105 transition-all"
        >
          <Image
            src="/assets/images/svg/heart.svg"
            alt="heart"
            width={14}
            height={12}
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-[18px] md:h-4"
          />
        </button>
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
          alt="Gallery"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-2 sm:gap-3 mt-3 sm:mt-4 overflow-x-auto pb-3 px-2 sm:px-4 md:justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden flex-shrink-0
              ${current === index ? "border-[#FFA432]" : "border-transparent"}
            `}
          >
            <img
              src={img}
              className="w-[70px] h-[50px] sm:w-[90px] sm:h-[65px] md:w-[120px] md:h-[80px] lg:w-[155px] lg:h-[100px] object-cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
