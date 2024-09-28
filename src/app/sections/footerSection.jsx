import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdMessage } from "react-icons/md";

export default function footerSection() {
  return (
    <footer className="md:px-16 px-8 bg-black pt-16 font-sora flex md:flex-col pb-8 md:pb-0 ">
      <div>
        <p className=" font-bold text-4xl">VitaCode</p>
        <p className="text-sm ">By Jose Colvita</p>
      </div>
      <div className="w-[2px] h-auto bg-white ml-5 mr-5"></div>
      <div className="flex flex-col  h-auto md:flex-row w-full md:justify-center items-start md:gap-12 gap-2 md:-mt-4">
        <button className=" text-sm flex items-center justify-between w-full ">
          Inicio <IoMdHome className="block md:hidden" />
        </button>
        <button className=" text-sm flex items-center justify-between w-full ">
          Servicios <FaLaptopCode className="block md:hidden" />
        </button>
        <button className=" text-sm flex items-center justify-between w-full ">
          Contacto <MdMessage className="block md:hidden" />
        </button>
      </div>
      <hr className="w-full h-1 pb-4 hidden md:block" />
    </footer>
  );
}
