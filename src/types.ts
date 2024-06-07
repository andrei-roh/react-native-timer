export enum Time {
  Hours = 'hours',
  Minutes = 'minutes',
  Seconds = 'seconds',
}

export interface ITime {
  [Time.Hours]: number;
  [Time.Minutes]: number;
  [Time.Seconds]: number;
}
