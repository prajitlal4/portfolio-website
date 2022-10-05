import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  const socialMediaLinks = [
    {
      id: 1,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      name: "github",
      href: "https://github.com/prajitlal4",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      name: "linkedin",
      href: "https://www.linkedin.com/in/prajit-lal-2756ba189/",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      name: "resume",
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Prajit Resume pdf.pdf",
      style: "rounded-br-md",
    },
  ];

  return (
    <div id="home" className="h-screen w-full bg-gray-900">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center md:mr-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Hey! I'm Prajit 👋
          </h2>
          <ul className="flex">
            {socialMediaLinks.map((link) => (
              <li
                key={link.id}
                className="text-gray-400 pr-4 pb-4 hover:scale-105 duration-200 cursor-pointer"
              >
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.child}
                </a>
              </li>
            ))}
          </ul>
          <div>
            <a href="#portfolio">
              <button className="group text-white text-sm font-bold w-fit my-3 flex items-center rounded-md">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="My Profile"
            className="rounded-2xl w-sm md:max-w-sm mx-auto my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
