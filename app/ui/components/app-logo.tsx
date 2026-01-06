import { JSX } from 'react';
import Image from 'next/image';
import { lusitana } from '../fonts';

export default function AppLogo(): JSX.Element {
  return (
    <div className="flex flex-row space-x-5 h-20 text-white items-end rounded-lg bg-green-600">
      <div className="flex h-20 items-center p-x-2 p-2">
        <Image
          src="/images/temp-humid-icon.png"
          width={50}
          height={50}
          className="object-contain"
          loading="eager"
          alt="Icon showing temperature and humidity sensor"
        />
        <div
          className={`${lusitana.className} flex h-20 items-center text-center p-2 text-md`}
        >
          System for monitoring data from two temperature/humidity sensors
        </div>
      </div>
    </div>
  );
}
