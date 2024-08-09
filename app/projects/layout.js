"use client";
import React, { useState } from "react";
import ChevronRight from "../components/Elements/ChevronRight";
import ChevronDown from "../components/Elements/ChevronDown";
import Link from "next/link";
import { useRouter } from "next/navigation";
import VerticalLine from "../components/Elements/VerticalLine";

const Layout = ({ children }) => {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handlers for navigating to the selected project
  const handleProjectClick = (category, component) => {
    setSelectedProject(component);
    router.push(`/projects/${category}?project=${component}`);
  };

  return (
    <div className="flex flex-col md:flex-row text-neutral-200 h-screen">
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden p-4 bg-slate-900 flex justify-between items-center">
        <div className="font-bold text-xl">Projects</div>
        <button onClick={toggleSidebar} className="text-white">
          {isSidebarOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`flex flex-col justify-between w-full md:w-1/5 bg-slate-900 p-[1rem] md:p-[1.5rem] lg:p-[1.5rem] lg:pt-[1rem] lg:text-sm text-xs fixed md:relative z-20 transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="flex gap-5 flex-col text-neutral-300">
          <div>
            <h1 className="font-bold text-xl lg:text-2xl text-neutral-200">
              Projects
            </h1>
            <hr className="mt-2 border-slate-600 shadow-md" />
          </div>

          {/* APP PROJECTS STARTS */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer  ${
                openDropdown === "app_development"
                  ? "text-white text-base font-bold "
                  : ""
              }`}
              onClick={() => toggleDropdown("app_development")}
            >
              <Link href="/projects/app_development">App Development</Link>
              {openDropdown === "app_development" ? (
                <ChevronDown />
              ) : (
                <ChevronRight />
              )}
            </div>
            {openDropdown === "app_development" && (
              <div className="ml-2 mt-1 text-xs">
                <div
                  onClick={() =>
                    handleProjectClick("app_development", "ChatApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "ChatApp"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Chat App
                </div>
                <div
                  onClick={() =>
                    handleProjectClick("app_development", "ArtifyApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "ArtifyApp"
                      ? "text-sky-300 text-sm font-semibold"
                      : ""
                  }`}
                >
                  Artify App
                </div>
                <div
                  onClick={() =>
                    handleProjectClick(
                      "app_development",
                      "CosmeticsRecommendation"
                    )
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "CosmeticsRecommendation"
                      ? "text-sky-300 text-sm font-semibold"
                      : ""
                  }`}
                >
                  Cosmetics Recommendation App
                </div>
              </div>
            )}
          </div>
          {/* APP PROJECTS ENDS */}

          {/* WEB PROJECTS STARTS */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer  ${
                openDropdown === "web_development"
                  ? "text-white text-base font-bold "
                  : ""
              }`}
              onClick={() => toggleDropdown("web_development")}
            >
              <Link href="/projects/web_development">Web Development</Link>
              {openDropdown === "web_development" ? (
                <ChevronDown />
              ) : (
                <ChevronRight />
              )}
            </div>
            {openDropdown === "web_development" && (
              <div className="ml-2 mt-2 text-xs">
                <div
                  onClick={() =>
                    handleProjectClick("web_development", "CryptoApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "CryptoApp"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Crypto App
                </div>
                <div
                  onClick={() =>
                    handleProjectClick("web_development", "EcommerceApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "EcommerceApp"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Ecommerce App
                </div>
                <div
                  onClick={() =>
                    handleProjectClick("web_development", "WeatherApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "WeatherApp"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Weather App
                </div>
                <div
                  onClick={() =>
                    handleProjectClick("web_development", "SignatureApp")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "SignatureApp"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Signature App
                </div>
              </div>
            )}
          </div>
          {/* WEB PROJECTS ENDS */}

          {/* WORDPRESS PROJECTS STARTS */}
          <div>
            <div
              className={`flex justify-between items-center cursor-pointer  ${
                openDropdown === "wordpress"
                  ? "text-white text-base font-bold "
                  : ""
              }`}
              onClick={() => toggleDropdown("wordpress")}
            >
              <Link href="/projects/wordpress">WordPress</Link>
              {openDropdown === "wordpress" ? (
                <ChevronDown />
              ) : (
                <ChevronRight />
              )}
            </div>
            {openDropdown === "wordpress" && (
              <div className="ml-2 mt-2 text-xs">
                <div
                  onClick={() =>
                    handleProjectClick("wordpress", "CryptoWhitePapers")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "CryptoWhitePapers"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  CryptoWhitePapers
                </div>
                <div
                  onClick={() => handleProjectClick("wordpress", "Imonkeyss")}
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "Imonkeyss"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Imonkeyss
                </div>
                <div
                  onClick={() => handleProjectClick("wordpress", "Lartfruite")}
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "Lartfruite"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Lartfruite
                </div>
                <div
                  onClick={() => handleProjectClick("wordpress", "LetBee")}
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "LetBee"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  LetBee.co.za
                </div>
                <div
                  onClick={() =>
                    handleProjectClick("wordpress", "RoarCosmetics")
                  }
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "RoarCosmetics"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  RoarCosmetics
                </div>
                <div
                  onClick={() => handleProjectClick("wordpress", "Ssophia")}
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "Ssophia"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  Ssophia.com
                </div>
                <div
                  onClick={() => handleProjectClick("wordpress", "VisionTech")}
                  className={`block mt-1 cursor-pointer ${
                    selectedProject === "VisionTech"
                      ? "text-sky-300 text-sm font-medium"
                      : ""
                  }`}
                >
                  VisionTech Solutions
                </div>
              </div>
            )}
          </div>
          {/* WORDPRESS PROJECTS ENDS */}
        </div>
        <div className="hidden md:block">Muhammad Kamran</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-[1rem] md:p-[1.5rem] lg:p-[1.5rem] lg:pt-[2rem] bg-custom-gradient">
        {children}
      </div>
    </div>
  );
};

export default Layout;
