import type { Data } from './definitions';

export async function getData(query: string): Promise<Data[] | undefined> {
  try {
    const url = `https://server-monitoring-sensors.vercel.app/api/${query}`;
    const dataDB = await fetch(url);
    const data = await dataDB.json();
    return data;
  } catch (error) {
    console.error('Database error:', error);
    throw new Error('Failed to fetch data.');
  }
}
