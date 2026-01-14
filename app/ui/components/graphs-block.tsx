import { notFound } from 'next/navigation';
import { JSX } from 'react';
import { getData } from '@/app/libs/fetching';
import { generateYAxis } from '@/app/libs/utils';
import Graph from './graph';

export default async function GraphsBlock({
  query,
}: {
  query: string;
}): Promise<JSX.Element> {
  const dataDB = await getData(query);
  if (!dataDB || dataDB.length === 0 || !(dataDB instanceof Array)) {
    notFound();
  }
  const { yAxisLabels: yAxisTempLabels, topLabel: topTempLabel } =
    generateYAxis(dataDB, 'temp');
  const { yAxisLabels: yAxisHumidLabels, topLabel: topHumidLabel } =
    generateYAxis(dataDB, 'humid');
  return (
    <>
      <Graph
        query={query}
        dataDB={dataDB}
        yAxisLabels={yAxisTempLabels}
        topLabel={topTempLabel}
        header="Temperatyre graph for"
        monitoring="temp"
      />
      <Graph
        query={query}
        dataDB={dataDB}
        yAxisLabels={yAxisHumidLabels}
        topLabel={topHumidLabel}
        header="Humidity graph for"
        monitoring="humid"
      />
    </>
  );
}
