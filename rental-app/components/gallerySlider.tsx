"use client";

import { useEffect, useState } from "react";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
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
    <div className="w-full max-w-6xl mx-auto">
      {/* Main Image */}
      <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-xl">
        <img
          src={images[current]}
          className="w-full h-full object-cover transition-all duration-700"
          alt="Gallery"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex gap-3 mt-4 overflow-x-auto pb-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`cursor-pointer border-2 rounded-md overflow-hidden min-w-[110px] 
              ${current === index ? "border-orange-500" : "border-transparent"}
            `}
          >
            <img
              src={img}
              className="w-[110px] h-[70px] object-cover"
              alt="thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
