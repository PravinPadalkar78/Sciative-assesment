import { GrValidate } from "react-icons/gr";
import React from "react";
import Table from "@/components/table/Table.jsx";
const TableSection = () => {
  return (
    <div className="flex m-auto py-16 w-9/12">
      <div className="flex md:flex-row flex-col h-screen">
        <section className="p-1 sm:p-8 w-full md:w-1/2">
          <h1 className="mt-12 mb-10 font-bold text-3xl">Get The Seat Price</h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam earum, laborum vitae corporis hic quisquam quod. Ipsam voluptas eos, ut aperiam optio quo nihil.
          </p>
          <div className="flex items-center mb-2">
          <GrValidate className="mr-2 h-10 text-[#7440f7]" />
            <h2 className="font-bold text-xl">Heading Title</h2>
          </div>
          <p className="mb-1">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi neque dolorem molestiae libero quas autem.
          </p>
          <div className="flex items-center mb-2">
          <GrValidate className="mr-2 h-10 text-[#7440f7]" />
            <h2 className="font-bold text-xl">Heading Title</h2>
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, iure!
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded font-bold text-white">
            Learn More
          </button>
        </section>

        <section className="bg-gray-100 mt-2 p-1 sm:p-8 w-full md:w-1/2">
          <div className="p-8">
            <Table />
          </div>
        </section>
      </div>
    </div>
  );
};

export default TableSection;
