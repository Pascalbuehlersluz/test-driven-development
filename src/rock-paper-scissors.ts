export function play(player1: string, player2: string): number {
  const p1 = player1.trim().toLowerCase(); // Normalisiert den Input von Spieler 1
  const p2 = player2.trim().toLowerCase(); // Normalisiert den Input von Spieler 2

  if (p1 === p2) { // unentschieden
      return 0;
  }

  if (p1 === 'rock') { // Spieler 1 hat rock
      if (p2 === 'scissors') return 1; // Rock schlägt Scissors, Spieler 1 gewinnt
      if (p2 === 'paper') return 2; // Paper schlägt Rock, Spieler 2 gewinnt
  }

  if (p1 === 'paper') { // Spieler 1 hat paper
      if (p2 === 'rock') return 1; // Paper schlägt Rock, Spieler 1 gewinnt
      if (p2 === 'scissors') return 2; // Scissors schlägt Paper, Spieler 2 gewinnt
  }

  if (p1 === 'scissors') { // Spieler 1 hat scissors
      if (p2 === 'paper') return 1; // Scissors schlägt Paper, Spieler 1 gewinnt
      if (p2 === 'rock') return 2; // Rock schlägt Scissors, Spieler 2 gewinnt
  }

  throw new Error('Invalid Input!'); // Fehler, wenn ungültige Eingaben gemacht wurden
}