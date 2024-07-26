"use client";
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import VideoAnimation from "../components/VideoAnimation";
import MyWork from "../components/MyWork";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-custom-gradient overflow-hidden lg:overflow-visible">
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
