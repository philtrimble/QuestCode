import type { Lesson } from "@/types";
import { pythonLessons } from "./python";
import { javascriptLessons } from "./javascript";
import { javaLessons } from "./java";
import { sqlLessons } from "./sql";
import { goLessons } from "./go";

export const ALL_LESSONS: Record<string, Lesson> = {
  ...pythonLessons,
  ...javascriptLessons,
  ...javaLessons,
  ...sqlLessons,
  ...goLessons,
};
