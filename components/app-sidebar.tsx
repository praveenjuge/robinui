import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
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
      <SidebarRail />
    </Sidebar>
  );
}
