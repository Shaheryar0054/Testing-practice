const stringLength = require('./stringLength.js')

//Test

test("stringLength returns the correct character count", () => {
    expect(stringLength("hello")).toBe(5);
  });
  
  test("stringLength throws error if string is less than 1 character", () => {
    expect(() => {stringLength("")}).toThrow();
  });
  
  test("stringLength throws error if string is more than 10 characters", () => {
    expect(() => {stringLength("This string is too long")}).toThrow();
  });
  