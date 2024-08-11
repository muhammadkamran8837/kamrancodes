import React from "react";

import Image from "next/image";

const screenshots = [
  "/cosmetics1.jpeg",
  "/cosmetics2.jpeg",
  "/cosmetics3.jpeg",
  "/cosmetics4.jpeg",
  "/cosmetics5.jpeg",
];

export default function CosmeticsRecommendation() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {screenshots.map((src, index) => (
        <div
          key={index}
          className="rounded overflow-hidden shadow-lg transition-opacity duration-300"
        >
          <Image
            width={400}
            height={500}
            src={src}
            className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            alt={`Cosmetics app screenshot ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
