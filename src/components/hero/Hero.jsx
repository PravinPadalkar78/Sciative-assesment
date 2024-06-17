"use client";
import react from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  
  return (
    <div className="bg-gray-100 Hero">
      <div className="relative px-6 lg:px-8 pt-14 isolate">
        <div className="mx-auto py-5 sm:py-5 lg:py-10 max-w-2xl">
          <div className="text-center">
            <h1 className="mt-12 font-bold text-4xl text-gray-900 sm:text-6xl tracking-tight">
              Get The Best Online Learning Service
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, autem aperiam quisquam rem aut nihil omnis molestiae hic eos vel tempore fuga cumque quam nemo amet, nam, quas nisi optio!
            </p>
            <div className="flex justify-center items-center gap-x-6 my-5">
              <a
                href="#"
                className="bg-indigo-600 hover:bg-indigo-500 shadow-sm px-3.5 py-2.5 rounded-md font-semibold text-sm text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start a course
              </a>
            </div>
            <div className="z-10 demo">
            <img className="w-auto aspect-auto" src="/demo.avif" alt="" />
            </div>
            <div className="bottom-1 -left-32 -z-50 absolute overflow-hidden e-learning">
            <img className="w-72 aspect-auto" src="/E-learning.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
