const reverseString = require("./reversestring");

// toBeDefined
test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("Does string reverse?", () => {
  expect(reverseString("HELLO")).toEqual("olleh");
});
