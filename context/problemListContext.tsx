"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { problemsList } from "@/constants/Problems";

// 1. Problem type
export type Problem = {
  id: number;
  title: string;
  difficulty: string;
  tags: string[];
  desc: string;
  example: {
    input: string | boolean | number;
    output: string | boolean | number;
    explanation: string | boolean | number;
  };
  testCases: {
    input: string | boolean | number;
    output: string | boolean | number;
  }[];
  constraints: string[];
};

// 2. Context Type
type ProblemContextType = {
  problems: Problem[];
  addProblem: (newProblem: Problem) => void;
  deleteProblem: (id: number) => void;
};

// 3. Create Context
const ProblemContext = createContext<ProblemContextType | undefined>(undefined);

// 4. Provider Component
export const ProblemProvider = ({ children }: { children: ReactNode }) => {
  const [problems, setProblems] = useState<Problem[]>(problemsList);

  const addProblem = (newProblem: Problem) => {
    setProblems((prev) => [...prev, newProblem]);
    console.log("success")
  };

  const deleteProblem = (id: number) => {
    setProblems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProblemContext.Provider value={{ problems, addProblem, deleteProblem }}>
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblemContext = () => {
  const context = useContext(ProblemContext);
  if (!context) {
    throw new Error("useProblemContext must be used within a ProblemProvider");
  }
  return context;
};
