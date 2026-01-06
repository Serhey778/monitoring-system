import { JSX } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Sensor from '../ui/components/sensor';
import Button from '../ui/components/button';

export default function MonitoringPage(): JSX.Element {
  return (
    <main className="flex justify-between flex-col gap-30 items-center">
      <Sensor type="temperature" temperature={7} humidity={70} />
      <Sensor type="humidity" temperature={7} humidity={100} />
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
