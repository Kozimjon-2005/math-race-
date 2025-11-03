
import type { Problem, Operator } from '../types';

export const generateProblem = (level: number): Problem => {
  let num1: number;
  let num2: number;
  let operator: Operator;

  if (level <= 3) {
    operator = '+';
    num1 = Math.floor(Math.random() * (level * 5 + 5)) + 1;
    num2 = Math.floor(Math.random() * (level * 5 + 5)) + 1;
  } else if (level <= 6) {
    operator = '-';
    const a = Math.floor(Math.random() * (level * 4 + 10)) + 5;
    const b = Math.floor(Math.random() * (level * 4 + 10)) + 1;
    num1 = Math.max(a, b);
    num2 = Math.min(a, b);
  } else {
    operator = '×';
    num1 = Math.floor(Math.random() * (level - 4) + 3) + 1;
    num2 = Math.floor(Math.random() * 9) + 2;
  }

  let correctAnswer: number;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '×':
      correctAnswer = num1 * num2;
      break;
  }
  
  const question = `${num1} ${operator} ${num2} = ?`;
  const options: number[] = [correctAnswer];
  
  while(options.length < 3) {
    const deviation = Math.floor(Math.random() * 10) - 5;
    let wrongAnswer = correctAnswer + deviation;
    if (wrongAnswer < 0) wrongAnswer = Math.abs(wrongAnswer) + 1;
    if (!options.includes(wrongAnswer) && wrongAnswer !== correctAnswer) {
      options.push(wrongAnswer);
    }
  }

  // Shuffle options
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return { question, options, correctAnswer };
};
