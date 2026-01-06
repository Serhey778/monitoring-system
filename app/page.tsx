import Image from 'next/image';
import { JSX } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from './ui/components/button';

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-30 items-center p-6">
      <div className="flex items-center p-x-2 p-2">
        <Image
          src="/images/home-image.png"
          width={360}
          height={360}
          className="object-contain text-white"
          loading="eager"
          alt="Photograph showing temperature and humidity sensor"
        />
      </div>
      <Button
        url="./monitoring"
        slot="Start online monitoring"
        icon={<ArrowRightIcon />}
        direction="right"
      />
    </main>
  );
}
