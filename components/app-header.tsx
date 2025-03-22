"use client";

import { buttonVariants } from "@/components/ui/button";
import { BrandGithub, BrandX } from "@mynaui/icons-react";
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";

export function Header() {
  const { state, isMobile } = useSidebar();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 px-4">
      <div className="flex items-center gap-2">
        {(state === "collapsed" || isMobile) &&
          (
            <>
              <SidebarTrigger className="-ml-1" />
              <Logo />
            </>
          )}
      </div>
      <div className="flex items-center gap-2">
        <a
          href="https://x.com/praveenjuge"
          target="_blank"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
          })}
        >
          <BrandX className="stroke-2" />
        </a>
        <a
          href="https://github.com/praveenjuge/robinui"
          target="_blank"
          className={buttonVariants({ variant: "outline", size: "sm" })}
        >
          <BrandGithub className="stroke-2" />
          Star on GitHub
        </a>
      </div>
    </header>
  );
}
