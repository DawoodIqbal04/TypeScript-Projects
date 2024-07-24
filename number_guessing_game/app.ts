#! /usr/bin/env node

import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';

const systemGuessedNo = Math.floor(Math.random() * 10);
const systemGuessedNo2 = Math.floor(Math.random() * 10);

let t1: string = chalk.inverse.bold('\n****************************\n');
let t2: string = chalk.inverse.bold('***');
let t3: string = chalk.greenBright.italic(' Number Guessing Game ');

async function msg1Promise(
  t1: string,
  t2: string,
  t3: string
): Promise<boolean> {
  console.clear();
  console.log(`${t1 + t2 + t3 + t2 + t1}`);
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 700);
  });
}

async function msg2Promise(): Promise<boolean> {
  console.clear();
  let radar = chalkAnimation.radar(
    '\n****************************\n*** Number Guessing Game ***\n****************************\n',
    0.6
  );
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      radar.stop();
      resolve(true);
    }, 3200);
  });
}

async function wellcomeMessage(): Promise<void> {
  await msg1Promise(t1, t2, t3);
  await msg2Promise();
  await msg1Promise(t1, t2, t3);
}

async function wellcomeMessageStatic(): Promise<void> {
  await msg1Promise(t1, t2, t3);
}

export { wellcomeMessage, wellcomeMessageStatic };

(async (): Promise<void> => {
  await wellcomeMessage();
})();


console.log("You Have Only 02 Credits To Guess!")

let ans: {
  GuessNo: number;
} = await inquirer.prompt({
  type: "number",
  name: "GuessNo",
  message: "Try Your Luck. \n  Guess The Number Between 1 To 10 :",
});

const { GuessNo } = ans;

console.log(
  "Your Guess : ",
  ans.GuessNo,
  "     System Number : ",
  systemGuessedNo
);

if (ans.GuessNo === systemGuessedNo) {
  console.log("Perfect Your Guess Just Matched. You Win!");
} else {
  console.log("Please Try To Guess Again. You Lost!");

  if (ans.GuessNo != systemGuessedNo) {
    let ans: {
      GuessNo: number;
    } = await inquirer.prompt({
      type: "number",
      name: "GuessNo",
      message: "Good Luck This Time",
    });

    console.log(
      "Your Guess : ",
      ans.GuessNo,
      "     System Number : ",
      systemGuessedNo2
    );

    if (ans.GuessNo === systemGuessedNo2) {
      console.log("Perfect Your Guess Just Matched. You Win!");
    } else {
      console.log("You Lost It Again! Restart It To Play Again");
    }
  }
}
