"use client";
import CodeMirror from "@uiw/react-codemirror";

type CodeMirrorProps = {
  value: string;
  editorHeight: string;
  onChange: (value: string) => void;
  language: any;
};

const CodeMirrorEditor = ({
  value,
  editorHeight,
  onChange,
  language,
}: CodeMirrorProps) => {
  return (
    <CodeMirror
      value={value}
      theme="dark"
      width="100%"
      height={editorHeight}
      extensions={language}
      onChange={onChange}
    />
  );
};

export default CodeMirrorEditor;
