"use client"
import { useState } from "react";
import { Bell, Logs } from "lucide-react";
import Sidebar from "./sidebar";
import { ChevronRight } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
const Header = () => {
   const [open,setOpen]=useState<boolean>(false)
  return (
    <section className="h-[55px] border-b border-b-neutral-200 justify-between bg-white flex items-center px-4">
      <div className="flex items-center">
        <div className="text-neutral-800 flex items-center gap-3">
          <Logs onClick={()=>setOpen(true)} className="size-5" />
          <p className="text-[0.85rem]">Problem List</p>
        </div>
        <div className="h-6 mx-3 w-[1px] bg-neutral-800"></div>

        <div className="flex items-center gap-1 text-[0.85rem] text-neutral-800">
          <p>DSA</p>
          <ChevronRight className="size-3" />
          <p>Problem</p>
          <ChevronRight className="size-3" />
          <p>Two Sum</p>
        </div>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2 mx-4 whitespace-nowrap">
          <div className="bg-zinc-700 h-4 w-4 rounded-lg">
            <Image alt="Eng" src="/usa.png" width={16} height={16} />
          </div>
          <p className="text-xs text-neutral-800">Eng (US)</p>
          <FaAngleDown className="size-3 text-zinc-500" />
        </div>
        <div className="p-2 bg-orange-50 w-fit h-fit rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg">
            <Image
              alt="User"
              src="/user.jpeg"
              width={36}
              height={46}
              className="rounded-lg object-fit"
            />
          </div>
          <div>
            <div className="flex items-center gap-6">
              <p className="text-xs text-neutral-600">Utkarsh</p>
              <FaAngleDown className="size-3 text-neutral-600" />
            </div>
            <p className="text-xs text-zinc-400">Admin</p>
          </div>
        </div>
      </div>
      <Sidebar setOpen={setOpen} open={open}/>
    </section>
  );
};

export default Header;
