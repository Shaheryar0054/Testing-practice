const reverseString = require('./reverseString')

//Test
test("reverseString returns the string reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});
