import SkeletonImage from "@/app/components/Elements/SkeletonImage";
import React from "react";

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
        <SkeletonImage
          key={index}
          src={src}
          alt={`Cosmetics app screenshot ${index + 1}`}
          width={400}
          height={500}
        />
      ))}
    </div>
  );
}
