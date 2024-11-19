import React from "react";
import ProjectsCard from "./projectsCard";
import Image from "next/image";
import Code from "../../../../../public/images/code.jpg";

export default function projectsSection() {
  return (
    <section className="">
      <div className="md:px-16 px-8 py-14 text-white">
        {" "}
        <h2 className="md:text-5xl text-3xl text-center font-bold mb-5">
          Nuestros Proyectos
        </h2>
        <hr className=" h-[1px] w-full bg-white mb-5" />
        <p className=" text-center mb-8 md:text-lg text-base">
          Estos son algunos de nuestros clientes
        </p>
        <ProjectsCard />
      </div>
      <div className="bg-white w-full  md:pr-16  md:flex items-center gap-10 text-black">
        <Image src={Code} alt="as" className="md:w-[45%] w-full" />
        <div className="flex flex-col md:text-left text-center md:px-0 md:py-0 px-8 py-12">
          <h2 className=" md:text-5xl text-3xl  font-bold ">
            Software a medida para tu negocio.
          </h2>
          <hr className=" h-[2px]  bg-black my-5" />
          <p className=" md:text-lg text-base ">
            Nuestro compromiso es ofrecerte software de alta calidad, eficiente
            y escalable. Cada línea de código es cuidadosamente diseñada para
            garantizar el máximo rendimiento.
          </p>
        </div>
      </div>
    </section>
  );
}
