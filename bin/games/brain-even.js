#!/usr/bin/games/env node

import runGame from "../src/index.js";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (number) => {
  return number % 2 === 0;
};

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  const question = `Question: ${randomNumber}`;

  return { question, correctAnswer };
};

runGame(description, generateRound);
