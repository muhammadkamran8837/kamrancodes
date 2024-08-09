import React, { Suspense } from "react";

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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {screenshots.map((src, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg transition-opacity duration-300"
          >
            <Image
              width={400}
              height={500}
              src={src}
              className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-300"
              alt=""
            />
          </div>
        ))}
      </div>
    </Suspense>
  );
}
