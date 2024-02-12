import { Courses } from "@/components/Courses";
import HeroSection from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import React from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col gap-5">
      <Navbar />
      <HeroSection />
      <Courses />
    </div>
  );
}
