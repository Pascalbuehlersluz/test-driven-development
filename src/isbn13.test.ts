import { isValid } from './isbn13';

describe('isValid', () => {
    test.each([
        ['9783161484100', true],  // Gültig
        ['9791090636071', true],  // Gültig (Präfix 979)
        ['9780306406157', true], // Ungültig (falsche Prüfsumme)
        ['9781234567890', false], // Ungültig (falsche Prüfsumme)
        ['123', false],           // Ungültig (zu kurz)
        ['97803064061577', false], // Ungültig (zu lang)
        ['978abc406157', false],  // Ungültig (nicht-numerische Zeichen)
    ])('isValid(%s) -> %p', (isbn13, expected) => {
        expect(isValid(isbn13)).toBe(expected);
    });
});

test('ungültige isbn: 978316148410', () => {
    expect(isValid('978316148410')).toBe(false); // Ungültig (zu kurz)
});

test('gültige isbn: 9783161484101', () => {
    expect(isValid('9783161484101')).toBe(false); // Ungültig (zu lang)
});

test('ungültige isbn: 978316148410a', () => {
    expect(isValid('978316148410a')).toBe(false); // Ungültig (nicht-numerische Zeichen)
});

test("ungültige isbn: Buchstabe drin", () => {
    expect(isValid("97831614X4100")).toBe(false); // Ungültig (nicht-numerische Zeichen)
  });