// This is a test file for unit tests.

const {getRandomNumber} = require('../index.js');

describe('getRandomNumber', () => {
  it('stays in 1-3 inclusive', () => {
    let randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
    randomNumber = getRandomNumber(1, 3);
    expect(randomNumber).toBeGreaterThan(0);
    expect(randomNumber).toBeLessThan(4);
  });
});
