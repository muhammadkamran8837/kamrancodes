import Image from "next/image";
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

  // Add more paths to screenshots
];

export default function ChatApp() {
  return (
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
  );
}
