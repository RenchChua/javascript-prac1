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


// write a function tellMultiple345, that takes one argument, which is an integer. IF that argument is a multiple of 3, then returns a STRING "argument is a multiple of 3", ELSE IF argument is a multiple of 4, then returns "argument is a multiple of 4", ELSE IF argument is a multiple of 5, then returns "argument is a multiple of 5", ELSE returns "not a multiple of 3, 4 or 5". Assume that the test cases will be less than 10.

describe("write a tellMultiple345", function () {
  it("has argument (3)", function () {
    expect(tellMultiple345(3)).toBe('argument is a multiple of 3');
  });

  it("has argument (6)", function () {
    expect(tellMultiple345(6)).toBe('argument is a multiple of 3');
  });

  it("has argument (4)", function () {
    expect(tellMultiple345(4)).toBe('argument is a multiple of 4');
  });

  it("has argument (8)", function () {
    expect(tellMultiple345(8)).toBe('argument is a multiple of 4');
  });

  it("has argument (5)", function () {
    expect(tellMultiple345(5)).toBe('argument is a multiple of 5');
  });

  it("has argument (5)", function () {
    expect(tellMultiple345(10)).toBe('argument is a multiple of 5');
  });

  it("has argument (2)", function () {
    expect(tellMultiple345(2)).toBe('not a multiple of 3, 4 or 5');
  });

  it("has argument (7)", function () {
    expect(tellMultiple345(7)).toBe('not a multiple of 3, 4 or 5');
  });

});

// write a function simpleFizzBuzz, that takes one argument, which is an integer. If that argument is a multiple of 3, then returns a STRING "fizz". If the argument is a multiple of 5, then returns a STRING "buzz". If the argument is not a multiple of 3 or 5, return "nothing". Assume that the argument won't be a multiple of both 3 and 5.

describe("write a simpleFizzBuzz", function () {
  it("has argument (3)", function () {
    expect(simpleFizzBuzz(3)).toBe('fizz');
  });

  it("has argument (6)", function () {
    expect(simpleFizzBuzz(6)).toBe('fizz');
  });

  it("has argument (18)", function () {
    expect(simpleFizzBuzz(18)).toBe('fizz');
  });

  it("has argument (5)", function () {
    expect(simpleFizzBuzz(5)).toBe('buzz');
  });

  it("has argument (10)", function () {
    expect(simpleFizzBuzz(10)).toBe('buzz');
  });

  it("has argument (25)", function () {
    expect(simpleFizzBuzz(25)).toBe('buzz');
  });

  it("has argument (7)", function () {
    expect(simpleFizzBuzz(7)).toBe('nothing');
  });

  it("has argument (17)", function () {
    expect(simpleFizzBuzz(17)).toBe('nothing');
  });

});

// write a function nearlyFizzBuzz, that takes one argument, which is an integer. If that argument is a multiple of 3, then returns a STRING "fizz". If the argument is a multiple of 5, then returns a STRING "buzz". If that argument is a multiple of both 3 and 5 (e.g. 15), return "fizzbuzz". If the argument is not a multiple of 3 or 5, return "nothing".

describe("write a nearlyFizzBuzz", function () {
  it("has argument (3)", function () {
    expect(nearlyFizzBuzz(3)).toBe('fizz');
  });

  it("has argument (6)", function () {
    expect(nearlyFizzBuzz(6)).toBe('fizz');
  });

  it("has argument (18)", function () {
    expect(nearlyFizzBuzz(18)).toBe('fizz');
  });

  it("has argument (5)", function () {
    expect(nearlyFizzBuzz(5)).toBe('buzz');
  });

  it("has argument (10)", function () {
    expect(nearlyFizzBuzz(10)).toBe('buzz');
  });

  it("has argument (25)", function () {
    expect(nearlyFizzBuzz(25)).toBe('buzz');
  });

  it("has argument (15)", function () {
    expect(nearlyFizzBuzz(15)).toBe('fizzbuzz');
  });

  it("has argument (30)", function () {
    expect(nearlyFizzBuzz(30)).toBe('fizzbuzz');
  });

  it("has argument (7)", function () {
    expect(nearlyFizzBuzz(7)).toBe('nothing');
  });

  it("has argument (17)", function () {
    expect(nearlyFizzBuzz(17)).toBe('nothing');
  });

});
