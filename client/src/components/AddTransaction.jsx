"use client";

import { useState } from "react";

export default function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");   
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Add New Transaction</h2>

      <form className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" className="p-2 border rounded-md" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
          <input type="number" placeholder="Amount" className="p-2 border rounded-md" value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <input type="date" className="p-2 border rounded-md" value={date} onChange={(e) => setDate(e.target.value)}/>
          <select className="p-2 border rounded-md" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Select Status</option>
            <option value="Sent">Sent</option>
            <option value="Received">Received</option>
          </select>
        </div>
        <button type="submit" className="mt-4 bg-black text-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer" >
          Add Transaction
        </button>
      </form>
    </div>
  );
}
