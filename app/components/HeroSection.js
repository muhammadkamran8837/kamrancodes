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
      <h1 className="lg:text-6xl text-3xl font-extrabold mb-4 text-center lg:w-[60vw] ">
        Transforming Ideas into Reality,
        <span className="text-blue-800">
          Your Go-To Expert for Web and App Development
        </span>
      </h1>
      <p className="text-center px-8 max-w-2xl">
        Your tech partner: specialize in creating responsive, high-performance
        websites and applications tailored to meet your business needs.My
        expertise spans across frontend development with React and Next.js,
        backend development with Node.js and Express.js, and complete e-commerce
        solutions.
      </p>
    </div>
  );
}
