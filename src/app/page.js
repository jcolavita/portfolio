import Image from "next/image";
import Header from "@/app/sections/headerSection";
import Hero from "@/components/hero";
import Services from "@/app/sections/servicesSection";

export default function Home() {
  return (
    <div>
      <Header />

      <Services />
    </div>
  );
}
