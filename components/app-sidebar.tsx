import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
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
import { SidebarNav } from "@/components/sidebar-nav";

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
        <SidebarNav />
      </SidebarContent>
      <SidebarFooter className="p-0">
        <Card className="shadow-none p-4 gap-3 border-0 border-t rounded-none">
          <CardHeader className="p-0">
            <div className="flex items-center gap-1.5">
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
              Subscribe for Updates
            </Link>
          </CardContent>
        </Card>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
