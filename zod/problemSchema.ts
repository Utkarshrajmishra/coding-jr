import {z} from "zod"

export const Problemschema = z.object({
  title: z.string().min(1),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  tags: z.array(z.string().min(1)),
  newTag: z.string().optional(),
  exampleInput: z.string().min(1),
  exampleOutput: z.string().min(1),
  exampleExplanation: z.string().optional(),
  testCases: z
    .array(
      z.object({
        input: z.string().min(1),
        output: z.string().min(1),
      })
    )
    .length(2),
  constraints: z.array(z.string().min(1)),
  newConstraint: z.string().optional(),
});

export type FormSchemaTypes = z.infer<typeof Problemschema>;