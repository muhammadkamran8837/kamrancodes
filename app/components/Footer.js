import React from "react";

export default function Footer() {
  return (
    <footer
      id="Contact"
      className=" lg:h-[350px] bg-slate-900 mt-20 text-neutral-200 pt-10 rounded-tl-full rounded-tr-full justify-between"
    >
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="font-extrabold text-3xl tracking-wide">LET'S TALK</h1>
        <h1>kamrankhanmashwani@gmail.com</h1>
      </div>
      <div className="flex items-center justify-center  gap-5 mt-20 flex-col lg:flex-row">
        <p className="text-xs">Copyrights © 2024 – Kamran Codes</p>
        <button className=" bg-blue-800 text-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 w-[150px] ">
          <a href="https://github.com/muhammadkamran8837"> Github</a>
        </button>
        <button className=" bg-blue-800 text-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1 w-[150px]  ">
          <a href="https://www.linkedin.com/in/mkamran-webdev/"> LinkedIn</a>
        </button>
        <button className=" bg-blue-800 text-white rounded-2xl shadow-sm shadow-slate-600 px-3 py-1  w-[150px] ">
          <a href="https://www.fiverr.com/users/mkamran306"> Fiverr</a>
        </button>
        <p className="text-xs">Made with 🤍 by Kamran</p>
      </div>
    </footer>
  );
}
