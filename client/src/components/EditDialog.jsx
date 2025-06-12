"use client";

import { useState } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "./ui/dialog";

export default function EditDialog({open, onOpenChange, transId}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");




  const handleSubmit = async(e) => {
    e.preventDefault();
    try {

     const res = await axios.put(`/api/transaction/${transId}`, {
        title,
        amount: parseFloat(amount),
        date,
        status,
        description
      });
        
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Transaction</DialogTitle>
          <DialogDescription/>
         </DialogHeader> 
            <form className="mt-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Title" className="p-2 border rounded-md"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <input  type="number"  placeholder="Amount"  className="p-2 border rounded-md"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <input type="text"  placeholder="Description" className="p-2 border rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <input type="date" className="p-2 border rounded-md"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <select className="p-2 border rounded-md" value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="Sent">Sent</option>
                  <option value="Received">Received</option>
                </select>
              </div>
            </form>
            <DialogFooter>
              <button type="button" className="mt-6 bg-gray-300 text-black py-2 px-8 rounded-md hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer">
                Cancel
              </button>
              <button type="submit" className="mt-6 bg-black text-gray-100 py-2 px-8 rounded-md hover:bg-black-200 hover:text-white transition duration-200 cursor-pointer">
                Save Changes
              </button>
            </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
