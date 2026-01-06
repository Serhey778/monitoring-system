import Link from 'next/link';
import Image from 'next/image';
import { JSX } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col gap-30 items-center p-6">
      Hello
      {/* <div className="flex items-center p-x-2 p-2">
        <Image
          src="/images/home-image.png"
          width={360}
          height={360}
          className="object-contain text-white"
          loading="eager"
          alt="Photograph showing temperature and humidity sensor"
        />
      </div>
      <div className="flex items-center p-x-2 p-2">
        <Link
          href="/monitoring"
          className="flex items-center gap-5 self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800"
        >
          <span>Start online monitoring</span>
          <ArrowRightIcon className="w-5 md:w-6 text-black" />
        </Link>
      </div> */}
    </main>
  );
}
