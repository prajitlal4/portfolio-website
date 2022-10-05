import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [nav, setNav] = useState();
  const links = [
    //Array of each page (id, name)
    {
      id: 1,
      name: "home",
      href: "#home",
    },
    {
      id: 2,
      name: "about",
      href: "#about",
    },
    {
      id: 3,
      name: "portfolio",
      href: "#portfolio",
    },
  ];

  const handleIconClick = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-4xl">Prajit</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div
        onClick={handleIconClick}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
