import type { Data } from './definitions';

export const generateYAxis = (dataDB: Data[], monitoring: 'temp' | 'humid') => {
  const yAxisLabels = [];
  const max = Math.max(
    ...dataDB.map((data) => (monitoring === 'temp' ? data.temp : data.humid))
  );

  const topLabel = Math.ceil(max / 10) * 10;

  for (let i = topLabel; i >= 0; i -= 5) {
    yAxisLabels.push(monitoring === 'temp' ? `${i} °C` : `${i} %`);
  }

  return { yAxisLabels, topLabel };
};

export const formattedHoursAndMinutes = (created_at: string): string => {
  const date = new Date(created_at);
  const timeFormatted = date.toUTCString().split(' ')[4].slice(0, 5);
  return timeFormatted;
};
