import { JSX } from 'react';
import Filter from '@/app/ui/components/filter';
import Button from '@/app/ui/components/button';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import GraphsBlock from '@/app/ui/components/graphs-block';

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
      <GraphsBlock query={query} />
      <Button
        url="/monitoring"
        slot="Monitoring"
        icon={<ArrowLeftIcon />}
        direction="left"
      />
    </>
  );
}
