import React from "react";

const Project = ({ projects }) => {
  return projects.map((project) => {
    return (
      <div className="flex flex-col mr-20 w-full">
        <div className="flex flex-row justify-between w-full items-center ">
          <h1 className="text-3xl mb-4">{project.name}</h1>
          <h1 className="text-xl">{project.languages}</h1>
        </div>
        <div className="w-full">
          <p className="text-xl">{project.description}</p>
        </div>
      </div>
    );
  });
};

export default Project;
