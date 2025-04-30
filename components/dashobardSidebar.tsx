"use client";
import { GoChevronDown } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { LuLibrary } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosNotificationsOutline, IoMdClose } from "react-icons/io";

const NavLinks = [
  {
    id: 1,
    title: "Dashboard",
    icon: <RxDashboard className="size-5" />,
  },
  {
    id: 2,
    title: "My Library",
    icon: <LuLibrary className="size-5" />,
  },
  {
    id: 3,
    title: "Notifications",
    icon: <IoIosNotificationsOutline className="size-5" />,
  },
  {
    id: 4,
    title: "Settings",
    icon: <CiSettings className="size-5" />,
  },
  {
    id: 5,
    title: "Billing",
    icon: <MdOutlineAttachMoney className="size-5" />,
  },
];

type DashboardSidebarProps={
  closeSidebar:()=>void;
}

const DashboardSidebar = ({ closeSidebar }: DashboardSidebarProps) => {
  return (
    <section className="w-[250px] border-r border-r-slate-200 flex flex-col bg-white h-screen">
      <div className="p-4 flex justify-between items-center">
        <div className="font-poppins flex justify-between items-center bg-slate-50 text-slate-700 hover:text-slate-900 hover:cursor-pointer py-2 px-4 text-center border border-slate-200 rounded-lg transition-all duration-200">
          <span className="text-sm">Utkarsh's Workshop</span>
          <GoChevronDown className="size-4" />
        </div>

        {/* Close button for mobile only */}
        <button
          onClick={closeSidebar}
          className="md:hidden text-slate-600 hover:text-slate-900"
        >
          <IoMdClose className="size-6" />
        </button>
      </div>

      <section className="mt-4 px-4">
        <p className="text-neutral-500 text-xs font-semibold uppercase tracking-wider mb-3 ml-1">
          Menu
        </p>

        {NavLinks?.map((link, index) => (
          <div
            key={link.id}
            className={`p-2 flex gap-4 rounded-lg cursor-pointer transition-all duration-200 mt-1 ${
              index === 0
                ? "bg-slate-100 text-slate-900 font-medium"
                : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
            }`}
          >
            <div className={index === 0 ? "text-slate-800" : "text-slate-500"}>
              {link.icon}
            </div>
            <p className="text-sm font-poppins">{link.title}</p>
          </div>
        ))}
      </section>

      <div className="flex-1 flex flex-col justify-end p-4">
        <section className="bg-slate-50 border border-slate-200 rounded-lg font-poppins overflow-hidden shadow-sm">
          <div className="p-2 flex items-center gap-3">
            <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium">
              UM
            </div>
            <div>
              <p className="text-sm text-slate-800">Utkarsh Raj Mishra</p>
              <p className="text-xs text-slate-500 truncate">
                utkarshrajmishra811545@gmail.com
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DashboardSidebar;
