import CodeEditor from "@/components/editor";
import Problem from "@/components/problem";
import TestCase from "@/components/testcase";

export default function Home() {
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
