export const INITIAL_LIVES = 1;
export const TURBO_THRESHOLD = 5; // 5 consecutive correct answers
export const TURBO_DURATION = 5000; // 5 seconds

export const BASE_ANIMATION_DURATION = 8; // in seconds, lower is faster
export const MAX_ANIMATION_DURATION = 12; // slowest
export const MIN_ANIMATION_DURATION = 2; // fastest
export const TURBO_ANIMATION_DURATION = 1;

export const DURATION_CHANGE_ON_CORRECT = 0.5;
export const DURATION_CHANGE_ON_INCORRECT = 1;

export const SCORE_PER_CORRECT_ANSWER = 100;
export const LEVEL_UP_SCORE_INTERVAL = 500;

export const getTimerDuration = (level: number): number => {
  // Starts at 12 seconds, decreases with level, with a minimum of 3 seconds.
  return Math.max(3, 12 - Math.floor(level / 2));
};