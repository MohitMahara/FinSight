'use client';

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function MonthlyExpenseBar() {

  const data = [
    { month: 'Jan', total: 4000 },
    { month: 'Feb', total: 3000 },
    { month: 'Mar', total: 5000 },
    { month: 'Apr', total: 3500 },
    { month: 'May', total: 4200 },
    { month: 'Jun', total: 4800 },
    { month: 'Jul', total: 6000 },
    { month: 'Aug', total: 7000 },
    { month: 'Sep', total: 6200 },
    { month: 'Oct', total: 7500 },
    { month: 'Nov', total: 8000 },
    { month: 'Dec', total: 9000 }
];


  return (
    <>
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md h-[400px] w-full max-w-screen-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Monthly Expense Overview</h2>
         <ResponsiveContainer width="97%" height="80%">
            <LineChart data={data} className="my-6">
              <Line type="monotone" dataKey="total" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>      
      </div>
    </>
  );
}
