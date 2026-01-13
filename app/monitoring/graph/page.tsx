import { JSX } from 'react';
import { Suspense } from 'react';
import Filter from '@/app/ui/components/filter';
import Button from '@/app/ui/components/button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import GraphsBlock from '@/app/ui/components/graphs-block';
import Skeleton from '@/app/ui/components/skeleton';

export default async function GraphPage(props: {
  searchParams?: Promise<{
    query?: string;
  }>;
}): Promise<JSX.Element> {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <>
      <Filter />
      <Suspense
        fallback={
          <>
            <Skeleton />
            <Skeleton />
          </>
        }
      >
        <GraphsBlock query={query} />
      </Suspense>
      <Button
        url="/monitoring"
        slot="Monitoring"
        icon={<ArrowLeftIcon />}
        direction="left"
      />
    </>
  );
}
