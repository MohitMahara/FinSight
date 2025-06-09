'use client';

import { Home, Inbox} from "lucide-react"
import { usePathname } from "next/navigation";
import { Sidebar,SidebarContent,SidebarGroup,SidebarGroupContent,SidebarGroupLabel,SidebarMenu,SidebarMenuButton,SidebarMenuItem} from "@/components/ui/sidebar"
import Link from "next/link";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "/transactions",
    icon: Inbox,
  },

]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className={"w-64 shrink-0 shadow-lg h-screen"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={"text-2xl text-gray-900 mb-4 pt-4"}>FinSight</SidebarGroupLabel>
          <SidebarGroupContent className={"mt-4"}>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`text-lg text-gray-900 font-semibold py-4 px-2 mt-2 ${pathname === item.url ? "bg-gray-200 hover:bg-gray-200" : ""}`}>
                    <Link href={item?.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}