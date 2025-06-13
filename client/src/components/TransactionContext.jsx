"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    try {

      setLoading(true);

      const res = await axios.get("api/transaction");
      if (res.data.success) {
        const trans = res.data.transactions.sort((a, b) => (new Date(b.date)) - (new Date(a.date)) );
        setTransactions(trans);
      }

    } catch (error) {
      toast.error("Error while fetching transactions");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() =>{
    getTransactions();
  },[])

  return (
    <TransactionContext.Provider value={{ transactions, loading, getTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => useContext(TransactionContext);
