import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export const getDefaultCode = (lang: string): string => {
  switch (lang) {
    case "python":
      return "print('Hello, world!')";
    case "cpp":
      return '#include <iostream>\nint main() {\n  std::cout << "Hello, world!";\n  return 0;\n}';
    case "c":
      return '#include <stdio.h>\nint main() {\n  printf("Hello, world!\\n");\n  return 0;\n}';
    case "java":
      return 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}';
    default:
      return "console.log('hello world!');";
  }
};

export const languageExtensions: { [key: string]: any } = {
  javascript: javascript({ jsx: true }),
  python: python(),
  cpp: cpp(),
  java: java(),
};

export const setCode = (code: string, problemId: number, lang: string) => {
  const solution = {
    problemId,
    code,
    lang,
  };
  const existingSolutions = JSON.parse(
    localStorage.getItem("solutions") || "[]"
  );

  const updatedSolutions = existingSolutions.filter(
    (item: any) => item.problemId !== problemId
  );

  updatedSolutions.push(solution);

  localStorage.setItem("solutions", JSON.stringify(updatedSolutions));
};

export const markComplete = (questionId: number) => {
  const questions: number[] = JSON.parse(
    localStorage.getItem("solved") || "[]"
  );

  if (!questions.includes(questionId)) {
    questions.push(questionId);
    localStorage.setItem("solved", JSON.stringify(questions));
  }
};

export const getCompletedQuestions = (questionId: number) => {
  const questions: number[] = JSON.parse(
    localStorage.getItem("solved") || "[]"
  );

  if (questions.includes(questionId)) {
    return true;
  }
  return false;
};


  export const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-emerald-50 text-emerald-700 border border-emerald-200";
      case "medium":
        return "bg-amber-50 text-amber-700 border border-amber-200";
      case "hard":
        return "bg-rose-50 text-rose-700 border border-rose-200";
      default:
        return "bg-blue-50 text-blue-700 border border-blue-200";
    }
  };


  export const getTagColor = (index: number) => {
      const colors = [
        "bg-violet-50 text-violet-700 border border-violet-200",
        "bg-sky-50 text-sky-700 border border-sky-200",
        "bg-indigo-50 text-indigo-700 border border-indigo-200",
        "bg-fuchsia-50 text-fuchsia-700 border border-fuchsia-200",
        "bg-teal-50 text-teal-700 border border-teal-200",
      ];
      return colors[index % colors.length];
    };
