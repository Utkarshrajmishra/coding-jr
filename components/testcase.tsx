"use client"
import { useContext, useState, useEffect } from "react";
import { AiFillCode } from "react-icons/ai";
import { ProblemContext } from "../context/problemContext";
import { Check } from "lucide-react";
import { useProblemContext } from "@/context/problemListContext";

type TestCaseProps = {
  isMobile: boolean;
};

const TestCase = ({ isMobile }: TestCaseProps) => {
  const {problems}=useProblemContext()
  const [activeTest, setActiveTest] = useState(0);
  const [testSectionHeight, setTestSectionHeight] = useState(
    "calc(100vh - 349px)"
  );

  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("Problem Context not found");
  }

  const { problem } = context;

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 768) {
        setTestSectionHeight("calc(100vh - 249px)");
      } else {
        setTestSectionHeight("calc(100vh - 349px)");
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <section
      className="border-t border-neutral-300 bg-neutral-100 flex flex-col flex-grow overflow-hidden"
      style={{ height: isMobile ? "auto" : testSectionHeight }}
    >
      <div className="h-10 px-3 sm:px-4 border-b border-neutral-200 flex items-center gap-2 bg-white">
        <AiFillCode className="size-4 sm:size-5 text-neutral-600" />
        <p className="text-neutral-700 text-xs sm:text-sm font-medium">
          Test Cases
        </p>
      </div>

      <div className="flex border-b overflow-y-scroll border-neutral-200 bg-white overflow-x-auto">
        {problems[0].testCases?.map((_, index:number) => (
          <button
            key={index}
            className={`px-2 sm:px-4 flex items-center gap-1 sm:gap-2 text-xs sm:text-[0.83rem] py-2 font-medium transition-colors ${
              activeTest === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-neutral-600 hover:bg-neutral-50"
            }`}
            onClick={() => setActiveTest(index)}
          >
            Case {index + 1}
            {problem.runCode && (
              <Check className="size-3 sm:size-4 text-emerald-700" />
            )}
          </button>
        ))}
      </div>

      {problems[0].testCases && problems[0].testCases.length > 0 && (
        <div className="p-2 sm:p-4 overflow-auto flex-1">
          <div className="bg-white rounded-md border border-neutral-200 shadow-sm">
            <div className="p-2 sm:p-3 border-b border-neutral-200">
              <p className="text-xs font-medium text-neutral-500 mb-1 sm:mb-2">
                INPUT:
              </p>
              <pre className="bg-neutral-50 text-zinc-800 p-1.5 sm:p-2 text-xs rounded border border-neutral-200 font-mono overflow-x-auto whitespace-pre-wrap">
                {problems[problem.problemNo].testCases[activeTest].input}
              </pre>
            </div>

            <div className="p-2 sm:p-3">
              <p className="text-xs font-medium text-neutral-500 mb-1 sm:mb-2">
                EXPECTED OUTPUT:
              </p>
              <pre className="bg-neutral-50 text-zinc-800 text-light p-1.5 sm:p-2 text-xs rounded border border-neutral-200 font-mono overflow-x-auto whitespace-pre-wrap">
                {problems[problem.problemNo].testCases[activeTest].output}
              </pre>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestCase;
