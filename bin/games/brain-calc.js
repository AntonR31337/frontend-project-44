#!/usr/bin/games/env node

import runGame from "../src/index.js";

const OPERATORS = ["+", "-", "*"];
const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 100;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomOperator() {
  const randomIndex = Math.floor(Math.random() * OPERATORS.length);

  return OPERATORS[randomIndex];
}

const calculate = (a, b, operator) => {
  const [addition, subtraction, multiplication] = OPERATORS;

  switch (operator) {
    case addition:
      return a + b;

    case subtraction:
      return a - b;

    case multiplication:
      return a * b;

    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const a = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const b = getRandomNumber(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
  const operator = getRandomOperator();

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));

  return { question, description, correctAnswer };
};

const description = "What is the result of the expression?";

runGame(description, generateRound);
