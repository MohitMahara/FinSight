"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";


export default function EditDialog({open, onOpenChange, transId}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");


  const getTransDetail = async() =>{
    try {

      if(!transId) return;

      const res = await axios.get(`api/transaction/${transId}`);

      if(res.data.success){
          const transaction = res.data.transaction;
          setTitle(transaction?.title);
          setDescription(transaction?.description);
          setAmount(transaction?.amount);
          setDate(transaction?.date.slice(0, 10));
          setStatus(transaction?.status);
      }
      
    } catch (error) {
      toast.error(error.message);
    }
  }


  useEffect(() =>{
    getTransDetail();
  }, [])


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

      if(res.data.success){
        onOpenChange(false);
        toast.success(res.data.msg);
      }
        
    } catch (error) {
        toast.error(error.message);
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
              <div className="flex gap-2 justify-end">
                <button type="button" className="mt-6 bg-gray-300 text-black py-2 px-8 rounded-md hover:bg-gray-200 hover:text-black transition duration-200 cursor-pointer" onClick={() => onOpenChange(false)}>
                  Cancel
                </button>
                <button type="submit" className="mt-6 bg-black text-gray-100 py-2 px-8 rounded-md hover:bg-black-200 hover:text-white transition duration-200 cursor-pointer">
                  Save Changes
                </button>
              </div>
            </form>
      </DialogContent>
    </Dialog>
  );
}
