import React, { useState, useEffect } from "react";

export default function Counter() {
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);

  useEffect(() => {
    const clientsInterval = setInterval(() => {
      setClients((prev) => {
        if (prev < 20) {
          return prev + 1;
        } else {
          clearInterval(clientsInterval);
          return prev;
        }
      });
    }, 100);

    const projectsInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev < 30) {
          return prev + 1;
        } else {
          clearInterval(projectsInterval);
          return prev;
        }
      });
    }, 100);

    return () => {
      clearInterval(clientsInterval);
      clearInterval(projectsInterval);
    };
  }, []);

  return (
    <div className="flex items-center justify-evenly text-neutral-200 mb-10">
      <div className="relative text-center">
        <div className="lg:text-9xl text-6xl font-bold  relative">
          {clients}+
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 bg-opacity-75  lg:text-2xl text-xl lg:px-2 lg:py-1 px-1 py-0 rounded">
            clients
          </span>
        </div>
      </div>
      <div className="relative text-center">
        <div className=" lg:text-9xl text-6xl font-bold  relative">
          {projects}+
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 bg-opacity-75  lg:text-2xl text-xl lg:px-2 lg:py-1 px-1 py-0 rounded">
            projects
          </span>
        </div>
      </div>
    </div>
  );
}
