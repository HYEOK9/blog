export const getRandomNumber = (min: number, max: number) =>
  Math.round(Math.random() * (max - min) + min);
