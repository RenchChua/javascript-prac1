// write a function, returnTrue, that doesn't take in any arguments and just returns boolean true
describe("write a returnTrue function", function () {
  it("has a function that returns true", function () {
    expect(returnTrue()).toBe(true);
  });
});

// write a function, returnsArg, that takes in one argument and returns argument
describe("write a returnsArg function", function () {
  it("that takes in number", function () {
    expect(returnsArg(1)).toEqual(1);
  });

  it("that takes in string", function () {
    expect(returnsArg("a")).toEqual("a");
  });
});

// write a function, addTwo that takes in one argument, which you can assume to be a number, and adds 2 to it
describe("write a addTwo function", function () {

  it("has a function that adds 2 to the argument (1) inputted", function () {
    expect(addTwo(1)).toEqual(3);
  });

  it("has a function that adds 2 to the argument (2) inputted", function () {
    expect(addTwo(2)).toEqual(4);
  });

  it("has a function that adds 2 to the argument (888) inputted", function () {
    expect(addTwo(888)).toEqual(890);
  });
});

// write a function, addTwoArgs that takes in two arguments, which you can assume to be numbers, and adds them together

describe("write a addTwoArgs", function () {

  it("has a function that adds two args (1 and 2) together", function () {
    expect(addTwoArgs(1, 2)).toEqual(3);
  });

  it("has a function that adds two args (5 and 9) together", function () {
    expect(addTwoArgs(5, 9)).toEqual(14);
  });

});

// write a function, subtractTwoArgs that takes in two arguments, which you can assume to be numbers, and subtracts second argument from the first

describe('write a subtractTwoArgs function', function() {

  it("has a function that subtracts arg (3) from arg (5)", function () {
    expect(subtractTwoArgs(5, 3)).toEqual(2);
  });

  it("has a function that subtracts arg (6) from arg (15)", function () {
    expect(subtractTwoArgs(15, 6)).toEqual(9);
  });


});

// write a function, firstBiggerThanSecond, that takes two arguments and returns true if first is bigger than second then return true. Don't need to write else statement

describe("write a firstBiggerThanSecond", function () {
  it("has arg (5) that is bigger than another arg (2)", function () {
    expect(firstBiggerThanSecond(5, 3)).toBe(true);
  });

  it("has arg (15) that is bigger than another arg (7)", function () {
    expect(firstBiggerThanSecond(15, 7)).toBe(true);
  });

  it("has arg (1) that is not bigger than another arg (7)", function () {
    expect(firstBiggerThanSecond(1, 7)).toBe();
  });

});

// write a function isFirstBigger, that takes two arguments, which are integers. If first argument is bigger than second, then returns true, ELSE returns false.

describe("write a isFirstBigger", function () {
  it("has first arg (10) that is bigger than second arg(3) ", function () {
    expect(isFirstBigger(10, 3)).toBe(true);
  });

  it("has first arg (3) that is bigger than second arg(10) ", function () {
    expect(isFirstBigger(3, 10)).toBe(false);
  });
});

// write a function bigSmallEqual, that takes two arguments, which are integers. IF first argument is bigger than second, then returns STRING "First argument is bigger than second argument", ELSE IF first argument is equal to second argument, returns STRING "First argument is equal to second argument", ELSE returns STRING "First argument is not bigger than second argument"

describe('write a bigSmallEqual', function() {
  it("has first arg (6) that is bigger than second arg (3)", function () {
    expect(bigSmallEqual(6,3)).toBe("First argument is bigger than second argument");
  });

  it("has first arg (7) that is bigger than second arg (7)", function () {
    expect(bigSmallEqual(7,7)).toBe("First argument is equal to second argument");
  });

  it("has first arg (2) that is bigger than second arg (9)", function () {
    expect(bigSmallEqual(2,9)).toBe("First argument is not bigger than second argument");
  });
});

// write a function isMultipleOfFour, that takes one argument, which is an integer. IF this argument is a multiple of four, then returns boolean true, ELSE returns boolean false.

describe("write a isMultipleOfFour", function () {
  it("has argument (28) which is a multiple of four)", function () {
    expect(isMultipleOfFour(28)).toBe(true);
  });

  it("has argument (34) which is not a multiple of four)", function () {
    expect(isMultipleOfFour(34)).toBe(false);
  });

});
