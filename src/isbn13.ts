export function isValid(isbn13: string): boolean {
  // Prüfen, ob die Eingabe genau 13 Ziffern enthält
  if (isbn13.length !== 13 || !/^\d+$/.test(isbn13)) {
      return false;
  }

  // Ziffern in ein Array umwandeln
  const digits = isbn13.split('').map(Number); // Konvertiert jeden Charakter in eine Zahl
  const givenCheckDigit = digits[12]; // 13. Ziffer ist die Prüfsumme

  // Prüfsumme berechnen: ungerade Positionen * 1, gerade Positionen * 3
  let sum = 0;
  for (let i = 0; i < 12; i++) {
  if (i % 2 === 0) {
    sum += digits[i];
  } else {
    sum += digits[i] * 3;
  }
  }


  // Prüfsumme: (10 - (Summe % 10)) % 10
  const calculatedCheckDigit = (10 - (sum % 10)) % 10;

  // Prüfen, ob die berechnete Prüfsumme mit der gegebenen übereinstimmt
  return calculatedCheckDigit === givenCheckDigit;
}