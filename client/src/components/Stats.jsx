"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Stats() {

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [totalTrans, setTotalTrans] = useState(0);


  const getTotal = (trans) => {
    let total = 0;
    trans.forEach((t) =>{
      total+=t.amount;
    })

    return total;
  }


  const getAllTrans = async () => {
    try {
      const res = await axios.get("/api/transaction");
      if (res && res.data) {
        const transactions = res.data.transactions;
        if (transactions && transactions.length > 0) {
          const incomeTrans = transactions.filter((trans) => trans.status.toLowerCase() === "received");
          const expenseTrans = transactions.filter((trans) => trans.status.toLowerCase() === "sent");
          setTotalTrans(transactions.length);
          setIncome(getTotal(incomeTrans));
          setExpense(getTotal(expenseTrans));
        }
      } else {
        console.error("Failed to fetch transactions");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error.message);
    }
  }

  useEffect(() =>{
    getAllTrans();
  }, [])


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-full shadow-md text-center">
          <p className="text-2xl font-bold">{formatCurrency(income)}</p>
          <p className="text-gray-700 text-md pt-1">Total Income</p>
        </div>

        <div className="bg-white p-6 rounded-full shadow-md text-center">
          <p className="text-2xl font-bold">{formatCurrency(expense)}</p>
          <p className="text-gray-700 text-md pt-1">Total Expenses</p>
        </div>

        <div className="bg-white p-6 rounded-full shadow-md text-center">
          <p className="text-2xl font-bold">{totalTrans}</p>
          <p className="text-gray-700 text-md pt-1">Total Transactions</p>
        </div>
    </div>
  );
}
