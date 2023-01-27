const capitalize = require('./capitalize.js')
//Test

test("capitalize returns the string with the first character capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});
