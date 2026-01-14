import Link from 'next/link';
import { JSX } from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/outline';
export default function notFound(): JSX.Element {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-gray-400" />
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Monitoring data not found in database.</p>
      <Link
        href="/monitoring/graph"
        className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-800"
      >
        Go Back
      </Link>
    </main>
  );
}
