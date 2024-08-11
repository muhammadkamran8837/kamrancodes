import SkeletonImage from "@/app/components/Elements/SkeletonImage";
import React from "react";

const screenshots = [
  "/chatapp1.png",
  "/chatapp2.png",
  "/chatapp3.png",
  "/chatapp4.png",
  "/chatapp5.png",
  "/chatapp6.png",
  "/chatapp7.png",
  "/chatapp8.png",
  "/chatapp9.png",
  "/chatapp10.png",
];

export default function ChatApp() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {screenshots.map((src, index) => (
        <SkeletonImage
          key={index}
          src={src}
          alt={`Chat app screenshot ${index + 1}`}
          width={400}
          height={500}
        />
      ))}
    </div>
  );
}
