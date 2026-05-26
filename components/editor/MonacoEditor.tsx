"use client";

import Editor, { useMonaco } from "@monaco-editor/react";
import { useEffect } from "react";

interface Props {
  language: string;
  value: string;
  onChange: (value: string | undefined) => void;
  theme?: string;
}

export default function MonacoEditor({ language, value, onChange }: Props) {
  const monaco = useMonaco();

  useEffect(() => {
    if (!monaco) return;

    // Register a custom dark theme that matches our brand
    monaco.editor.defineTheme("questcode-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        { token: "comment", foreground: "5a6a8a", fontStyle: "italic" },
        { token: "keyword", foreground: "c792ea" },
        { token: "string", foreground: "a3e28c" },
        { token: "number", foreground: "f78c6c" },
        { token: "type", foreground: "ffcb6b" },
        { token: "function", foreground: "82aaff" },
        { token: "variable", foreground: "eeffff" },
        { token: "operator", foreground: "89ddff" },
      ],
      colors: {
        "editor.background": "#0d0d18",
        "editor.foreground": "#cdd6f4",
        "editorLineNumber.foreground": "#3a3a55",
        "editorLineNumber.activeForeground": "#6c47ff",
        "editor.lineHighlightBackground": "#1a1a2e",
        "editorCursor.foreground": "#6c47ff",
        "editor.selectionBackground": "#6c47ff40",
        "editor.inactiveSelectionBackground": "#6c47ff20",
        "editorIndentGuide.background": "#2a2a3d",
        "editorGutter.background": "#0d0d18",
        "scrollbarSlider.background": "#2a2a3d80",
        "scrollbarSlider.hoverBackground": "#3a3a5580",
      },
    });
  }, [monaco]);

  return (
    <Editor
      height="100%"
      language={language}
      value={value}
      onChange={onChange}
      theme="questcode-dark"
      options={{
        fontSize: 14,
        fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
        fontLigatures: true,
        lineHeight: 22,
        padding: { top: 16, bottom: 16 },
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",
        automaticLayout: true,
        tabSize: 4,
        insertSpaces: true,
        renderLineHighlight: "line",
        smoothScrolling: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: "on",
        contextmenu: false,
        suggest: { showMethods: true, showFunctions: true },
        quickSuggestions: { other: true, comments: false, strings: false },
      }}
    />
  );
}
