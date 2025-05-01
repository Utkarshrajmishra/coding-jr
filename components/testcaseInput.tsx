import React from "react";
import { FormField } from "./formField";

interface TestCase {
  input: string;
  output: string;
}

interface TestCaseInputsProps {
  testCases: TestCase[];
  onUpdateTestCase: (index: number, testCase: TestCase) => void;
  errors?: { [key: string]: string };
}

export const TestCaseInputs = ({
  testCases,
  onUpdateTestCase,
  errors = {},
}: TestCaseInputsProps) => {
  return (
    <div className="space-y-4">
      {testCases.map((testCase, index) => (
        <div key={index}>
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Test Case {index + 1}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField label="Input" error={errors[`testCases.${index}.input`]}>
              <textarea
                value={testCase.input}
                onChange={(e) =>
                  onUpdateTestCase(index, {
                    ...testCase,
                    input: e.target.value,
                  })
                }
                placeholder="Input for test case"
                className="w-full px-3 py-2 text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
                rows={3}
              />
            </FormField>

            <FormField
              label="Expected Output"
              error={errors[`testCases.${index}.output`]}
            >
              <textarea
                value={testCase.output}
                onChange={(e) =>
                  onUpdateTestCase(index, {
                    ...testCase,
                    output: e.target.value,
                  })
                }
                placeholder="Expected output for test case"
                className="w-full px-3 py-2  text-sm placeholder:text-sm bg-[#f9fafc] pl-4 border-1 outline-none shadow-none rounded"
                rows={3}
              />
            </FormField>
          </div>
        </div>
      ))}
    </div>
  );
};
