"use client";
import NavItem from "@/components/navItem";
import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" sticky top-0 z-50 ">
      <nav className="md:px-16 px-8   md:flex w-full justify-between pt-8 items-center bg-black ">
        <div className="flex justify-between ">
          <text className=" text-lg">VitaCode</text>
          <button
            className="transition-all ease-in-out duration-500 md:cursor-default opacity-100 md:opacity-0"
            name="menu"
            onClick={toggleMenu}
          >
            <IoIosMenu size={32} />
          </button>
        </div>
        <ul
          className={`md:flex md:gap-12 text-base  md:opacity-100  md:static absolute bg-black md:w-auto w-full left-0 pl-8 md:pl-0 transition-all ease-in-out duration-500 ${
            isOpen ? "top-[61px] opacity-100" : "top-[-400px] opacity-0"
          }`}
        >
          <NavItem text="Inicio" />
          <NavItem text="Servicios" />
          <NavItem text="Contacto" />
        </ul>
      </nav>
      <hr className=" h-[2px] bg-white" />
    </div>
  );
};

export default NavBar;
