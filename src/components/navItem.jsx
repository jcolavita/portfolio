import React from "react";

export default function navItem({ text }) {
  return (
    <li className=" hover:-translate-y-1 hover:scale-110 transition ease-in-out">
      <a href="#">{text}</a>
    </li>
  );
}
