"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CryptoWhitePapers from "./CryptoWhitePapers";
import Imonkeyss from "./Imonkeyss";
import Lartfruite from "./Lartfruite";
import LetBee from "./LetBee";
import RoarCosmetics from "./RoarCosmetics";
import Ssophia from "./Ssophia";
import VisionTech from "./VisionTech";
import Image from "next/image";

const componentMap = {
  CryptoWhitePapers: CryptoWhitePapers,
  Imonkeyss: Imonkeyss,
  Lartfruite: Lartfruite,
  LetBee: LetBee,
  RoarCosmetics: RoarCosmetics,
  Ssophia: Ssophia,
  VisionTech: VisionTech,
};

const projectDescription = {
  CryptoWhitePapers:
    "CryptoWhitePapers Online provides white-papers of all cryptocurrencies at one place",
  Imonkeyss:
    "Imonkeyss helps you calculate the repairing cost of your apple products",
  Lartfruite: "Ecommerce vegetables store for fresh vegetables in one click",
  LetBee: "LetBee introduces a software for honeybees care and management",
  RoarCosmetics: "Ecommerce store for cosmetics products",
  Ssophia:
    "Ecommerce store for Copper products like Cups, all are handcrafted products",
  VisionTech:
    "Visiontech Consulting, delivers high-quality technology and digital consultancy services.",
};

const projectNames = {
  CryptoWhitePapers: "CryptoWhitePapers",
  Imonkeyss: "Imonkeyss.com",
  Lartfruite: "Lartfruite Vegetables Store",
  LetBee: "Letbee.co.za",
  RoarCosmetics: "RoarCosmetics",
  Ssophia: "Ssophia Ecommerce Store",
  VisionTech: "VisionTech Solutions",
};

export default function Wordpress() {
  const searchParams = useSearchParams();
  const selectedComponent = searchParams.get("project");

  const SelectedComponent = componentMap[selectedComponent];
  const selectedProjectName = projectNames[selectedComponent];
  const selectedProjectDescription = projectDescription[selectedComponent];

  return (
    <div className="flex flex-col h-full">
      <div>
        <h1 className="text-xl mb-1 font-bold flex flex-row items-start">
          WordPress
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
          Theme Customization | Speed Optimization | Elementor | Plugins
          Configuration
        </p>

        <p className="text-sm mt-2 mb-3">{selectedProjectDescription}</p>
      </div>
      {SelectedComponent ? (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex-grow">
            <SelectedComponent />
          </div>
        </Suspense>
      ) : (
        <div className="flex-grow flex items-center justify-center">
          <div className="flex flex-col items-center text-center text-neutral-400">
            <Image src="/wordpress.png" width={200} height={200} alt="Logo" />
            <p className="text-xs mt-4">
              Please select a project from the sidebar to view specific
              projects.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
