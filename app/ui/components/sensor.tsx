import { JSX } from 'react';
import { CircleStackIcon } from '@heroicons/react/24/outline';
export default function Sensor({
  type,
  temperature,
  humidity,
}: {
  type: 'temperature' | 'humidity';
  temperature: number;
  humidity: number;
}): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center space-x-2 h-20 text-white items-center rounded-lg bg-green-600">
      <span className="flex h-20 justify-center items-center p-2 text-md">
        <CircleStackIcon className="w-8 h-8 text-black" />
      </span>
      <span className="flex w-full h-20 justify-center items-center text-md">
        {`${type} sensor value:`}
      </span>
      <span className="flex w-25 justify-center items-center h-10 bg-white border-1 border-black rounded-lg items-center m-2 text-black text-md">
        {type === 'temperature' ? `${temperature} °C` : `${humidity} %`}
      </span>
    </div>
  );
}
