import { JSX } from 'react';

export default function ScheduleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <div className="flex flex-col gap-30 items-center p-6 bg-gray-100">
      ScheduleLayout
      {children}
    </div>
  );
}
