import { calculatePasswordStrength } from '../src/passwordStrength';

test('Password less than 8 characters should be very weak', () => {
    expect(calculatePasswordStrength('123')).toBe('Very Weak');
});

test('Password with only lowercase letters should be weak', () => {
    expect(calculatePasswordStrength('abcdefg')).toBe('Very Weak');
});

test('Password with at least 8 characters, lowercase, and digits should be weak', () => {
    expect(calculatePasswordStrength('abc12345')).toBe('Weak');
});

test('Password with lowercase, digits, and uppercase letters should be moderate', () => {
    expect(calculatePasswordStrength('Abc12345')).toBe('Moderate');
});

test('Password with lowercase, digits, uppercase, and special characters should be strong', () => {
    expect(calculatePasswordStrength('Abc12345!')).toBe('Strong');
});
