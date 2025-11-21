#!/usr/bin/env node

import getName from "./src/cli";

const name = getName();

const textCmd = (text) => {
  console.log(text);
};

textCmd("Welcome to the Brain Games!");

textCmd(`Hello, ${name}!`);
