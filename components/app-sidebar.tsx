import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SparklesSolid } from "@mynaui/icons-react";

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "#",
          isActive: true,
        },
        {
          title: "Installation",
          url: "#",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Message",
          url: "#",
        },
        {
          title: "Chat",
          url: "#",
        },
        {
          title: "Image",
          url: "#",
        },
        {
          title: "Video",
          url: "#",
        },
      ],
    },
    {
      title: "Pro",
      url: "#",
      items: [
        {
          title: "Templates",
          url: "#",
        },
        {
          title: "Figma",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center justify-between text-sm p-1.5">
          <Logo />
          <div className="flex items-center gap-2">
            <ModeToggle />
            <SidebarTrigger className="-mr-1" />
          </div>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-0">
        <Card className="shadow-none p-4 gap-3 border-0 border-t rounded-none">
          <CardHeader className="p-0">
            <div className="flex items-center gap-2">
              <SparklesSolid className="size-4" />
              <CardTitle className="text-sm">
                Newsletter
              </CardTitle>
            </div>
            <CardDescription>
              Get the latest news and updates from Robin UI
            </CardDescription>
          </CardHeader>
          <CardContent className="grid p-0">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
              href="https://praveenjuge.substack.com/embed"
            >
              Subscribe
            </Link>
          </CardContent>
        </Card>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
