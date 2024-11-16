import React from "react";

export default function navItem({ ...props }) {
  return (
    <li className=" hover:-translate-y-1 hover:scale-110 transition ease-in-out my-5 md:my-0">
      <a href={props.link}>{props.text}</a>
    </li>
  );
}
