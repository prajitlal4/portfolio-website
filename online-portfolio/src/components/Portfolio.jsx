import React from "react";
import Project from "./Project";

const projects = [
  {
    name: "Workload Allocation Tracker",
    description:
      "A web based application for managing staff workload. Has 3 different user types with unique views. Uses a custom Excel reader plugin to grab data from spreadsheet and ingest into application. Stores data in a database which is then pulled to display information onto front end. Has the ability to send notification emails using Python SMTP mail.",
    languages: "Vue.js, Python, MySQL",
  },
];

const Portfolio = () => {
  return (
    <div name="about" className="w-full h-full bg-gray-900 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20 pb-4">
          <p className="text-4xl font-bold inline border-gray-500">Portfolio</p>
        </div>
        <Project projects={projects} />
      </div>
    </div>
  );
};

export default Portfolio;
