import type { Language, LanguageId } from "@/types";

export const LANGUAGES: Record<LanguageId, Language> = {
  python: {
    id: "python",
    name: "Python",
    tagline: "The most beginner-friendly language in the galaxy",
    icon: "🐍",
    color: "#3b82f6",
    monacoId: "python",
    defaultCode: `# Welcome to Python!\nprint("Hello, World!")`,
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    tagline: "Power the web and beyond",
    icon: "⚡",
    color: "#f59e0b",
    monacoId: "javascript",
    defaultCode: `// Welcome to JavaScript!\nconsole.log("Hello, World!");`,
  },
  java: {
    id: "java",
    name: "Java",
    tagline: "Write once, run anywhere",
    icon: "☕",
    color: "#ef4444",
    monacoId: "java",
    defaultCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}`,
  },
  sql: {
    id: "sql",
    name: "SQL",
    tagline: "Speak fluently with databases",
    icon: "🗄️",
    color: "#8b5cf6",
    monacoId: "sql",
    defaultCode: `-- Welcome to SQL!\nSELECT 'Hello, World!' AS greeting;`,
  },
  go: {
    id: "go",
    name: "Go",
    tagline: "Fast, simple, and made for the cloud",
    icon: "🚀",
    color: "#06b6d4",
    monacoId: "go",
    defaultCode: `package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello, World!")\n}`,
  },
};

export const LANGUAGE_LIST = Object.values(LANGUAGES);

export function getLanguage(id: LanguageId): Language {
  return LANGUAGES[id];
}
