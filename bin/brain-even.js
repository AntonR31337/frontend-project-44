#!/usr/bin/env node
import readlineSync from "readline-sync";
import getName from "./src/cli.js";

const ROUNDS_COUNT = 3;

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isEven = (number) => {
  return number % 2 === 0;
};

const textCmd = (text) => {
  console.log(text);
};

textCmd("Welcome to the Brain Games!");

const userName = getName();

textCmd(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let i = 0;

while (i < ROUNDS_COUNT) {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(randomNumber) ? "yes" : "no";

  console.log(`Question: ${randomNumber}`);

  const userAnswer = readlineSync.question("Your answer: ");

  if (correctAnswer === userAnswer) {
    i++;

    console.log("Correct!");
  } else {
    console.log(` ${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${userName}!`);
  }
}

console.log(`Congratulations, ${userName}!`);
