## Notes

- change "test" script in package.json to "jest" (run: npm test)
- add script "testwatch": "jest --watchAll" (run: npm run testwatch) for automatic re-running
- Jest automatically recognizes 'functions.test.js' as the test file for 'functions.js'
- Other matchers: toBeNull, toBeUndefined, toBeDefined, toBeTruthy, toBeFalsy, etc.
- **.toBe** only works for primitive types; for objects/arrays (i.e. reference types) use **.toEqual**

### Sources

[Traversy Media: Jest Crash Course](https://www.youtube.com/watch?v=7r4xVDI2vho)
