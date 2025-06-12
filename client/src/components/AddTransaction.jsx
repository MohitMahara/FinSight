"use client";

import { useState } from "react";
import axios from "axios";

export default function AddTransaction() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");   
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

       if(!title || !amount || !date || !status){
        console.log("All fields are required"); 
        return;
       }

      const res = await axios.post("/api/transaction", {
        title,
        amount: parseFloat(amount),
        date,
        status,
        description
      });

      if(res){
        setTitle("");
        setAmount("");
        setDate("");
        setStatus("");
        setDescription("");
        console.log("Transaction added successfully");
      }


    } catch (error) {
      console.log("Error adding transaction:", error.message);
    }
  }

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">Add New Transaction</h2>

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Title" className="p-2 border rounded-md" value={title} onChange={(e) => {setTitle(e.target.value)}} required/>
          <input type="number" placeholder="Amount" className="p-2 border rounded-md" value={amount} onChange={(e) => setAmount(e.target.value)} required/>
          <input type="text" placeholder="Description" className="p-2 border rounded-md" value={description} onChange={(e) => setDescription(e.target.value)}/>
          <input type="date" className="p-2 border rounded-md" value={date} onChange={(e) => setDate(e.target.value)} required/>
          <select className="p-2 border rounded-md" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="Sent">Sent</option>
            <option value="Received">Received</option>
          </select>
        </div>
        <button type="submit" className="mt-6 bg-black text-gray-100 py-2 px-4 rounded-md hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
