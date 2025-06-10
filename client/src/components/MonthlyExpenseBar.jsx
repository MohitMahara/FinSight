'use client';

import { useState, useEffect } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import axios from "axios";


export default function MonthlyExpenseBar() {

  const formatCurrency = (amount) => {
    
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const [data, setData] = useState([
    { Month: "Jan", Amount: 0},
    { Month: "Feb", Amount: 0},
    { Month: "Mar", Amount: 0},
    { Month: "Apr", Amount: 0},
    { Month: "May", Amount: 0},
    { Month: "Jun", Amount: 0},
    { Month: "Jul", Amount: 0},
    { Month: "Aug", Amount: 0},
    { Month: "Sep", Amount: 0},
    { Month: "Oct", Amount: 0},
    { Month: "Nov", Amount: 0},
    { Month: "Dec", Amount: 0}
  ]);


  const getTranscation = async () => {
     try {
        const res = await axios.get("/api/transaction");
        if (res && res.data) {

           const transactions = res.data.transactions.filter((trans) => trans.status.toLowerCase() == "sent");
           const monthlyTotals = new Array(12).fill(0);

           transactions.forEach((trans) => {
              const date = new Date(trans.date);
              const month = date.getMonth();
              monthlyTotals[month] += trans.amount;
           })

          const updatedData = data.map((entry, index) => ({
            ...entry,
            Amount: monthlyTotals[index],
          }));

          setData(updatedData);
        }
     } catch (error) {
        console.log("Error fetching transactions:", error.message);
     }
  };


  useEffect(() => {
    getTranscation();
  }, []);


  return (
    <>
    <div className="mt-8 bg-white p-6 rounded-lg shadow-md h-[400px] w-full max-w-screen-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Monthly Expense Overview</h2>
         <ResponsiveContainer width="97%" height="80%">
            <LineChart data={data} className="my-6">
              <Line type="monotone" dataKey="Amount" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="Month" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(value)}/>
            </LineChart>
          </ResponsiveContainer>      
    </div>
    </>
  );
}
