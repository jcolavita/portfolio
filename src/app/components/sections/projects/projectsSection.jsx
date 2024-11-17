import React from "react";
import ProjectsCard from "./projectsCard";

export default function projectsSection() {
  return (
    <section className="md:px-16 px-8 py-14 text-white">
      <h2 className="md:text-5xl text-3xl text-center font-bold mb-5">
        Nuestros Proyectos
      </h2>
      <hr className=" h-[1px] w-full bg-white mb-5" />
      <p className="text-whote text-center mb-8 md:text-lg text-base">
        Estos son algunos de nuestros clientes
      </p>
      <ProjectsCard />
    </section>
  );
}
