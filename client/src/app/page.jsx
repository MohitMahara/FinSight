import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <div className="">
        <SidebarProvider>
          <AppSidebar/>
          <div className="flex-1 py-6 px-4 bg-gray-200">
               <SidebarTrigger/>
               <div className="mb-8">
                  <h1 className="text-3xl font-bold mb-1 text-center">Welcome to FinSight</h1>
                  <p className="text-md text-center italic text-gray-700 tracking-wide">Your personal finance tracker</p>
               </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-full shadow p-6 text-center">
                    <p className="text-2xl font-bold">$30,000</p>
                    <p className="text-gray-700 text-md pt-1">Total Income</p>
                  </div>

                  <div className="bg-white p-4 rounded-full shadow p-6 text-center">
                    <p className="text-2xl font-bold">$15,000</p>
                    <p className="text-gray-700 text-md pt-1">Total Expenses</p>
                  </div>


                  <div className="bg-white p-4 rounded-full shadow p-6 text-center">
                    <p className="text-2xl font-bold">20</p>
                    <p className="text-gray-700 text-md pt-1">Total Transaction</p>
                  </div>
             </div>
             
             <div className="mt-8 bg-white p-6 rounded-lg shadow  w-full md:w-5xl mx-auto">
                <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>

                <div className="flex flex-col space-y-4 overflow-y-scroll max-h-60">

                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                      <p className="text-md font-semibold">Salary</p>
                      <p className="text-sm text-gray-600">Received on 01/01/2025</p>
                    </div>
                    <span className="text-green-500 font-bold">$5,000</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                      <p className="text-md font-semibold">Groceries</p>
                      <p className="text-sm text-gray-600">Spent on 02/01/2025</p>
                    </div>
                    <span className="text-red-500 font-bold">-$200</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                      <p className="text-md font-semibold">Utilities</p>
                      <p className="text-sm text-gray-600">Spent on 03/01/2025</p>
                    </div>
                    <span className="text-red-500 font-bold">-$150</span>
                  </div>

                  
                  <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <div>
                      <p className="text-md font-semibold">Utilities</p>
                      <p className="text-sm text-gray-600">Spent on 03/01/2025</p>
                    </div>
                    <span className="text-red-500 font-bold">-$150</span>
                  </div>
                </div>

             </div>

             <div className="">

             </div>
             
          </div>
        </SidebarProvider>
      </div>
   </main>
  );
}
