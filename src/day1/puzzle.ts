import * as fs from "fs";
import path from "path";
import { findDistanceBetweenLists } from "./findDistance.ts";
import { fileURLToPath } from "url";
import { findSimilarityScore } from "./findSimilarityScore.ts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type Lists = {
  list1: number[];
  list2: number[];
};

export const getParseDay1Input = (file: string) => {
  const lines = file
    .trim() // Remove leading/trailing whitespace
    .split("\n"); // Break into individual lines

  let list1: number[] = [];
  let list2: number[] = [];

  lines.forEach((line) => {
    const first = parseInt(line.substring(0, line.indexOf(" ")), 10);
    const second = parseInt(line.substring(line.indexOf(" ") + 1), 10);
    list1.push(first);
    list2.push(second);
  });

  const lists: Lists = {
    list1: list1,
    list2: list2,
  };

  return lists;
};

const filePath = path.join(__dirname, "input");
const fileContents = fs.readFileSync(filePath, "utf-8");

const lists = getParseDay1Input(fileContents);

const distance = findDistanceBetweenLists(lists.list1, lists.list2);

const score = findSimilarityScore(lists.list1, lists.list2);

console.log(`Answer is: ${distance}`);

console.log(`Score is: ${score}`);
