#!/usr/bin/env node

import getName from "./src/cli.js";

const textCmd = (text) => {
  console.log(text);
};

textCmd("Welcome to the Brain Games!");

const name = getName();

textCmd(`Hello, ${name}!`);
