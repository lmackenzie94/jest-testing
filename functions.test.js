const functions = require("./functions");

const initDatabase = () => console.log("Database Initialized...");
const closeDatabase = () => console.log("Database Closed...");

// initDatabase will run before every test
beforeEach(() => initDatabase());
// closeDatabase will run after every test
afterEach(() => closeDatabase());

// could also just run them before and after ALL tests
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking Name...");

// this will only run nameCheck() before the 2 tests inside the 'describe' block
describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("User is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("User is Luke", () => {
    const user = "Luke";
    expect(user).toBe("Luke");
  });
});

// toBe
test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

// toBe
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
  expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test("User should be Luke MacKenzie object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Luke",
    lastName: "MacKenzie"
  });
});

// Less than / Greater than
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

// Regex (toMatch)
test("There is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

// Arrays (toContain)
test("Admin should be in usernames", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// Async data (Promise)
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then(data => {
    expect(data.name).toEqual("Leanne Graham");
  });
});
// NOTE: omitting the 'expect.assertions' AND 'return' will preclude test from failing

// Async data (Async Await)
test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
