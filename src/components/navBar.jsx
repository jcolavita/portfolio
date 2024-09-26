import React from "react";
import NavItem from "@/components/navItem";

export default function navBar() {
  return (
    <div className="mx-16">
      <nav className=" flex w-full justify-between pt-8">
        <text className=" text-lg">VitaCode</text>
        <ul className="flex gap-12 text-base">
          <NavItem text="Inicio" />
          <NavItem text="Servicios" />
          <NavItem text="Contacto" />
        </ul>
      </nav>
    </div>
  );
}
