import React, { useState } from "react";
import Image from "next/image";

export default function SkeletonImage({ src, alt, width, height }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded overflow-hidden shadow-lg transition-opacity duration-300 relative">
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <Image
        width={width}
        height={height}
        src={src}
        className={`w-full h-auto object-contain transition-opacity duration-300 ${
          loaded ? "opacity-90 hover:opacity-100" : "opacity-0"
        }`}
        alt={alt}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
