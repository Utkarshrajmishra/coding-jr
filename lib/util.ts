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
