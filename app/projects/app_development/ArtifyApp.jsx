import Image from "next/image";
import React from "react";

const screenshots = [
  "/artify0.jpeg",
  "/artify1.jpeg",
  "/artify2.jpeg",
  "/artify3.jpeg",
  "/artify4.jpeg",
  "/artify5.jpeg",
  "/artify6.jpeg",
  "/artify7.jpeg",
  "/artify8(1).jpeg",
  "/artify8.jpeg",
  "/artify9.jpeg",
  "/artify10.jpeg",
  "/artify11.jpeg",
  "/artify12.jpeg",
  "/artify13.jpeg",
  "/artify14.jpeg",
  "/artify15.jpeg",
  "/artify16.jpeg",
  "/artify17.jpeg",
  "/artify18.jpeg",
  "/artify19.jpeg",
  "/artify20.jpeg",
  "/artify21.jpeg",
];

export default function ArtifyApp() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {screenshots.map((src, index) => (
        <div
          key={index}
          className="rounded overflow-hidden shadow-lg transition-opacity duration-300"
        >
          <Image
            width={400}
            height={800} // Adjusted height to accommodate mobile screenshots
            src={src}
            className="w-full h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
            alt={`Artify screenshot ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
