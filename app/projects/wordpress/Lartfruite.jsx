import ArrowUpRight from "@/app/components/Elements/ArrowUpRight";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Lartfruite() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="relative w-[100%] group">
        <Image
          src="/lartfruite.png" // Replace with the correct path to your image
          alt="Crypto White Papers Front Page"
          layout="responsive"
          width={600}
          height={450}
          className="object-cover w-full h-auto md:opacity-90 rounded-md transition-opacity duration-300 group-hover:opacity-100"
        />
        <a
          href="https://lartfruite.com/" // Replace with the correct URL
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span className="bg-blue-800 text-neutral-200 px-6 py-1 rounded-2xl flex flex-row gap-1 items-center">
            lartfruite.com <ArrowUpRight />
          </span>
        </a>
      </div>
      <button
        className="md:hidden mt-10 bg-blue-800 text-white rounded-2xl shadow-md
      shadow-slate-600 px-4 py-1"
      >
        <Link href="https://lartfruite.com//">Visit lartfruite.com</Link>
      </button>
    </div>
  );
}
