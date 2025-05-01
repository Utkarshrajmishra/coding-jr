export const problemsList = [
  {
    id: 1,
    title: "Merge Strings Alternately",
    difficulty: "Easy",
    tags: ["Two Pointers", "String"],
    desc: `
You are given two strings \`word1\` and \`word2\`.

Merge the strings by adding letters in alternating order, starting with \`word1\`.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
`,
    example: {
      input: "word1: abc, word2: pqr",
      output: "apbqcr",
      explanation: "Merge alternately: a from word1, p from word2, etc.",
    },
    testCases: [
      { input: "word1: ab, word2: pqrs", output: "apbqrs" },
      { input: "word1: abcd, word2: pq", output: "apbqcd" },
    ],
    constraints: [
      "1 <= word1.length, word2.length <= 100",
      "word1 and word2 consist of lowercase English letters",
    ],
  },
  {
    id: 2,
    title: "Reverse a String",
    difficulty: "Easy",
    tags: ["Two Pointers", "String"],
    desc: `
Write a function that reverses a string.

The input string is given as an array of characters \`s\`.

You must do this by modifying the input array in-place with O(1) extra memory.
`,
    example: {
      input: 's: ["h", "e", "l", "l", "o"]',
      output: '["o", "l", "l", "e", "h"]',
      explanation: "The array is reversed in-place.",
    },
    testCases: [
      {
        input: 's: ["H", "a", "n", "n", "a", "h"]',
        output: '["h", "a", "n", "n", "a", "H"]',
      },
      { input: 's: ["a", "b"]', output: '["b", "a"]' },
    ],
    constraints: [
      "1 <= s.length <= 10^5",
      "s[i] is a printable ascii character.",
    ],
  },
  {
    id: 3,
    title: "Sum of Two Integers",
    difficulty: "Easy",
    tags: ["Math", "Bit Manipulation"],
    desc: `
Calculate the sum of two integers \`a\` and \`b\` without using the operators \`+\` and \`-\`.

You can use bitwise operations to perform the addition.
`,
    example: {
      input: "a: 1, b: 2",
      output: 3,
      explanation: "Sum is 3 without using '+' or '-'.",
    },
    testCases: [
      { input: "a: 2, b: 3", output: 5 },
      { input: "a: -1, b: 1", output: 0 },
    ],
    constraints: ["-1000 <= a, b <= 1000"],
  },
  {
    id: 4,
    title: "Valid Parentheses",
    difficulty: "Easy",
    tags: ["Stack", "String"],
    desc: `
Given a string \`s\` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:  
- Open brackets are closed by the same type of brackets.  
- Open brackets are closed in the correct order.
`,
    example: {
      input: "s: ()[]{}",
      output: true,
      explanation: "The input has valid matching parentheses.",
    },
    testCases: [
      { input: "s: (]", output: false },
      { input: "s: ([)]", output: false },
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only."],
  },
  {
    id: 5,
    title: "Longest Common Prefix",
    difficulty: "Easy",
    tags: ["String"],
    desc: `
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

All given inputs are in lowercase letters a-z.
`,
    example: {
      input: 'strs: ["flower", "flow", "flight"]',
      output: "fl",
      explanation: "Common prefix is 'fl'.",
    },
    testCases: [
      { input: 'strs: ["dog", "racecar", "car"]', output: "" },
      {
        input: 'strs: ["interspecies", "interstellar", "interstate"]',
        output: "inters",
      },
    ],
    constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200"],
  },
  {
    id: 6,
    title: "Palindrome Number",
    difficulty: "Easy",
    tags: ["Math"],
    desc: `
Given an integer \`x\`, return \`true\` if \`x\` is a palindrome, and \`false\` otherwise.
`,
    example: {
      input: "x: 121",
      output: true,
      explanation: "121 reads as 121 from left to right and right to left.",
    },
    testCases: [
      { input: "x: -121", output: false },
      { input: "x: 10", output: false },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
  },
  {
    id: 7,
    title: "Fibonacci Number",
    difficulty: "Easy",
    tags: ["Recursion", "Dynamic Programming"],
    desc: `
The Fibonacci numbers are the numbers in the following integer sequence: 0, 1, 1, 2, 3, 5, 8, ...

Given \`n\`, calculate \`F(n)\`.
`,
    example: {
      input: "n: 5",
      output: 5,
      explanation:
        "F(5) = 5 using F(0) = 0, F(1) = 1, and F(n) = F(n-1) + F(n-2).",
    },
    testCases: [
      { input: "n: 2", output: 1 },
      { input: "n: 10", output: 55 },
    ],
    constraints: ["0 <= n <= 30"],
  },
  {
    id: 8,
    title: "Count the Number of Digits",
    difficulty: "Easy",
    tags: ["Math"],
    desc: `
Given an integer \`n\`, count how many digits in \`n\` divide \`n\`.

Each digit must be non-zero and \`n % digit == 0\`.
`,
    example: {
      input: "n: 121",
      output: 2,
      explanation: "Digits 1 and 1 divide 121; 2 does not.",
    },
    testCases: [
      { input: "n: 1012", output: 3 },
      { input: "n: 12", output: 2 },
    ],
    constraints: ["1 <= n <= 10^9"],
  },
  {
    id: 9,
    title: "Check if Two Strings Are Anagrams",
    difficulty: "Easy",
    tags: ["Hash Table", "String"],
    desc: `
Given two strings \`s\` and \`t\`, return \`true\` if \`t\` is an anagram of \`s\`, and \`false\` otherwise.
`,
    example: {
      input: "s: anagram, t: nagaram",
      output: true,
      explanation: "Both strings contain the same characters in any order.",
    },
    testCases: [
      { input: "s: rat, t: car", output: false },
      { input: "s: listen, t: silent", output: true },
    ],
    constraints: [
      "1 <= s.length, t.length <= 5 * 10^4",
      "s and t consist of lowercase English letters.",
    ],
  },
  {
    id: 10,
    title: "Maximum Number of Words Found in Sentences",
    difficulty: "Easy",
    tags: ["Array", "String"],
    desc: `
A sentence is a string of words separated by single spaces.  

You are given an array of strings \`sentences\`, where each \`sentences[i]\` is a single sentence.  

Return the maximum number of words that appear in a single sentence.
`,
    example: {
      input:
        'sentences: ["Alice and Bob love LeetCode", "I think so too", "This is great thanks very much"]',
      output: 7,
      explanation: '"This is great thanks very much" contains 7 words.',
    },
    testCases: [
      {
        input:
          'sentences: ["Please wait", "Continue to fight", "Return home safe"]',
        output: 3,
      },
      {
        input: 'sentences: ["Hello", "This is a test sentence"]',
        output: 5,
      },
    ],
    constraints: [
      "1 <= sentences.length <= 100",
      "1 <= sentences[i].length <= 100",
      "sentences[i] consists only of lowercase and uppercase English letters and spaces.",
      "Only a single space separates the words in sentences[i].",
    ],
  },
];
