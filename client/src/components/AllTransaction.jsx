"use client";

import TransCard from "./TransCard";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AllTransaction() {

  const [transactions, setTransactions] = useState([]);

  const getTranscation = async () => {
     try {
        const res = await axios.get("/api/transaction");
        if (res && res.data) {
          const transactions = res.data.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
          setTransactions(transactions);
          console.log("Transactions fetched successfully");
        }
     } catch (error) {
        console.log("Error fetching transactions:", error.message);
     }
  };


  useEffect(() => {
    getTranscation();
  }, []);


  return (
    <div className="max-w-5xl mt-6 mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">All Transactions</h2>
      <div className="flex flex-col space-y-4 overflow-y-scroll h-[60vh]">
        {transactions.length == 0 ? (
          <p className="text-gray-500">No transactions found.</p>
        ) : (
          transactions?.map((transaction) => (
            <TransCard transaction={transaction} key={transaction.id} />
          ))
        )}
      </div>
    </div>
  );
}
