import { createContext, useState } from "react";

type ProblemType = {
  problemNo: number;
  runCode: boolean;
};

type ProblemContextType = {
  problem: ProblemType;
  setProblem: React.Dispatch<React.SetStateAction<ProblemType>>;
};

type ProblemContextProviderProps = {
  children: React.ReactNode;
};

export const ProblemContext = createContext<ProblemContextType | null>(null);

export const ProblemContextProvider = ({
  children,
}: ProblemContextProviderProps) => {
  const [problem, setProblem] = useState<ProblemType>({
    problemNo: 0,
    runCode: false,
  });

  return (
    <ProblemContext.Provider value={{ problem, setProblem }}>
      {children}
    </ProblemContext.Provider>
  );
};
