import { ITime, Time } from '../types';

export const changeRemainingTime = (
  currentTime: ITime,
  isCountdown: boolean,
  handleReset: () => void,
) => {
  let fullTime =
    currentTime[Time.Hours] * 3600 +
    currentTime[Time.Minutes] * 60 +
    currentTime[Time.Seconds];

  if (isCountdown) {
    if (fullTime === 0) {
      handleReset();
      return currentTime;
    }

    fullTime -= 1;
    const hours = Math.floor(fullTime / 3600);
    const minutes = Math.floor((fullTime - hours * 3600) / 60);
    const seconds = fullTime - hours * 3600 - minutes * 60;

    return {
      ...currentTime,
      [Time.Hours]: hours,
      [Time.Minutes]: minutes,
      [Time.Seconds]: seconds,
    };
  } else {
    fullTime += 1;

    const hours = Math.floor(fullTime / 3600);
    const minutes = Math.floor((fullTime - hours * 3600) / 60);
    const seconds = fullTime - hours * 3600 - minutes * 60;

    return {
      ...currentTime,
      [Time.Hours]: hours,
      [Time.Minutes]: minutes,
      [Time.Seconds]: seconds,
    };
  }
};
