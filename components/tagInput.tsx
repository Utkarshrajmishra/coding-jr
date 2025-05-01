"use client";
import React, { useState, KeyboardEvent } from "react";
import { Badge } from "./badge";
import { FormField } from "./formField";
interface TagInputProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
  error?: string;
}

export const TagInput = ({
  tags,
  onAddTag,
  onRemoveTag,
  error,
}: TagInputProps) => {
  const [input, setInput] = useState("");

  const handleAddTag = () => {
    const trimmed = input.trim();
    if (trimmed && !tags.includes(trimmed)) {
      onAddTag(trimmed);
      setInput("");
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <FormField label="Tags" error={error}>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag, index) => (
          <Badge key={index} text={tag} onRemove={() => onRemoveTag(tag)} />
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a tag"
          className="h-10 w-full text-sm placeholder:text-sm bg-[#f9fafc] px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="h-10 px-4 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
        >
          Add
        </button>
      </div>
    </FormField>
  );
};
