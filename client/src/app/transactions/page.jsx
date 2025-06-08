import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@//components/AppSidebar";
import TransCard from "@//components/TransCard";
import AddTransaction from "@//components/AddTransaction";


export default function Transactions() {
  const transcation = {
    title: "Grocery Shopping",
    status: "sent",
    amount: 1500,
    date: "08-06-2025",
  }
  return (
    <main className="w-full min-h-screen">
      <SidebarProvider>
        <div className="w-full flex min-h-screen overflow-hidden">
          <AppSidebar />
          <div className="flex-1 py-3 px-4 bg-gray-200 ">
            <SidebarTrigger />
             <div className="mb-8">
                <h1 className="text-3xl font-bold mb-1 text-center">Transactions</h1>
                <p className="text-gray-600 mb-4 italic text-gray-700 tracking-wide text-center">Here you can view and manage all your transactions.</p>
             </div>

            <AddTransaction />


             <div className="max-w-5xl mt-6 mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-bold mb-4">All Transactions</h2>
               <div className="flex flex-col space-y-4 overflow-y-scroll h-[60vh]">
                <TransCard transcation={transcation} />
                <TransCard transcation={transcation} />
                <TransCard transcation={transcation} />
                <TransCard transcation={transcation} />
                <TransCard transcation={transcation} />
              </div>
            </div>

          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
