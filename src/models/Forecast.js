/* @flow */

export type ForecastType = {
  date: string,
  date_epoch: number,
  day: {
    condition: {
      icon: string,
      text: string,
    },
    maxtemp_f: number,
    mintemp_f: number,
  },
};
