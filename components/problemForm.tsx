"use client";

import type React from "react";
import { useState } from "react";
import { X } from "lucide-react";

export default function CodingProblemForm() {
  const [title, setTitle] = useState("Merge Strings Alternately");
  const [difficulty, setDifficulty] = useState("Easy");
  const [tags, setTags] = useState(["Two Pointers", "String"]);
  const [newTag, setNewTag] = useState("");
  const [description, setDescription] =
    useState(`You are given two strings \`word1\` and \`word2\`.

Merge the strings by adding letters in alternating order, starting with \`word1\`.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.`);
  const [exampleInput, setExampleInput] = useState("word1: abc, word2: pqr");
  const [exampleOutput, setExampleOutput] = useState("apbqcr");
  const [exampleExplanation, setExampleExplanation] = useState(
    "Merge alternately: a from word1, p from word2, etc."
  );
  const [testCases, setTestCases] = useState([
    { input: "word1: ab, word2: pqrs", output: "apbqrs" },
    { input: "word1: abcd, word2: pq", output: "apbqcd" },
  ]);
  const [constraints, setConstraints] = useState([
    "1 <= word1.length, word2.length <= 100",
    "word1 and word2 consist of lowercase English letters",
  ]);
  const [newConstraint, setNewConstraint] = useState("");

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()]);
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const updateTestCase = (
    index: number,
    field: "input" | "output",
    value: string
  ) => {
    const updatedTestCases = [...testCases];
    updatedTestCases[index] = { ...updatedTestCases[index], [field]: value };
    setTestCases(updatedTestCases);
  };

  const addConstraint = () => {
    if (newConstraint.trim() && !constraints.includes(newConstraint.trim())) {
      setConstraints([...constraints, newConstraint.trim()]);
      setNewConstraint("");
    }
  };

  const removeConstraint = (constraintToRemove: string) => {
    setConstraints(
      constraints.filter((constraint) => constraint !== constraintToRemove)
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      title,
      difficulty,
      tags,
      desc: description,
      example: {
        input: exampleInput,
        output: exampleOutput,
        explanation: exampleExplanation,
      },
      testCases,
      constraints,
    };

    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mx-auto py-10">
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-4xl mx-auto border rounded-lg shadow-lg">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Create Coding Problem</h2>
            <p>Fill in the details to create a new coding problem.</p>
          </div>
          <div className="p-4 space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter problem title"
                required
                className="border rounded-md p-2 w-full"
              />
            </div>

            {/* Difficulty */}
            <div className="space-y-2">
              <label htmlFor="difficulty">Difficulty</label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="border rounded-md p-2 w-full"
              >
                <option value="" disabled>Select difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <label htmlFor="tags">Tags</label>
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                  <div key={index} className="flex items-center gap-1 border rounded-md p-1">
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-xs rounded-full hover:bg-primary/20"
                    >
                      <X size={14} />
                      <span className="sr-only">Remove {tag}</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  id="tags"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag"
                  className="border rounded-md p-2 w-full"
                />
                <button type="button" onClick={addTag} className="border rounded-md p-2">
                  Add
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter problem description"
                className="border rounded-md p-2 w-full min-h-[150px]"
                required
              />
            </div>

            {/* Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Example</h3>
              <div className="space-y-2">
                <label htmlFor="exampleInput">Input</label>
                <input
                  id="exampleInput"
                  value={exampleInput}
                  onChange={(e) => setExampleInput(e.target.value)}
                  placeholder="Example input"
                  required
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="exampleOutput">Output</label>
                <input
                  id="exampleOutput"
                  value={exampleOutput}
                  onChange={(e) => setExampleOutput(e.target.value)}
                  placeholder="Example output"
                  required
                  className="border rounded-md p-2 w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="exampleExplanation">Explanation</label>
                <textarea
                  id="exampleExplanation"
                  value={exampleExplanation}
                  onChange={(e) => setExampleExplanation(e.target.value)}
                  placeholder="Example explanation"
                  className="border rounded-md p-2 w-full"
                />
              </div>
            </div>

            {/* Test Cases - Exactly 2 as specified */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Test Cases (2)</h3>

              {/* Test Case 1 */}
              <div className="p-4 border rounded-md space-y-4">
                <h4 className="font-medium">Test Case 1</h4>
                <div className="space-y-2">
                  <label htmlFor="testCase1Input">Input</label>
                  <input
                    id="testCase1Input"
                    value={testCases[0].input}
                    onChange={(e) => updateTestCase(0, "input", e.target.value)}
                    placeholder="Test case input"
                    required
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="testCase1Output">Output</label>
                  <input
                    id="testCase1Output"
                    value={testCases[0].output}
                    onChange={(e) =>
                      updateTestCase(0, "output", e.target.value)
                    }
                    placeholder="Test case output"
                    required
                    className="border rounded-md p-2 w-full"
                  />
                </div>
              </div>

              {/* Test Case 2 */}
              <div className="p-4 border rounded-md space-y-4">
                <h4 className="font-medium">Test Case 2</h4>
                <div className="space-y-2">
                  <label htmlFor="testCase2Input">Input</label>
                  <input
                    id="testCase2Input"
                    value={testCases[1].input}
                    onChange={(e) => updateTestCase(1, "input", e.target.value)}
                    placeholder="Test case input"
                    required
                    className="border rounded-md p-2 w-full"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="testCase2Output">Output</label>
                  <input
                    id="testCase2Output"
                    value={testCases[1].output}
                    onChange={(e) =>
                      updateTestCase(1, "output", e.target.value)
                    }
                    placeholder="Test case output"
                    required
                    className="border rounded-md p-2 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Constraints */}
            <div className="space-y-2">
              <label htmlFor="constraints">Constraints</label>
              <div className="space-y-2 mb-2">
                {constraints.map((constraint, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1 p-2 border rounded-md">
                      {constraint}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeConstraint(constraint)}
                      className="border rounded-md p-1"
                    >
                      <X size={16} />
                      <span className="sr-only">Remove constraint</span>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  id="constraints"
                  value={newConstraint}
                  onChange={(e) => setNewConstraint(e.target.value)}
                  placeholder="Add a constraint"
                  className="border rounded-md p-2 w-full"
                />
                <button type="button" onClick={addConstraint} className="border rounded-md p-2">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 border-t">
            <button type="submit" className="ml-auto border rounded-md p-2">
              Create Problem
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

