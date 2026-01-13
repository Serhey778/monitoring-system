import { JSX } from 'react';

export default function Skeleton(): JSX.Element {
  const chartHeight = 350;
  return (
    <div className="w-full text-center m-6 ">
      <div className="flex flex-row w-full gap-2 flex-wrap overflow-hidden rounded-xl bg-white justify-center">
        <div
          className=" flex w-10 flex-col justify-between p-2 text-sm rounded-md text-black bg-gray-300"
          style={{ height: `${chartHeight}px` }}
        ></div>
        <div
          className=" flex w-83 flex-row overflow-hidden overflow-x-scroll whitespace-nowrap justify-start items-end rounded-md p-2 bg-gray-300 "
          style={{ height: `${chartHeight}px` }}
        ></div>
      </div>
    </div>
  );
}
