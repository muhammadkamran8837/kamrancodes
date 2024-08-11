import SkeletonImage from "@/app/components/Elements/SkeletonImage";
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
        <SkeletonImage
          key={index}
          src={src}
          alt={`Artify screenshot ${index + 1}`}
          width={400}
          height={800} // Adjusted height to accommodate mobile screenshots
        />
      ))}
    </div>
  );
}
