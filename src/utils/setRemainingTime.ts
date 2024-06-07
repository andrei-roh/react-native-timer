import { Time } from '../types';

export const setRemainingTime = (
  value: string,
  field: string,
  setTime: React.Dispatch<
    React.SetStateAction<{
      hours: number;
      minutes: number;
      seconds: number;
    }>
  >,
) => {
  const currentValue = Number(value);

  if (field === Time.Hours) {
    setTime(time => ({
      ...time,
      [field]: currentValue,
    }));
  } else {
    if (field === Time.Minutes) {
      setTime(time => ({
        ...time,
        [Time.Hours]:
          currentValue > 60 ? time.hours + (currentValue - 60) : time.hours,
        [field]: currentValue > 60 ? currentValue - 60 : currentValue,
      }));
    } else {
      setTime(time => ({
        ...time,
        [Time.Minutes]:
          currentValue > 60 ? time.hours + (currentValue - 60) : time.hours,
        [field]: currentValue > 60 ? currentValue - 60 : currentValue,
      }));
    }
  }
};
