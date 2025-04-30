"use client";

import { useState, useEffect } from "react";
import CodeEditor from "@/components/editor";
import Header from "@/components/header";
import Problem from "@/components/problem";
import TestCase from "@/components/testcase";
import SubmissionStatus from "@/components/submissionStatus";
import ProblemSwitch from "@/components/problemSwitch";
function App() {
  const [submit, setSubmit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showProblem, setShowProblem] = useState(true);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <>
      <main className="h-screen flex flex-col overflow-hidden">
        <Header
          setShowProblem={setShowProblem}
          showProblem={showProblem}
          isMobile={isMobile}
        />

        <div className="flex flex-1 flex-col lg:flex-row w-full overflow-hidden">
              <div className="flex flex-row">
      <ProblemSwitch setSubmit={setSubmit}/>

          {(!isMobile || (isMobile && showProblem)) && (
            <div
              className={`${
                isMobile ? "w-full" : "w-[450px] lg:min-w-[450px]"
              }`}
            >
              {!submit ? <Problem /> : <SubmissionStatus />}
            </div>
          )}

          </div>
          {(!isMobile || (isMobile && !showProblem)) && (
            <div className="flex flex-col flex-1">
              <CodeEditor setSubmit={setSubmit} isMobile={isMobile} />
              <TestCase isMobile={isMobile} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
