/* @flow */

export type ForecastType = {
  date: string,
  date_epoch: number,
  day: {
    condition: {
      code: number,
      text: string,
    },
    maxtemp_f: number,
    mintemp_f: number,
  },
};
