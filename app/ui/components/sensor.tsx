'use client';
import { JSX, useEffect, useState } from 'react';
import { CircleStackIcon } from '@heroicons/react/24/outline';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

export default function Sensor({
  type,
}: {
  type: 'temperature' | 'humidity';
}): JSX.Element {
  const [temp, setTempData] = useState<number[]>([]);
  const [humid, setHumidData] = useState<number[]>([]);

  useEffect(() => {
    // Установка слушателя для получения данных от сервера
    const handleSensorData = ({
      tempData,
      humidData,
    }: {
      tempData: number[];
      humidData: number[];
    }) => {
      setTempData(tempData);
      setHumidData(humidData);
    };

    socket.on('sensorsData', handleSensorData);

    // Очищаем слушателя при размонтировании компонента
    return () => {
      socket.off('sensorsData', handleSensorData);
    };
  }, []);

  return (
    <div className="flex flex-row w-full justify-center space-x-2 h-20 text-white items-center rounded-lg bg-green-600">
      <span className="flex h-20 justify-center items-center p-1 text-md">
        <CircleStackIcon className="w-8 h-8 text-black" />
      </span>
      <span className="flex w-full h-20 justify-center items-center text-md">
        {`${type} sensor value:`}
      </span>
      <span className="flex w-25  justify-center items-center h-12 bg-white border-1 border-black rounded-lg text-center m-2 text-black text-sl">
        {type === 'temperature' ? `${temp[0]} °C` : `${humid[0]} %`}
      </span>
    </div>
  );
}
