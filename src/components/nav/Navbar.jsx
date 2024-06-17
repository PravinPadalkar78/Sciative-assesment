"use client"
import React from 'react'
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, DialogPanel } from "@headlessui/react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Programs", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Admission", href: "#" },
  { name: "Testimonial", href: "#" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="top-0 z-50 absolute inset-x-0 justify-center">
    <nav
      className="flex justify-between items-center lg:px-36 p-6"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          <img className="w-40 h-10" src="/logo.svg" alt="" />
        </a>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="inline-flex justify-center items-center -m-2.5 p-2.5 rounded-md text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="text-gray-700 sr-only">Open main menu</span>
          <Bars3Icon className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div className="lg:flex gap-x-5 lg:gap-x-10 hidden">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="font-semibold text-gray-900 text-sm leading-6"
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="lg:flex lg:flex-1 lg:justify-evenly hidden">
        <button
          href="#"
          className="border-2 border-sky-500 sm:mr-3 ml-8 px-2 rounded w-20 font-semibold text-gray-900 text-sm leading-6"
        >
          Log in
        </button>
        <button type="button" className="focus:outline-none bg-green-700 hover:bg-green-800 dark:hover:bg-green-700 dark:bg-green-600 mb-2 px-5 py-2.5 rounded-lg font-medium text-white focus:ring-4 focus:ring-green-300 text-sm me-2 dark:focus:ring-green-800">Register</button>
       
      </div>
    </nav>
    <Dialog
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="z-50 fixed inset-0" />
      <DialogPanel className="right-0 z-50 fixed inset-y-0 bg-white px-6 py-6 w-full sm:max-w-sm overflow-y-auto sm:ring-1 sm:ring-gray-900/10">
        <div className="flex justify-between items-center">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-black sr-only">Your Company</span>
          </a>
          <button
            type="button"
            className="-m-2.5 p-2.5 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block hover:bg-gray-50 -mx-3 px-3 py-2 rounded-lg font-bold text-base text-gray-900 leading-7"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <a
                href="#"
                className="block hover:bg-gray-50 -mx-3 mr-1 px-4 py-2.5 rounded-lg font-semibold text-base text-gray-900 leading-7"
              >
                Log in
              </a>
              <button type="button" className="focus:outline-none bg-green-700 hover:bg-green-800 dark:hover:bg-green-700 dark:bg-green-600 mb-2 px-5 py-2.5 rounded-lg font-medium text-white focus:ring-4 focus:ring-green-300 text-sm me-2 dark:focus:ring-green-800">Register</button>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
  )
};