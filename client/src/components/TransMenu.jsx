"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import {Ellipsis} from "lucide-react";
import axios from "axios";
import EditDialog from "./EditDialog";
import { useState } from "react";
import toast from "react-hot-toast";


export default function TransMenu({transId}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async() =>{
     try {
       const res = await axios.delete(`/api/transaction/${transId}`);

       if(res.data.success){
        toast.success(res.data.msg);
       }
       
     } catch (error) {
      toast.error(error.message);
     }
  }

  const handleEditMenu = () => {
    setTimeout(() =>{
         setIsOpen(true);
    }, 50)
  }

  return(
    <>
    <DropdownMenu className="w-[50px]">
        <DropdownMenuTrigger className="ml-auto focus:outline-none">
           <Ellipsis className="w-[30px] opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"/>
        </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleEditMenu}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <EditDialog open={isOpen} onOpenChange={setIsOpen} transId={transId}/>

    </>
  );
}
