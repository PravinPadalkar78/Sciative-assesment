import React from "react";
import { TbPageBreak } from "react-icons/tb";
export default function Product() {
  return (
    <div className="flex flex-wrap mx-auto pt-2 w-9/12">
      <div className="bg-white shadow-md mx-auto rounded-lg w-full max-w-sm overflow-hidden">
        <div className="relative">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src="/image2.jpg"
            alt="Product Image"
          />
          <div className="right-0 bottom-0 absolute flex space-x-2 p-2">
            <button className="bg-white shadow px-3 py-1 rounded text-black">
              Software
            </button>
            <button className="bg-green-500 shadow px-3 py-1 rounded text-white">
              $79.00 USD
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-2 font-bold text-xl">Native Mac Apps in Swift</h2>
          <p className="mb-4 text-gray-700">
            Learn how to create native macOS applications using Swift. This
            course covers all the basics and advanced topics.
          </p>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src="/person.jpg " alt="Icon 1" className="rounded-full w-6 h-6" />
              <span className="text-gray-600">By Pravin Padalkar</span>
            </div>
            <div className="flex items-center space-x-2">
              
              <TbPageBreak  className="w-6 h-6" />
              <span className="text-gray-600">3 lessons</span>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white shadow-md mx-auto pt-2 rounded-lg w-full max-w-sm overflow-hidden">
        <div className="relative">
          <img
            className="rounded-t-lg w-full h-48 object-cover"
            src="/image1.avif"
            alt="Product Image"
          />
          <div className="right-0 bottom-0 absolute flex space-x-2 p-2">
            <button className="bg-white shadow px-3 py-1 rounded text-black">
              Software
            </button>
            <button className="bg-green-500 shadow px-3 py-1 rounded text-white">
              $79.00 USD
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-2 font-bold text-xl">Native Mac Apps in Swift</h2>
          <p className="mb-4 text-gray-700">
            Learn how to create native macOS applications using Swift. This
            course covers all the basics and advanced topics.
          </p>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <img src="/person.jpg" alt="Icon 1" className="rounded-full w-6 h-6" />
              <span className="text-gray-600">By Pravin Padalkar</span>
            </div>
            <div className="flex items-center space-x-2">
            <TbPageBreak  className="w-6 h-6" />
              <span className="text-gray-600">3 lessons</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
