"use client";

import EditDialog from "./EditDialog";
import TransMenu from "./TransMenu";

export default function TransCard({ transaction }) {

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 2,
    }).format(amount);
  };


  return (
    <div className="flex group justify-between items-center bg-gray-100 p-4 rounded-lg cursor-pointer">
        <div className="w-[80%]">
            <p className="text-md font-semibold">{transaction?.title}</p>
            <p className="text-gray-800 text-sm semibold"> {transaction?.status.toLowerCase()} on {new Date(transaction?.date).toLocaleDateString()}</p>    
        </div>
        <div className="flex flex-col w-[20%]">
             <TransMenu transId={transaction?.id}/>
             <p className={`text-md font-bold ${transaction?.status == "Sent" ? "text-red-500" : "text-green-500"} text-end`}> {formatCurrency(transaction?.amount)} </p>
        </div>
        <EditDialog/>
    </div>
  );
}
