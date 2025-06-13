"use client";

import TransCard from "./TransCard"
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function RecentTrans() {
  
  const [transactions, setTransactions] = useState([]);

  const getTranscation = async () => {
     try {
        const res = await axios.get("/api/transaction");
        if (res && res.data) {
          const transactions = res.data.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
          setTransactions(transactions);
        }
     } catch (error) {
        toast.error(error.message);
     }
  };


  useEffect(() => {
    getTranscation();
  }, []);


    return (
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md h-[400px] w-full max-w-screen-lg mx-auto">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

        <div className="flex flex-col space-y-4 overflow-y-scroll max-h-[80%]">
          {transactions.map((transaction) => (
            <TransCard transaction={transaction} key={transaction.id} />
          ))}
        </div>
      </div>
    )
} 