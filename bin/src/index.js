import readlineSync from "readline-sync";
import getName from "./cli.js";

const ROUNDS = 3;

console.log("Welcome to the Brain Games!");

const userName = getName();

console.log(`Hello, ${userName}!`);

const runGame = (description, generateRound) => {
  console.log(description);

  for (let i = 0; i < ROUNDS; ) {
    const { question, correctAnswer } = generateRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
    } else {
      i++;

      console.log("Correct!");
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
