import { ImAddressBook } from "react-icons/im";

export default function Card (props) {
  return (
    <div className="flex flex-col items-start bg-white px-6 py-4 rounded-md w-[80%] sm:w-[400px]">
      <ImAddressBook className="h-10 text-[#7440f7]" />
      <p className="font-[600] text-[20px] text-black">{props.index}</p>
      <p className="text-black">{props.desc}</p>
    </div>
  );
}