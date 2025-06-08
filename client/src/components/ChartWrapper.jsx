'use client';

import dynamic from 'next/dynamic';

const MonthlyExpenseBar = dynamic(() => import('../components/MonthlyExpenseBar'), {
  ssr: false,
});

export default function ChartWrapper(){
  return(
    <MonthlyExpenseBar />
  )
}