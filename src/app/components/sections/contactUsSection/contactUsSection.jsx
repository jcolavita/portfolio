import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function contactUsSection() {
  return (
    <section id="contact" className="md:flex ">
      <div className=" md:px-16 px-8 pt-10 pb-10 bg-white md:w-[60%] text-black">
        <h2 className="  md:text-4xl text-3xl font-bold ">
          Contáctanos con un clic
        </h2>
        <p className="md:text-lg text-base mt-3">
          ¿Necesitas algo en particular? ¡Tenemos lo que buscas!
        </p>
        <a
          href="https://wa.me/584120440885"
          target="blank"
          className="md:w-56 flex justify-center items-center gap-4 w-full py-[6px] mt-3  bg-BLUE_700  text-white md:hover:scale-110 transition ease-in-out delay-75 hover:-translate-y-1 duration-300"
        >
          Contactar <IoLogoWhatsapp />
        </a>
      </div>
      <div className="md:w-[40%] bg-BLUE_700 d:px-16 px-8 pt-10 text-white">
        <h3 className="md:text-xl text-base mt-3 font-semibold">
          Información de contacto
        </h3>
        <div className="md:flex gap-8 mt-10">
          <div className="pb-5 md:pb-0">
            <p className=" font-medium">Número</p>
            <p className=" font-light text-sm">+58 412-044 08 85</p>
          </div>
          <div className="h-auto bg-white w-[2px] hidden md:block" />
          <hr className=" w-full block md:hidden bg-white" />
          <div className="pb-10 md:pb-0 pt-5 md:pt-0">
            <p className="font-medium ">Correo</p>
            <p className=" font-light text-sm">Joseacp57@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
