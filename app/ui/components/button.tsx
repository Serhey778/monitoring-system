import Link from 'next/link';
import { JSX } from 'react';

export default function Button({
  url,
  slot,
  icon,
  direction,
}: {
  url: string;
  slot: string;
  icon: React.ReactNode;
  direction: 'left' | 'right';
}): JSX.Element {
  return (
    <div className="flex  justify-center items-center p-x-2 p-2 ">
      <Link
        href={url}
        className="flex items-center gap-5 self-start rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800"
      >
        {direction === 'right' ? (
          <>
            <span>{slot}</span>
            <span className="w-5 md:w-6 text-black">{icon}</span>
          </>
        ) : (
          <>
            <span className="w-5 md:w-6 text-black">{icon}</span>{' '}
            <span>{slot}</span>
          </>
        )}
      </Link>
    </div>
  );
}
