import { SidebarProvider, SidebarTrigger } from "../../srccomponents/ui/sidebar";
import { AppSidebar } from "../components/AppSidebar";
import ChartWrapper from "../components/ChartWrapper";
import Stats from "../components/Stats";
import RecentTrans from "../components/RecentTrans";

export default function HomePage() {
  return (
    <main className="w-full min-h-screen">
      <SidebarProvider>
        <div className="w-full flex min-h-screen overflow-hidden">
          <AppSidebar />
          <div className="flex-1 py-3 px-4 bg-gray-200 ">
            <SidebarTrigger />
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-1 text-center">
                Welcome to FinSight
              </h1>
              <p className="text-md text-center italic text-gray-700 tracking-wide">
                Your personal finance tracker
              </p>
            </div>
            <Stats/>
            <RecentTrans />
            <ChartWrapper />
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
}
