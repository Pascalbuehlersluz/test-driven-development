export function calcPoints(throws: string): number {
  if (!throws) {
      return 0;
  }

  const parts = throws.split(' ');
  if (parts.length % 2 !== 0 || parts.length > 6) {
      return 0;
  }

  let points = 0;
  for (let i = 0; i < parts.length; i += 2) {
      const multiplier = parseInt(parts[i]);
      const sector = parseInt(parts[i + 1]);

      if (isNaN(multiplier) || isNaN(sector)) {
          return 0;
      }

      if (multiplier < 1 || multiplier > 3 || sector < 1 || sector > 20) {
          return 0;
      }

      points += multiplier * sector;
  }

  return points;
}

export function possibleCheckout(pointsThrown: number): string {
  const remainingPoints = 501 - pointsThrown;

  if (remainingPoints <= 0) {
      return '';
  }

  if (remainingPoints % 2 !== 0) {
      return '';
  }

  const sector = remainingPoints / 2;
  if (sector > 20) {
      return '';
  }

  return `Double ${sector}`;
}