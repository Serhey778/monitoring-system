import { JSX, useEffect, useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Sensor from '../ui/components/sensor';
import Button from '../ui/components/button';
import { socketServer } from '../libs/modbus';

export default function MonitoringPage(): JSX.Element {
  const [tempData, setTempData] = useState<number | null>(null);
  const [humidData, setHumidData] = useState<number | null>(null);

  useEffect(() => {
    // Установка слушателя для получения данных от сервера
    const handleSensorData = ({
      tempData,
      humidData,
    }: {
      tempData: number;
      humidData: number;
    }) => {
      setTempData(tempData);
      setHumidData(humidData);
    };

    socketServer.on('sensorsData', handleSensorData);

    // Очищаем слушателя при размонтировании компонента
    return () => {
      socketServer.off('sensorsData', handleSensorData);
    };
  }, []);

  return (
    <main className="flex max-w-full justify-between flex-col gap-30 items-center">
      <Sensor type="temperature" temperature={tempData} humidity={humidData} />
      <Sensor type="humidity" temperature={tempData} humidity={humidData} />
      <span className="flex flex-row w-full justify-center space-x-10 h-20 text-white items-center">
        <Button url="/" slot="Home" icon={<ArrowLeftIcon />} direction="left" />
        <Button
          url="/monitoring/craph"
          slot="Craph"
          icon={<ArrowRightIcon />}
          direction="right"
        />
      </span>
    </main>
  );
}
