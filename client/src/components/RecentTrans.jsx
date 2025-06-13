"use client";

import TransCard from "./TransCard"
import { useTransactions } from "./TransactionContext";

export default function RecentTrans() {
  
  const {transactions, loading } = useTransactions();

  if(loading) return <>Loading...</>;
  
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