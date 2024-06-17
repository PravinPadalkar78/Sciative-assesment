import React from "react";
import Product from "@/components/courses/Product.jsx";

export default function Courses() {
  return (
    <div className="mt-100 w-11/12 section" >
      <div className="flex justify-between items-center mx-auto mb-32 py-10 w-4/5">
        <h1 className="font-bold text-2xl">New Course</h1>
        <button className="bg-blue-500 px-4 py-2 rounded text-white">
          Explore Courses
        </button>
      </div>  
      <Product />
    </div>
  );
}
