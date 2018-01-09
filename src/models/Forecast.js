/* @flow */

export type ForecastType = {
  date: string,
  day: {
    condition: {
      icon: string,
      text: string,
    },
    maxtemp_f: number,
    mintemp_f: number,
  },
};
