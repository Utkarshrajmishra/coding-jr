"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import ProblemList from "./problemList";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out data-closed:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-[420px] transform transition duration-400 ease-out data-closed:-translate-x-full sm:duration-500 shadow-2xl"
            >
              <TransitionChild>
                <div className="absolute top-0 right-0 -mr-8 flex pt-4 pl-2 duration-300 ease-in-out data-closed:opacity-0 sm:-mr-10 sm:pl-4">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="relative rounded-full p-1.5 bg-white/20 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <X aria-hidden="true" className="size-5" />
                  </button>
                </div>
              </TransitionChild>

              <ProblemList setOpen={setOpen} />
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Sidebar;
