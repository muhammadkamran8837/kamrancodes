import Image from "next/image";
import React from "react";

export default function Services() {
  return (
    <div id="Services" className="text-neutral-200 mt-5">
      <h1 className="text-neutral-400">Services</h1>
      <hr className="mb-6 border-slate-600 shadow-md" />
      <div className="mb-8">
        <h2 className="text-xl lg:text-3xl font-bold mb-2">
          Transforming Visions into Reality with Innovative Digital Solutions!
        </h2>
        <p className="text-justify">
          Offering comprehensive web and app development services tailored to
          meet your business needs. From full-stack web development to
          cross-platform mobile app solutions, my expertise ensures top-notch
          results.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6 pb-10">
        <div className="relative p-6 border	 border-slate-600 rounded-lg shadow-lg mb-6 lg:mb-0 lg:mt-0 transform lg:translate-y-0 ">
          <button className="mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-slate-600 px-2 py-1 ">
            Web Development
          </button>
          <p className="text-justify">
            Full-stack web development using MERN stack and Next.js, offering
            both frontend and backend development. Deployment and maintenance
            services are also provided.
          </p>
          <div className="flex lg:justify-end mt-5">
            <Image
              src="/web.png"
              width={300}
              height={300}
              alt="Web Development"
            />
          </div>
        </div>
        <div className="relative border	 border-slate-600 p-6 rounded-lg shadow-lg transform lg:translate-y-6 ">
          <button className="mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-slate-600 px-2 py-1 ">
            Cross-platform App Development
          </button>
          <p className="text-justify">
            Cross-platform app development using React Native for the frontend
            and Node.js, Express, MongoDB, or Firebase for the backend.
          </p>
          <div className="flex lg:justify-end mt-5">
            <Image
              src="/appicon.png"
              width={300}
              height={300}
              alt="Picture of the author"
              style={{ alignSelf: "end" }}
            />
          </div>
        </div>
        <div className="relative border	 border-slate-600 p-6 rounded-lg shadow-lg lg:col-span-2 transform lg:translate-y-6">
          <button className="mb-5 bg-blue-800 text-white rounded-2xl shadow-md shadow-slate-600 px-2 py-1 ">
            WordPress
          </button>
          <p className="text-justify">
            WordPress web development including theme customization, plugins
            management, and many more services to enhance your websites
            functionality and appearance.
          </p>
          <div className="flex lg:justify-center">
            <Image
              src="/wordpress.png"
              width={300}
              height={300}
              alt="Wordpress"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
