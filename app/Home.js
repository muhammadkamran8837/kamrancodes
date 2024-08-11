"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MyWork from "./components/MyWork";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import VideoAnimation from "./components/VideoAnimation";

export default function Home() {
  return (
    <>
      <div className="bg-custom-gradient lg:overflow-visible">
        <div className="container">
          <Header />
          <HeroSection />
          <VideoAnimation />
          <Services />
          <MyWork />
          <Testimonials />
        </div>
        <Footer />
      </div>
    </>
  );
}
