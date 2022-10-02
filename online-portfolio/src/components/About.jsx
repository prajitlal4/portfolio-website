import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore optio
          inventore velit saepe impedit esse dolore, quis ipsum ducimus nam
          culpa aut fugiat tempora doloribus molestias itaque iure excepturi!
          Fugiat!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia
          sequi tenetur reiciendis consequatur error expedita. Ad similique
          dolore nisi blanditiis enim labore voluptatum doloremque, fugiat fugit
          explicabo excepturi repudiandae qui!
        </p>
      </div>
    </div>
  );
};

export default About;
