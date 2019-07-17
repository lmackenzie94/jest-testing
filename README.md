## Notes

- Change "test" script in package.json to "jest" (run: npm test)
- Add script "testwatch": "jest --watchAll" (run: npm run testwatch) for automatic re-running
- Jest automatically recognizes 'functions.test.js' as the test file for 'functions.js'
- Other matchers: toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy, etc. ([Full List](https://jestjs.io/docs/en/expect))
- **.toBe** only works for primitive types; for objects/arrays (i.e. reference types) use **.toEqual**
- To only run a specific test, temporarily use **test.only()**

#### Mocks

- Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website/database, create a manual mock that allows you to use fake data.
- Manual mocks are defined by writing a module in a \***\*mocks \*\***/ subdirectory immediately adjacent to the module.
- jest.fn() creates a fake (mock) function with special properties. It can return info like (i) how many times the function was called (ii) with what arguments (iii) a fake value that you specify.
- Tests can be defined with test() or it() - they're the exact same.

###### Why mock an HTTP request (ex. axios)

- It's much faster than a real request.
- Axios probably doesn't want us constantly hitting their server during testing.
- Certain requests (ex: charging a credit card) of course can't be made while testing.

#### Sources

[Traversy Media: Jest Crash Course](https://www.youtube.com/watch?v=7r4xVDI2vho)
