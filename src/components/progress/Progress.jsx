import React from "react";
import Dotedline from "../ui/Dotedline";

export default function Progress() {
  return (
    <div className="mx-auto px-4 py-12 w-full max-w-7xl">
      <h1 className="my-20 font-bold text-4xl text-center">
        How Does Educate Work
      </h1>
      <div className="flex justify-center items-center space-x-4 mb-8">
        <div className="flex flex-col justify-center w-3/12">
          <button className="bg-green-500 hover:bg-green-700 mx-auto px-4 py-2 rounded-full w-24 h-24 font-bold text-white">
            1
          </button>
          <p className="pt-5 pl-5">
            Lorem ipsum dolor sit, amet consectetur 
          </p>
        </div>
          <div className="w-3/12">
            <Dotedline />
          </div>

          <div className="flex flex-col justify-center w-3/12">
          <button className="bg-green-500 hover:bg-green-700 mx-auto px-4 py-2 rounded-full w-24 h-24 font-bold text-white">
            1
          </button>
          <p className="pt-5 pl-5">
            Lorem ipsum dolor sit, amet consectetur 
          </p>
        </div>
          <div className="w-3/12">
            <Dotedline />
          </div>

          <div className="flex flex-col justify-center w-3/12">
          <button className="bg-green-500 hover:bg-green-700 mx-auto px-4 py-2 rounded-full w-24 h-24 font-bold text-white">
            1
          </button>
          <p className="pt-5 pl-5">
            Lorem ipsum dolor sit, amet consectetur 
          </p>
        </div>
      </div>
      <h2 className="mb-4 font-semibold text-2xl text-center">
        Join over 1,000 Satisfied Learners Today
      </h2>
      <div class="flex justify-center">
        <button className="left-50 absolute bg-blue-500 hover:bg-blue-700 m-auto px-4 py-2 rounded font-bold text-white">
          Get Started
        </button>
      </div>
    </div>
  );
}
