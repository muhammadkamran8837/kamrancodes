import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-neutral-400 gap-5">
      <Image src="/illustration.png" width={300} height={300} alt="Logo" />

      <p className="text-xs">
        Please select a category from the sidebar to view specific projects.
      </p>
    </div>
  );
}
