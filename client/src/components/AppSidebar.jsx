'use client';

import { Home, Inbox} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useState } from "react"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Transactions",
    url: "/transations",
    icon: Inbox,
  },

]

export function AppSidebar() {

  const [activeItem, setActiveItem] = useState("Home");

  return (
    <Sidebar className={"w-64 shrink-0 shadow-lg h-screen"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={"text-2xl text-gray-900 mb-4 pt-4"}>FinSight</SidebarGroupLabel>
          <SidebarGroupContent className={"mt-4"}>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className={`text-lg text-gray-900 font-semibold p-2 mt-2 ${activeItem === item.title ? "bg-gray-200 hover:bg-gray-200" : ""}`} onClick={() => setActiveItem(item.title)}>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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