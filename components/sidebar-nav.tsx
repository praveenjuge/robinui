"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

interface NavData {
  navMain: NavSection[];
}

export const data: NavData = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          url: "/",
        },
        {
          title: "Installation",
          url: "/installation",
        },
      ],
    },
    {
      title: "Chat Components",
      items: [
        {
          title: "Container",
          url: "/components/container",
        },
        {
          title: "Message",
          url: "/components/message",
        },
        {
          title: "Markdown",
          url: "/components/markdown",
        },
        {
          title: "Reasoning",
          url: "/components/reasoning",
        },
        {
          title: "Streaming",
          url: "/components/streaming",
        },
        {
          title: "Loaders",
          url: "/components/loaders",
        },
      ],
    },
  ],
};

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      {data.navMain.map((item) => (
        <SidebarGroup key={item.title}>
          <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {item.items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.url}
                  >
                    <Link href={item.url}>{item.title}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  );
}
