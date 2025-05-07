// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// checking isPhoneNumber
test('isPhoneNumber valid cases', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
  expect(isPhoneNumber('(800) 555-1234')).toBe(true);
});

// isPhoneNumber invalid cases are if it is missing the area code or has letters in it
test('isPhoneNumber invalid cases', () => {
  expect(isPhoneNumber('123456')).toBe(false);
  expect(isPhoneNumber('phone')).toBe(false);
});

// checking isEmail
test('isEmail valid cases', () => {
  expect(isEmail('test@example.com')).toBe(true);
  expect(isEmail('abc@ucsd.edu')).toBe(true);
});

//isEmail invalid cases are if it is missing the @ or .com/.edu/etc
test('isEmail invalid cases', () => {
  expect(isEmail('testexample.com')).toBe(false);
  expect(isEmail('abc@ucsd')).toBe(false);
});

// checking isStrongPassword
test('isStrongPassword valid cases', () => {
  expect(isStrongPassword('Abcd_123')).toBe(true);
  expect(isStrongPassword('Z9x8_cool')).toBe(true);
});

//isStrongPassword invalid cases are if it is too short or starts with a number
test('isStrongPassword invalid cases', () => {
  expect(isStrongPassword('1abc')).toBe(false);
  expect(isStrongPassword('ab')).toBe(false);
});

// checking isDate
test('isDate valid cases', () => {
  expect(isDate('12/31/2020')).toBe(true);
  expect(isDate('1/1/1999')).toBe(true);
});

// isDate invalid cases are if it is incorrect format or is missing one of the parts ofMM/DD/YYYY
test('isDate invalid cases', () => {
  expect(isDate('2020-12-31')).toBe(false);
  expect(isDate('4/2020')).toBe(false);
});

// checking isHexColor
test('isHexColor valid cases', () => {
  expect(isHexColor('#ABC')).toBe(true);
  expect(isHexColor('123abc')).toBe(true);
});

// isHexColor invalid cases are if it is missing the # or has wrong length
test('isHexColor invalid cases', () => {
  expect(isHexColor('#1234')).toBe(false);
  expect(isHexColor('hello')).toBe(false);
});
