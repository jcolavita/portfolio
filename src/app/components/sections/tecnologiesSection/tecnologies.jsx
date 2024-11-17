import Image from "next/image";
import React from "react";
import csharpLogo from "../../../../../public/images/svg/csharp.svg";
import cssLogo from "../../../../../public/images/svg/css.svg";
import htmlLogo from "../../../../../public/images/svg/html.svg";
import jsLogo from "../../../../../public/images/svg/js.svg";
import nextjsLogo from "../../../../../public/images/svg/nextjs.svg";
import postgresqlLogo from "../../../../../public/images/svg/postgresql.svg";
import sqlserverLogo from "../../../../../public/images/svg/sqlserver.svg";
import tailwindLogo from "../../../../../public/images/svg/tailwind.svg";
import reactLogo from "../../../../../public/images/svg/react.svg";

export default function tecnologies() {
  return (
    <section className="md:px-16 px-8 py-14">
      <h2 className="md:text-5xl text-3xl text-center font-bold mb-5">
        Tecnologias
      </h2>
      <hr className=" h-[1px] w-full bg-white mb-5" />
      <p className="text-whote text-center mb-8 md:text-lg text-base">
        Las herramientas que nos permiten crear soluciones a medida para tu
        negocio.
      </p>
      <div className="flex justify-between">
        <Image
          src={htmlLogo}
          alt="Logo de HTML"
          width={100}
          height={100}
          title="HTML"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={cssLogo}
          alt="Logo de CSS"
          width={100}
          height={100}
          title="CSS"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={tailwindLogo}
          alt="Logo de Tailwind"
          width={100}
          height={100}
          title="TAILWIND"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={reactLogo}
          alt="Logo de NextJS"
          width={100}
          height={100}
          title="React"
          className="transition-all ease-in-out duration-300"
        />
        <Image
          src={nextjsLogo}
          alt="Logo de NextJS"
          width={100}
          height={100}
          title="NextJS"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={jsLogo}
          alt="Logo de JavaScript"
          width={100}
          height={100}
          title="JavaScript"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={csharpLogo}
          alt="Logo de c#"
          width={100}
          height={100}
          title="C#"
          className="transition-all ease-in-out duration-300"
        />
        <Image
          src={postgresqlLogo}
          alt="Logo de Postgres"
          width={100}
          height={100}
          title="postgresql"
          className=" transition-all ease-in-out duration-300"
        />
        <Image
          src={sqlserverLogo}
          alt="Logo de Sqlserver"
          width={100}
          height={100}
          title="SqlServer"
          className=" transition-all ease-in-out duration-300"
        />
      </div>
    </section>
  );
}
