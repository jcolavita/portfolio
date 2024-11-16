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
        Sercicios
      </h2>
      <hr className=" h-[2px] w-full bg-black mb-5" />
      <p className="text-black text-center mb-8 md:text-lg text-base">
        Codificamos tus sueños en realidad. ¡Descubre el poder de la tecnología
        con nosotros!
      </p>
      <div className=" flex justify-around">
        <div className=" group md:w-[40%] w-[45%] bg-white relative rounded-xl flex overflow-hidden hover:scale-105 transition-all ease-in-out duration-200 ">
          <div className="w-full md:h-0 h-full absolute bg-black/70 md:group-hover:h-full transition-all ease-in-out duration-300"></div>
          <Image src={appEscritorio} alt="Aps de escritorio " />

          <h3 className=" md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-all ease-in-out duration-300  md:w-[350px] w-auto md:h-10 h-20 absolute left-0 right-0 bottom-0 top-0 m-auto text-center font-semibold md:text-4xl text-xl  ">
            APLICACION DE ESCRITORIO
          </h3>
        </div>
        <div className=" group md:w-[40%] w-[45%] md:hover:scale-105 transition-all ease-in-out duration-200 bg-white relative rounded-xl flex overflow-hidden ">
          <div className="w-full md:h-0 h-full absolute bg-black/70 md:group-hover:h-full transition-all ease-in-out duration-300"></div>
          <Image src={appWeb} alt="Aps de escritorio " />

          <h3 className=" md:group-hover:opacity-100 md:opacity-0 opacity-100 transition-all ease-in-out duration-300  md:w-[300px] w-auto h-10 absolute left-0 right-0 bottom-0 top-0 m-auto text-center font-semibold md:text-4xl text-xl  ">
            APLICACION WEB
          </h3>
        </div>
      </div>
    </section>
  );
}
