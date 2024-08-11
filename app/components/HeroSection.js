import React from "react";

export default function HeroSection() {
  return (
    <div
      id="Home"
      className="h-[95vh] flex flex-col items-center justify-center text-neutral-200"
    >
      <button className="mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-neutral-200 px-2 py-1 ">
        Open to Projects 🚀
      </button>
      <h1 className="lg:text-5xl text-3xl font-extrabold tracking-wide mb-4 text-center lg:w-[64vw] ">
        Crafting Digital Excellence:
        <span className="text-blue-800">Web, App, and WordPress Solutions</span>
      </h1>
      <p className="text-center  px-8 max-w-2xl">
        Your Tech Partner: Offering Expertise in Web Development, Mobile App
        Development, and WordPress using Modern Technologies including MERN,
        Next.js, React Native, Firebase, and FastAPI.
      </p>
    </div>
  );
}
