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
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden">
        {/* Heart Button */}
        <button
          className="absolute top-4 right-4 z-20 bg-white w-11 h-11 flex items-center justify-center 
                    rounded-full shadow-md cursor-pointer hover:scale-105 transition-all"
        >
          <Image
            src="/assets/images/svg/heart.svg"
            alt="heart"
            width={18}
            height={16}
          />
        </button>
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
          alt="Gallery"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-3 justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden min-w-[110px] 
              ${current === index ? "border-[#FFA432]" : "border-transparent"}
            `}
          >
            <img
              src={img}
              className="w-[155px] h-[100px] object-cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
