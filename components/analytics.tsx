"use client";
import Card from "./card";
import {
  IoDocumentText,
  IoCart,
  IoPricetagSharp,
  IoPricetagOutline,
} from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { CiExport } from "react-icons/ci";
import { Pencil, Star } from "lucide-react";

const Data = [
  {
    id: 1,
    bgColor: "bg-[#ffe2e6]",
    icon: <FaUser className="size-4 text-white" />,
    title: "Total Users",
    desc: "+2% from yesterday",
    amount: "674",
    circleColor: "bg-red-400",
  },
  {
    id: 2,
    bgColor: "bg-[#fff4de]",
    icon: <IoPricetagSharp className="size-4 text-white" />,
    title: "Total Problems",
    desc: "+1% from yesterday",
    amount: "245",
    circleColor: "bg-orange-400",
  },
  {
    id: 3,
    bgColor: "bg-[#dcfce7]",
    icon: <Pencil className="size-4 text-white" />,
    title: "Total Problems Solved",
    desc: "+5% from yesterday",
    amount: "140",
    circleColor: "bg-green-400",
  },
  {
    id: 4,
    bgColor: "bg-[#f4e8ff]",
    icon: <Star className="size-3 text-white" />,
    title: "Total likes",
    desc: "+2% from yesterday",
    amount: "4580",
    circleColor: "bg-purple-400",
  },
];

export function Analyatics() {
  return (
    <div className="w-full lg:w-[700px] p-4 bg-white border border-gray-200 rounded-xl h-fit">
      <div className="flex flex-col sm:flex-row justify-between sm:items-end">
        <div>
          <p className="text-sm font-medium">Today&apos;s Analytics</p>
          <p className="text-xs mt-1 text-zinc-500">Analytics Summary</p>
        </div>
        <button className="bg-white flex gap-2 items-center text-xs rounded py-1 px-3 text-blue-950 border border-blue-950 mt-2 sm:mt-0 w-fit">
          <CiExport className="size-3" />
          Export
        </button>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2 mt-6">
        {Data.map((item) => (
          <div key={item.id}>
            <Card
              circleColor={item.circleColor}
              bgColor={item.bgColor}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              amount={item.amount}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
