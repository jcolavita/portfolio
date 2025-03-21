import Image from "next/image";
import React from "react";
import appEscritorio from "../../../../../public/images/webp/app-escritorio.webp";
import appWeb from "../../../../../public/images/webp/app-web.webp";

export default function services() {
  return (
    <section
      id="services"
      className="w-full md:px-16 px-8 pt-14 pb-14 bg-white"
    >
      <h2 className="md:text-5xl text-3xl text-center font-bold mb-5 text-black">
        Servicios
      </h2>
      <hr className=" h-[2px] w-full bg-black mb-5" />
      <p className="text-black text-center mb-8 md:text-lg text-base">
        Codificamos tus sueños en realidad. ¡Descubre el poder de la tecnología
        con nosotros!
      </p>
      <div className=" flex md:flex-row flex-col justify-around gap-y-5">
        <div className="shadow-md shadow-black group md:w-[40%] w-[100%] bg-white relative rounded-xl flex overflow-hidden hover:scale-105 transition-all ease-in-out duration-200 ">
          <div className="w-full md:h-0 h-full absolute bg-black/70 md:group-hover:h-full transition-all ease-in-out duration-300"></div>
          <Image src={appEscritorio} alt="Aps de escritorio " />
          <div className="flex items-center justify-center absolute left-0 top-0 right-0 bottom-0 m-auto ">
            <h3 className=" md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-all ease-in-out duration-300  text-center font-semibold md:text-4xl text-xl  ">
              APLICACIÓN DE ESCRITORIO
            </h3>
          </div>
        </div>
        <div className="shadow-md shadow-black group md:w-[40%] w-[100%] md:hover:scale-105 transition-all ease-in-out duration-200 bg-white relative rounded-xl flex overflow-hidden ">
          <div className="w-full md:h-0 h-full absolute bg-black/70 md:group-hover:h-full transition-all ease-in-out duration-300"></div>
          <Image src={appWeb} alt="Aps de escritorio " />

          <div className="flex items-center justify-center absolute left-0 top-0 right-0 bottom-0 m-auto ">
            <h3 className=" md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-all ease-in-out duration-300  text-center  font-semibold md:text-4xl text-xl  ">
              APLICACIÓN WEB
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
