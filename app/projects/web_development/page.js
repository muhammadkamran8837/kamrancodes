"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CryptoApp from "./CryptoApp";
import EcommerceApp from "./EcommerceApp";
import SignatureApp from "./SignatureApp";
import WeatherApp from "./WeatherApp";
import Image from "next/image";

const componentMap = {
  CryptoApp: CryptoApp,
  EcommerceApp: EcommerceApp,
  SignatureApp: SignatureApp,
  WeatherApp: WeatherApp,
};

const projectDescription = {
  CryptoApp: "Crypto app ",
  EcommerceApp: "ecommerce app",
  SignatureApp: "signature app",
  WeatherApp: "Weather app",
};

const projectNames = {
  CryptoApp: "CryptoApp",
  EcommerceApp: "EcommerceApp",
  SignatureApp: "SignatureApp",
  WeatherApp: "WeatherApp",
};

export default function WebDevelopment() {
  const searchParams = useSearchParams();
  const selectedComponent = searchParams.get("project");
  const SelectedComponent = componentMap[selectedComponent];
  const selectedProjectName = projectNames[selectedComponent];
  const selectedProjectDescription = projectDescription[selectedComponent];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col lg:h-full h-[85vh]">
        <div>
          <h1 className="text-xl mb-1 font-bold flex flex-row items-start">
            Web Development
            {selectedProjectName && (
              <>
                <span className="ml-2 mr-2 font-thin">{">"}</span>
                <span className="font-normal text-sky-300">
                  {selectedProjectName}
                </span>
              </>
            )}
          </h1>
          <p className="text-xs text-neutral-400">
            React.js | Node.js | Express.js | MongoDB OR Firebase | Next.js |
            Tailwindcss
          </p>
          <p className="text-sm mt-5 md:mt-3 mb-3 md:mb-1">
            {selectedProjectDescription}
          </p>
        </div>

        {SelectedComponent ? (
          <div className="flex-grow">
            <SelectedComponent />
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <div className="flex flex-col items-center text-center text-neutral-400">
              <Image src="/web.png" width={200} height={200} alt="Logo" />
              <p className="text-xs mt-4">
                Please select a project from the sidebar to view specific
                projects.
              </p>
            </div>
          </div>
        )}
      </div>
    </Suspense>
  );
}
