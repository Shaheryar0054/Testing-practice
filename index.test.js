function stringLength(string) {
    if(string.length < 1 || string.length > 10) {
      throw new Error("String must be at least 1 character long and not longer than 10 characters.");
    }
    return string.length;
  }
  
  //Test for the initial function
  describe("stringLength", () => {
    it("should return the number of characters in a string", () => {
      expect(stringLength("hello")).toEqual(5);
      expect(stringLength("hi")).toEqual(2);
    });
  });
  
  //Tests for the new functionality
  describe("stringLength", () => {
    it("should throw an error if string is less than 1 character long", () => {
      expect(() => {stringLength("")}).toThrowError("String must be at least 1 character long and not longer than 10 characters.");
    });
    it("should throw an error if string is more than 10 characters long", () => {
      expect(() => {stringLength("this string is too long")}).toThrowError("String must be at least 1 character long and not longer than 10 characters.");
    });
  });