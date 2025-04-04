import { formatDuration } from './duration';
 
describe('formatDuration', () => {
    test('formats seconds correctly', () => {
        expect(formatDuration(33)).toBe('33s');
    });
 
    test('formats minutes and seconds correctly', () => {
        expect(formatDuration(123)).toBe('2m3s');
    });
 
    test('formats hours, minutes, and seconds correctly', () => {
        expect(formatDuration(3999)).toBe('1h6m39s');
    });
 
    test('handles 0 seconds', () => {
        expect(formatDuration(0)).toBe('0s');
    });
 
    test('throws an error for negative numbers', () => {
        expect(() => formatDuration(-1)).toThrow('Duration cannot be negative');
    });
 
    test('rounds seconds correctly', () => {
        expect(formatDuration(123.7)).toBe('2m4s');
        expect(formatDuration(59.5)).toBe('1m0s');
    });
});