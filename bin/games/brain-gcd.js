#!/usr/bin/games/env node

import runGame from "../src/index.js";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const description = "Find the greatest common divisor of given numbers.";

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const a = getRandomNumber(1, 100);
  const b = getRandomNumber(1, 100);

  const question = `${a} ${b}`;
  const correctAnswer = String(getGcd(a, b));

  return { question, correctAnswer };
};

runGame(description, generateRound);
