"use client"
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchemaTypes, Problemschema } from "../zod/problemSchema";
import { FormField } from "./formField";
import { TagInput } from "./tagInput";
import { TestCaseInputs } from "./testcaseInput";
import { ConstraintsList } from "./constraintList";
import MarkDownEditor from "./markdowneditor";
import { useProblemContext } from "@/context/problemListContext";

export default function CodingProblemForm() {
    const [desc, setDesc]=useState<string>('# Your custom markdown here')
    const {addProblem}=useProblemContext()
  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormSchemaTypes>({
    resolver: zodResolver(Problemschema),
    defaultValues: {
      title: "",
      difficulty: "Easy",
      tags: [],
      newTag: "",
      exampleInput: "",
      exampleOutput: "",
      exampleExplanation: "",
      testCases: [
        { input: "", output: "" },
        { input: "", output: "" },
      ],
      constraints: [],
      newConstraint: "",
    },
  });

  const tags = watch("tags");
  const constraints = watch("constraints");

  const { fields: testCases, update: updateTestCase } = useFieldArray({
    control,
    name: "testCases",
  });

  const addTag = (tag: string) => {
    setValue("tags", [...tags, tag]);
  };

  const removeTag = (tagToRemove: string) => {
    setValue(
      "tags",
      tags.filter((tag) => tag !== tagToRemove)
    );
  };

  const addConstraint = (constraint: string) => {
    setValue("constraints", [...constraints, constraint]);
  };

  const removeConstraint = (index: number) => {
    const updated = [...constraints];
    updated.splice(index, 1);
    setValue("constraints", updated);
  };

  const onSubmit = (data: FormSchemaTypes) => {
    const { newTag, newConstraint, ...formData } = data;
    console.log("Form submitted:", {...formData, desc:desc});
    addProblem({id:20, title:formData.title,difficulty:formData.difficulty,tags:formData.tags,desc: desc, testCases:formData.testCases, constraints:constraints,example:{
        input:formData.exampleInput,
        output:formData.exampleOutput,
        explanation:formData.exampleExplanation || "NA"
    }})

  };

  const getErrorsForTestCases = () => {
    const testCaseErrors: { [key: string]: string } = {};

    if (errors.testCases) {
      if (errors.testCases.message) {
        testCaseErrors["testCases"] = errors.testCases.message as string;
      }

      testCases.forEach((_, index) => {
        if (errors.testCases?.[index]?.input) {
          testCaseErrors[`testCases.${index}.input`] = errors.testCases[index]
            ?.input?.message as string;
        }
        if (errors.testCases?.[index]?.output) {
          testCaseErrors[`testCases.${index}.output`] = errors.testCases[index]
            ?.output?.message as string;
        }
      });
    }

    return testCaseErrors;
  };

  return (
    <div className="w-full md:p-6 p-0">
      <div>
        <div>
          <h1 className="text-2xl font-semibold text-neutral-700">
            Create Coding Problem
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:p-6  p-2 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <FormField label="Title" error={errors.title?.message as string}>
              <input
                {...register("title")}
                className="h-10 w-full   text-sm placeholder:text-sm bg-[#f9fafc] pl-9 border-1 outline-none shadow-none rounded"
                placeholder="Problem title"
              />
            </FormField>

            <FormField
              label="Difficulty"
              error={errors.difficulty?.message as string}
            >
              <select
                {...register("difficulty")}
                className="h-10 w-full text-sm text-neutral-700 placeholder:text-xs bg-[#f9fafc] pl-9 border outline-none shadow-none rounded"
              >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </FormField>
          </div>
          <TagInput
            tags={tags}
            onAddTag={addTag}
            onRemoveTag={removeTag}
            error={errors.tags?.message as string}
          />

            <MarkDownEditor desc={desc} setDesc={setDesc}/>
          {/* <FormField label="Description" error={errors.desc?.message as string}>
            <textarea
              {...register("desc")}
              rows={6}
              className="w-full md:w-[80%] px-3 py-2 border border-gray-300 rounded-md shadow-sm 
                         focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
              placeholder="Describe the problem in detail"
            />
          </FormField> */}

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                label="Example Input"
                error={errors.exampleInput?.message as string}
              >
                <input
                  {...register("exampleInput")}
                  className=" h-10  w-full text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
                  placeholder="Input for the example"
                />
              </FormField>

              <FormField
                label="Example Output"
                error={errors.exampleOutput?.message as string}
              >
                <input
                  {...register("exampleOutput")}
                  className="h-10 w-full  text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
                  placeholder="Expected output for the example"
                />
              </FormField>
            </div>

            <FormField
              label="Explanation"
              error={errors.exampleExplanation?.message as string}
            >
              <textarea
                {...register("exampleExplanation")}
                rows={3}
                className="w-full px-3 py-2 text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
                placeholder="Explain how the example works (optional)"
              />
            </FormField>
          </div>

          <TestCaseInputs
            testCases={testCases}
            onUpdateTestCase={updateTestCase}
            errors={getErrorsForTestCases()}
          />

          <ConstraintsList
            constraints={constraints}
            onAddConstraint={addConstraint}
            onRemoveConstraint={removeConstraint}
            error={errors.constraints?.message as string}
          />

          <div className="flex justify-end pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-md shadow-sm text-sm font-medium
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                       transition-colors duration-200 disabled:bg-blue-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Creating..." : "Create Problem"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
