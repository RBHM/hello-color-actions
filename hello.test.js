const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from the April 2024 Office Hours in the terminal!");
  });
});
