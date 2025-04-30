"use client";
import { Bell, Mail, Pencil, Search, Menu } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";

type DashboardHeaderProps = {
  toggleSidebar: () => void;
};


const DashboardHeader = ({ toggleSidebar }:DashboardHeaderProps) => {
  return (
    <section className="h-[55px] w-full border-b border-b-neutral-200 justify-between bg-white flex items-center px-4">
      <div className="flex items-center">
        {/* Hamburger menu for mobile */}
        <button
          onClick={toggleSidebar}
          className="mr-3 md:hidden focus:outline-none"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5 text-neutral-700" />
        </button>

        <div className="text-neutral-700 flex items-center gap-3">
          <p className="hidden sm:inline-block font-semibold">Dashboard</p>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        {/* Search - hidden on smallest screens */}
        <div className="relative text-xs overflow-hidden max-w-sm border rounded hidden sm:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-600 h-4 w-4" />
          <input
            placeholder="Search here..."
            className="h-8 w-full md:w-[300px] lg:w-[400px] text-xs placeholder:text-xs bg-[#f9fafc] pl-9 border-none outline-none shadow-none rounded"
          />
        </div>

        {/* Language selector - hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 mx-4 whitespace-nowrap">
          <div className="bg-zinc-700 h-4 w-4 rounded-lg">
            <Image alt="Eng" src="/usa.png" width={16} height={16} />
          </div>
          <p className="text-xs text-neutral-800">Eng (US)</p>
          <FaAngleDown className="size-3 text-zinc-500" />
        </div>

        {/* Notification icon - hidden on mobile */}
        <div className="p-2 hidden md:inline-block bg-orange-50 w-fit h-fit rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>

        {/* Pencil icon - shown on all screens */}
        <div className="p-2 bg-emerald-50 w-fit h-fit rounded-lg">
          <Pencil className="text-emerald-400 cursor-pointer h-[14px] w-[14px]" />
        </div>

        {/* User profile */}
        <div className="flex items-center gap-2">
          <div className="bg-zinc-700 h-9 w-9 rounded-lg">
            <Image
              alt="User"
              src="/user.jpeg"
              width={36}
              height={36}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="hidden sm:inline-block">
            <div className="flex items-center gap-6">
              <p className="text-xs text-neutral-600">Utkarsh</p>
              <FaAngleDown className="size-3 text-neutral-600" />
            </div>
            <p className="text-xs text-zinc-400">Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
