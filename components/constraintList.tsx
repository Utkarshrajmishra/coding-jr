import React, { useState, KeyboardEvent } from "react";
import { FormField } from "./formField";

interface ConstraintsListProps {
  constraints: string[];
  onAddConstraint: (constraint: string) => void;
  onRemoveConstraint: (index: number) => void;
  error?: string;
}

export const ConstraintsList = ({
  constraints,
  onAddConstraint,
  onRemoveConstraint,
  error,
}:ConstraintsListProps) => {
  const [input, setInput] = useState("");

  const handleAddConstraint = () => {
    const trimmed = input.trim();
    if (trimmed && !constraints.includes(trimmed)) {
      onAddConstraint(trimmed);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddConstraint();
    }
  };

  return (
    <FormField label="Constraints" error={error}>
      <div className="mb-2 border rounded-md divide-y divide-gray-200 bg-gray-50">
        {constraints.length > 0 ? (
          constraints.map((constraint, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 group"
            >
              <span className="text-sm text-gray-700">{constraint}</span>
              <button
                type="button"
                onClick={() => onRemoveConstraint(index)}
                className="text-gray-400 hover:text-red-600 focus:outline-none 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                aria-label="Remove constraint"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          ))
        ) : (
          <div className="px-4 py-3 text-sm text-gray-500 italic">
            No constraints added yet.
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a constraint"
          className="h-10 w-full  text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
        />
        <button
          type="button"
          onClick={handleAddConstraint}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium
                   hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                   transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </FormField>
  );
};
