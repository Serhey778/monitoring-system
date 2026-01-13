import { JSX } from 'react';
import { lusitana } from '../fonts';
import type { Data } from '@/app/libs/definitions';
import { formattedHoursAndMinutes } from '@/app/libs/utils';

export default function Graph({
  query,
  dataDB,
  yAxisLabels,
  topLabel,
  header,
  monitoring,
}: {
  query: string;
  dataDB: Data[];
  yAxisLabels: string[];
  topLabel: number;
  header: string;
  monitoring: 'temp' | 'humid';
}): JSX.Element {
  const chartHeight = 350;
  return (
    <div className="w-full text-center mt-6">
      <h2 className={`${lusitana.className} text-ml`}>
        {query === '1hour' || query === '6hours' || query === '24hours'
          ? `${header} the last ${query}`
          : `${header} ${query}`}
      </h2>
      <div className="flex flex-row w-full flex-wrap overflow-hidden rounded-xl bg-gray-50 justify-center">
        <div
          className=" w-10 flex-col justify-between text-sm text-black flex"
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>
        <div
          className=" flex w-83 flex-row overflow-hidden overflow-x-scroll whitespace-nowrap justify-start items-end rounded-md px-1 bg-white"
          style={{ height: `${chartHeight}px` }}
        >
          {dataDB.map((data) => (
            //index % Math.floor(dataDB.length / 100) === 0 &&
            <div
              key={data.id}
              className="relative flex-none flex-col w-3 items-center"
            >
              <div
                className="bg-blue-300"
                style={{
                  height:
                    monitoring === 'temp'
                      ? `${(chartHeight / topLabel) * data.temp}px`
                      : `${(chartHeight / topLabel) * data.humid}px`,
                }}
              ></div>
              <p className="absolute -rotate-90 bottom-3 left-1/2 transform -translate-x-1/2 text-sm text-black">
                {formattedHoursAndMinutes(data.created_at)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
