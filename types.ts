
export interface Problem {
  question: string;
  options: number[];
  correctAnswer: number;
}

export type GameState = 'playing' | 'gameover';

export type Operator = '+' | '-' | '×';
