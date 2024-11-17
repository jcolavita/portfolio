"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import projectsJson from "@/app/json/projects.json";

export default function ProjectsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(projectsJson);
  });

  return (
    <div>
      {data && (
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item) => (
            <div
              className=" relative group md:hover:scale-105 transition-all ease-in-out duration-300 rounded-lg overflow-hidden"
              key={item.id}
            >
              <div className="w-full  bg-black/85 absolute md:h-0 h-full md:group-hover:h-full transition-all ease-in-out duration-200" />
              <Image
                alt={item.alt}
                src={item.imagen}
                width={1500}
                height={1500}
                className="w-full h-auto "
              />
              <div className="text-center md:opacity-0 md:group-hover:opacity-100 transition-all ease-in-out duration-300 flex flex-col items-center justify-center absolute left-0 top-0 right-0 bottom-0 m-auto ">
                <h3 className=" font-bold md:text-4xl text-2xl text-white   ">
                  {item.empresa}
                </h3>
                <hr className="w-[75%] bg-white h-[1px] my-2" />
                <p className=" md:text-lg text-base">{item.service}</p>
                <p className=" font-light md:text-base text-sm">
                  {item.description}
                </p>
              </div>
              <a
                href={item.link}
                target="blank"
                className={`bg-white px-5 shadow shadow-white md:hover:scale-110 text-black rounded-full absolute bottom-5 right-10 md:opacity-0 md:group-hover:opacity-100 transition-all ease-in-out duration-300 ${
                  item.link === "" ? "hidden" : ""
                }`}
              >
                Visitar
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
