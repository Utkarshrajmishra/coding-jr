"use client"
import CodeEditor from "@/components/editor";
import Problem from "@/components/problem";
import TestCase from "@/components/testcase";
import { useEffect, useState } from "react";

export default function Home() {
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
    <section className="h-[calc(100vh-55px)] flex overflow-hidden">
      <Problem />
      <div className="flex-1">
        <CodeEditor />
        <TestCase isMobile={false}/>
      </div>
    </section>
  );
}
