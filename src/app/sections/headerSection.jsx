import React from "react";
import NavBar from "@/components/navBar";
import Hero from "@/components/hero";

export default function headerSection() {
  return (
    <header className=" font-sora bg-black">
      <div className="">
        <NavBar />
        <Hero />
      </div>
    </header>
  );
}
