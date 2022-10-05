import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-gray-500">About</p>
        </div>
        <p className="text-xl mt-10">
          As a recent Computer Science graduate from Curtin University, I am
          passionate about learning and developing new skills in application
          development. I have experience in object oriented programming,
          mobile/web application development and algorithm design/analysis.
        </p>
        <br />
        <p className="text-xl">
          I am always looking for opportunities to further my career in software
          development. I also play video games and enjoy going out for long
          drives. These activities help me stay calm, and allow me to refocus
          onto the task afterwards. At the end of the day, there's nothing
          better than driving down a long road with a sunset view.
        </p>
      </div>
    </div>
  );
};

export default About;
