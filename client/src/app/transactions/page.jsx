import { SidebarProvider, SidebarTrigger } from "../../../srccomponents/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import AddTransaction from "@/components/AddTransaction";
import AllTransaction from "@/components/AllTransaction";


export default function Transactions() {

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
             <AllTransaction />
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
