"use client";
import { useContext } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import {
  X,
  ListFilter,
  Search,
  Code,
  Star,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { problems } from "@/constants/Problems";
import { ProblemContext } from "../context/problemContext";
import { getDifficultyColor, getTagColor } from "@/lib/util";

type SidebarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("Sidebar must be used within a ProblemContextProvider");
  }

  const { setProblem } = context;

  const handleProblemChange = (index: number) => {
    setProblem({
      runCode: false,
      problemNo: index,
    });
    setOpen(false);
  };

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

              <div className="flex font-inter h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="relative flex-1">
                  <div className="">
                    {problems?.map((item, index) => (
                      <div
                        onClick={() => handleProblemChange(index)}
                        key={index}
                        className="hover:bg-neutral-50 border-t py-2 px-6  border-neutral-300 bg-white  transition-all duration-200 cursor-pointer hover:border-blue-200 group"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex items-start gap-3">
                            <div>
                              <p className="text-md text-neutral-700  transition-colors duration-200">
                                {item.title}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-1">
                                <span
                                  className={`text-xs rounded-xl h-[20px] px-3 flex items-center ${getDifficultyColor(
                                    item.difficulty
                                  )}`}
                                >
                                  {item.difficulty}
                                </span>

                                {item.tags?.map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className={`text-xs items-center flex h-[20px] px-3 rounded-full font-medium ${getTagColor(
                                      tagIndex
                                    )}`}
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-neutral-700 transition-colors duration-200 mt-1" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default Sidebar;
