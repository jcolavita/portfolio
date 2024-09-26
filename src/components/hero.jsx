import React from "react";
import Image from "next/image";
import Developer from "../../public/images/developer.png";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function heroSection() {
  return (
    <div className="md:mx-16 mx-8 md:flex  font-sora ">
      <div className="  md:w-1/2  pt-14 flex flex-col ">
        <text className=" md:text-6xl text-4xl md:text-left text-center font-extrabold">
          LLEVA TU NEGOCIO AL SIGUIENTE NIVEL
        </text>
        <text className=" md:text-2xl text-lg md:text-left text-center font-normal mt-3">
          Desarrollo personalizado para las necesidades de tu emrpesa{" "}
        </text>
        <button className="md:w-64 flex justify-center items-center gap-4 w-full py-[6px] mt-10 bg-white rounded-full text-black md:hover:scale-110 transition ease-in-out delay-75 hover:-translate-y-1 duration-300">
          Contactanos <IoLogoWhatsapp />
        </button>
      </div>
      <div className="relative md:w-1/2 pt-14 overflow-y-clip">
        <Image
          src={Developer}
          alt="Developer"
          className="relative md:pl-20 z-10 "
        />
        <div className=" absolute top-40 left-10 md:w-72 md:h-72 w-36 h-36 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl "></div>
        <div className=" absolute top-10 right-10 md:w-72 md:h-72 w-36 h-36 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl  "></div>
      </div>
    </div>
  );
}
