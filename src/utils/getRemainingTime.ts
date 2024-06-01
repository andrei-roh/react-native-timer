import { getFormatNumber } from './getFormatNumber';

export const getRemainingTime = (value: number) => {
  const minutes = Math.floor(value / 60);
  const seconds = value - minutes * 60;
  return {
    minutes: getFormatNumber(minutes),
    seconds: getFormatNumber(seconds),
  };
};
