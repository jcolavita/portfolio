import React from "react";
import NavBar from "@/components/navBar";
import Hero from "@/components/hero";

export default function headerSection() {
  return (
    <header className=" font-sora">
      <div className="">
        <NavBar />
        <hr className=" h-[2px] bg-white" />
        <Hero />
      </div>
    </header>
  );
}
