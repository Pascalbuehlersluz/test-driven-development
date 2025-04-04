import { formatDuration } from "./duration";

describe("formatDuration", () => {
  //spezialfälle
  test("0 seconds should be formatted as 0s", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("negative seconds should throw an error", () => {
    expect(() => formatDuration(-5)).toThrow("Negative durations are not allowed");
  });

  test("decimal seconds should be rounded", () => {
    expect(formatDuration(62.7)).toBe("1m3s");
  });

  //standardfälle
  test.each([
    [33, "33s"],
    [123, "2m3s"],
    [500, "8m20s"],
    [3600, "1h"],
    [3999, "1h6m39s"],
  ])("formatDuration(%d) should return '%s'", (input, expected) => {
    expect(formatDuration(input)).toBe(expected);
  });
});
