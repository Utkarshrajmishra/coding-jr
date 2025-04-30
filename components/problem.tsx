"use client"
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import { ProblemContext } from "../context/problemContext";
import { Check } from "lucide-react";
import { problems } from "@/constants/Problems";
import ProblemSwitch from "./problemSwitch";
import { getCompletedQuestions } from "@/lib/util";

const Problem = () => {
    const [solved, setSolved] = useState(false);
    const context = useContext(ProblemContext);
    if (!context) {
      throw new Error("Problem Context not found");
    }

    const { problem } = context;

    useEffect(() => {
      if (getCompletedQuestions(problems[problem.problemNo].id)) {
        setSolved(true);
      }
    }, [problem]);

  return (
    <>
      <div className="flex flex-row">
        <ProblemSwitch />
        <section className="font-inter bg-white border-r border-neutral-300 s  md:w-[450px] h-[100vh-55px] overflow-y-scroll">
          <div>
            <div className="pb-4 px-4 ">
              <div className="text-neutral-700 mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-neutral-900 font-semibold">
                    {problems[problem.problemNo].title}
                  </p>
                  <Check className="size-5 sm:size-5 text-emerald-700" />
                </div>
                <ReactMarkdown
                  components={{
                    p: ({ node, ...props }) => (
                      <p
                        className="text-sm leading-relaxed text-neutral-700 my-3"
                        {...props}
                      />
                    ),
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-lg font-semibold text-neutral-800 mt-6 mb-3"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-base font-semibold text-neutral-800 mt-5 mb-2"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul
                        className="list-disc pl-5 space-y-2 my-3"
                        {...props}
                      />
                    ),
                    ol: ({ node, ...props }) => (
                      <ol
                        className="list-decimal pl-5 space-y-2 my-3"
                        {...props}
                      />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="text-sm leading-relaxed text-neutral-700"
                        {...props}
                      />
                    ),
                    code: ({ node, ...props }) => (
                      <code
                        className="bg-neutral-100 px-1.5 py-0.5 rounded font-mono text-sm"
                        {...props}
                      />
                    ),
                  }}
                >
                  {problems[problem.problemNo].desc}
                </ReactMarkdown>
              </div>

              <div className="space-y-4 border-t border-neutral-200 pt-4">
                <p className="font-semibold text-neutral-800 text-base">
                  Example
                </p>
                <div className="bg-neutral-100 border-1 border-neutral-200 p-4 rounded-md space-y-4">
                  <div>
                    <p className="font-medium text-sm text-neutral-700 mb-1">
                      Input:
                    </p>
                    <pre className="bg-white p-2  text-zinc-800 text-xs rounded border border-neutral-200  font-mono overflow-x-auto">
                      {problems[problem.problemNo].example.input}
                    </pre>
                  </div>

                  <div>
                    <p className="font-medium text-sm text-neutral-700 mb-1">
                      Output:
                    </p>
                    <pre className="bg-white p-2 text-zinc-800 text-xs rounded border border-neutral-200  font-mono overflow-x-auto">
                      {problems[problem.problemNo].example.output}
                    </pre>
                  </div>

                  <div>
                    <p className="font-medium text-sm text-neutral-700 mb-1">
                      Explanation:
                    </p>
                    <p className="text-sm text-zinc-800 leading-relaxed">
                      {problems[problem.problemNo].example.explanation}
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-4 border-t border-neutral-200 pt-4">
                <p className="font-semibold text-neutral-800 text-base">
                  Constraints
                </p>
                <ul className="space-y-2 list-disc pl-5">
                  {problems[problem.problemNo].constraints?.map(
                    (item, index) => (
                      <li
                        key={index}
                        className="text-sm text-neutral-700 leading-relaxed"
                      >
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Problem;
