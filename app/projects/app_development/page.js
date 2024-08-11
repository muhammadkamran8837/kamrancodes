"use client";

import { useSearchParams } from "next/navigation";
import ArtifyApp from "./ArtifyApp";
import ChatApp from "./ChatApp";
import CosmeticsRecommendation from "./CosmeticsRecommendation";
import Image from "next/image";
import React, { Suspense } from "react";

const componentMap = {
  ArtifyApp: ArtifyApp,
  ChatApp: ChatApp,
  CosmeticsRecommendation: CosmeticsRecommendation,
};

const projectNames = {
  ArtifyApp: "Artify App",
  ChatApp: "Chat App",
  CosmeticsRecommendation: "BeautyBuddyAI",
};

const projectDescription = {
  ArtifyApp:
    "Artify App is platform for artists & fashion lovers. Artists can post arts, sell arts, take part in exhibitions and competitions",
  ChatApp:
    "ChatApp is a real-time messaging application using websockets for communication. Allows One-on-One & Group Chat and News Feed",
  CosmeticsRecommendation:
    "Developed using BST model for products recommendations based on the uploaded image by user. Model processes the image and recommends products",
};

export default function AppDevelopment() {
  const searchParams = useSearchParams();
  const selectedComponent = searchParams.get("project");

  const SelectedComponent = componentMap[selectedComponent];
  const selectedProjectName = projectNames[selectedComponent];
  const selectedProjectDescription = projectDescription[selectedComponent];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex flex-col lg:h-full h-[90vh] ">
        <div>
          <h1 className="text-xl mb-1 font-bold flex flex-row items-start">
            App Development
            {selectedProjectName && (
              <span className="ml-2 mr-2 font-thin">{">"}</span>
            )}
            {selectedProjectName && (
              <span className="font-normal text-sky-300">
                {selectedProjectName}
              </span>
            )}
          </h1>
          <p className="text-xs text-neutral-400">
            React Native | Node.js | Express.js | MongoDB OR Firebase | FastAPI
          </p>

          <p className="text-sm mt-2 mb-3">{selectedProjectDescription}</p>
        </div>

        {SelectedComponent ? (
          <div className="flex-grow overflow-y-auto scrollbar-hide ">
            <SelectedComponent />
          </div>
        ) : (
          <div className="flex-grow flex items-center justify-center">
            <div className="flex flex-col items-center text-center text-neutral-400">
              <Image
                src="/appIllustration.png"
                width={200}
                height={200}
                alt="Logo"
              />
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
