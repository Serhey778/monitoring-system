import { JSX } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Sensor from '../ui/components/sensor';
import Button from '../ui/components/button';

export default function MonitoringPage(): JSX.Element {
  return (
    <main className="flex max-w-full justify-between flex-col gap-30 items-center">
      <Sensor type="temperature" />
      <Sensor type="humidity" />
      <span className="flex flex-row w-full justify-center space-x-10 h-20 text-white items-center">
        <Button url="/" slot="Home" icon={<ArrowLeftIcon />} direction="left" />
        <Button
          url="/monitoring/graph"
          slot="Graph"
          icon={<ArrowRightIcon />}
          direction="right"
        />
      </span>
    </main>
  );
}
