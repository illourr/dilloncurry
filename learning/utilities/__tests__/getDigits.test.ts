import { expect, test } from "bun:test";
import { getDigits } from "../getDigits";

test("positive number", () => {
  const value = getDigits(222);
  expect(value).toEqual([2, 2, 2]);
});

test("negative number", () => {
  const value = getDigits(-234);
  expect(value).toEqual([2, 3, 4]);
});

test("0 is 0", () => {
  const value = getDigits(0);
  expect(value).toEqual([0]);
});

test("a big number should throw", () => {
  expect(() => {
    // function that should throw
    const value =
      getDigits(30923243243434343434333434334343434343123123213433432442234243);
  }).toThrow();
});
