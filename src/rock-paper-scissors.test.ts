import { play } from './rock-paper-scissors';

// test each case of the game

describe('play', () => {
  test.each([
    ['rock', 'rock', 0],
    ['rock', 'paper', 2],
    ['rock', 'scissors', 1],
    ['paper', 'rock', 1],
    ['paper', 'paper', 0],
    ['paper', 'scissors', 2],
    ['scissors', 'rock', 2],
    ['scissors', 'paper', 1],
    ['scissors', 'scissors', 0],
  ])('play(%s, %s) == %d', (player1, player2, expected) => {
    expect(play(player1, player2)).toBe(expected);
  }
  );
});