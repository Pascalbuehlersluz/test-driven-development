import { calcPoints, possibleCheckout } from './darts';

describe('calcPoints', () => {
    // Parametrisierte Tests für reguläre Fälle
    test.each([
        ['3 20 1 17 2 4', 85],
        ['2 15 1 18 3 19', 105],
        ['3 20 1 5', 65],
    ])('calcPoints("%s") -> %d', (throws, expected) => {
        expect(calcPoints(throws)).toBe(expected);
    });

    // Gruppierte Tests für Spezialfälle
    describe('special cases', () => {
        test('empty string should return 0', () => {
            expect(calcPoints('')).toBe(0);
        });

        test('invalid input should return 0', () => {
            expect(calcPoints('3 20 1')).toBe(0);
            expect(calcPoints('4 20 1 5')).toBe(0);
            expect(calcPoints('3 abc 1 5')).toBe(0);
        });
    });
});

describe('possibleCheckout', () => {
    // Parametrisierte Tests für reguläre Fälle
    test.each([
        [477, 'Double 12'],
        [480, ''],
        [441, ''],
        [499, 'Double 1'],
    ])('possibleCheckout(%d) -> "%s"', (pointsThrown, expected) => {
        expect(possibleCheckout(pointsThrown)).toBe(expected);
    });

    // Gruppierte Tests für Spezialfälle
    describe('edge cases', () => {
        test('already at 501 should return empty string', () => {
            expect(possibleCheckout(501)).toBe('');
        });

        test('negative remaining points should return empty string', () => {
            expect(possibleCheckout(502)).toBe('');
        });
    });
});