import { describe, expect, test } from "@jest/globals";
import { findDistanceBetweenLists } from "./findDistance.ts";

describe("Day 1 Puzzle", () => {
  describe("Part 1", () => {
    test("find distance between lists", () => {
      const list1 = [3, 2, 1];
      const list2 = [4, 3, 2];

      const list3 = [1, 1, 1];
      const list4 = [1, 1, 1];

      const list5 = [15, 10, 5];
      const list6 = [20, 15, 10];

      const res1 = findDistanceBetweenLists(list1, list2);
      const res2 = findDistanceBetweenLists(list3, list4);
      const res3 = findDistanceBetweenLists(list5, list6);

      expect(res1).toBe(3);
      expect(res2).toBe(0);
      expect(res3).toBe(15);
    });
  });
  describe("Part 2", () => {});
});
