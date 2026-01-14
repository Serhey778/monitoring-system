'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { FunnelIcon } from '@heroicons/react/24/outline';

export default function Filter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [selected, setSelected] = useState<string | Event>('1hour');
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('query', `${selected}`);
    replace(`${pathname}?${params.toString()}`);
  }, [selected]);
  const handleChange = (value: string | Event) => {
    setSelected(value);
  };
  return (
    <fieldset>
      <div className="flex flex-row justify-center items-center md:gap-7 md:px-2 md:py-2 bg-gray-100 rounded-md border text-sm md:text-ml ">
        <legend className=" flex flex-row">
          <FunnelIcon className="w-5 mx-1 hidden md:block" />
        </legend>
        <label htmlFor="1hour" className="flex flex-row">
          <p>1hour: </p>
          <input
            id="1hour"
            name="data"
            type="checkbox"
            className="w-6 cursor-pointer"
            checked={selected === '1hour'}
            onChange={() => handleChange('1hour')}
            aria-describedby="likes-error"
          />
        </label>
        <label htmlFor="6hours" className="flex flex-row ml-2">
          <p>6hours: </p>
          <input
            id="6hours"
            name="data"
            type="checkbox"
            className="w-6 cursor-pointer"
            checked={selected === '6hours'}
            onChange={() => handleChange('6hours')}
            aria-describedby="likes-error"
          />
        </label>
        <label htmlFor="24hours" className="flex flex-row ml-2">
          <p>24hours: </p>
          <input
            id="24hours"
            name="data"
            type="checkbox"
            className="w-6 cursor-pointer"
            checked={selected === '24hours'}
            onChange={() => handleChange('24hours')}
          />
        </label>
        <label htmlFor="date" className="flex flex-row ml-2">
          <input
            id="date"
            name="data"
            type="date"
            className="w-25 cursor-pointer"
            placeholder="date"
            onChange={(event) => handleChange(event.target.value)}
            aria-describedby="date-error"
          />
        </label>
      </div>
    </fieldset>
  );
}
