"use client";
import { useState } from "react";
import { Bell, Logs, Moon, Sun } from "lucide-react";
import Sidebar from "./sidebar";
import { ChevronRight } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import Image from "next/image";
import { useTheme } from "@/context/themeContext";

type HeaderProps = {
  setShowProblem: (show: boolean) => void;
  showProblem: boolean;
  isMobile: boolean;
};

const Header = ({ setShowProblem, showProblem, isMobile }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <section className="h-[55px] border-b border-b-neutral-200 dark:border-b-neutral-700 justify-between bg-white dark:bg-gray-900 flex items-center px-4">
      <div className="flex items-center">
        <div className="text-neutral-800 dark:text-neutral-200 flex items-center gap-3">
          <Logs
            onClick={() => setOpen(true)}
            className="md:size-5 cursor-pointer"
          />
          <p className="hidden sm:inline-block text-[0.85rem]">Problem List</p>
        </div>
        <div className="h-6 hidden md:inline-block mx-3 w-[1px] bg-neutral-800 dark:bg-neutral-600"></div>
        <div className="md:flex hidden items-center gap-1 text-[0.85rem] text-neutral-800 dark:text-neutral-200">
          <p>DSA</p>
          <ChevronRight className="size-3" />
          <p>Problem</p>
          <ChevronRight className="size-3" />
          <p>Two Sum</p>
        </div>
      </div>
      <div className="flex gap-3 md:gap-6 items-center">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-neutral-700" />
          )}
        </button>

        <div className="md:flex hidden items-center gap-2 mx-4 whitespace-nowrap">
          <div className="bg-zinc-700 h-4 w-4 rounded-lg">
            <Image alt="Eng" src="/usa.png" width={16} height={16} />
          </div>
          <p className="text-xs text-neutral-800 dark:text-neutral-200">
            Eng (US)
          </p>
          <FaAngleDown className="size-3 text-zinc-500" />
        </div>
        <div className="p-2 md:inline-block hidden bg-orange-50 dark:bg-orange-950 w-fit h-fit rounded-lg">
          <Bell className="text-orange-400 h-[14px] w-[14px]" />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowProblem(!showProblem)}
            className="text-xs md:hidden inline-block p-2 bg-neutral-800 dark:bg-neutral-700 text-white rounded"
          >
            {showProblem ? "Open Editor" : "Open Problem"}
          </button>
          <div className="bg-zinc-700 h-9 w-9 rounded-lg">
            <Image
              alt="User"
              src="/user.jpeg"
              width={36}
              height={46}
              className="rounded-lg object-fit"
            />
          </div>
          <div className="hidden sm:inline-block">
            <div className="flex items-center gap-6">
              <p className="text-xs text-neutral-600 dark:text-neutral-300">
                Utkarsh
              </p>
              <FaAngleDown className="size-3 text-neutral-600 dark:text-neutral-400" />
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
      <Sidebar setOpen={setOpen} open={open} />
    </section>
  );
};

export default Header;
