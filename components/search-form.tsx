"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { data } from "@/components/sidebar-nav";
import { useRouter } from "next/navigation";

export function SearchForm() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="shadow-none !px-2 text-muted-foreground mx-1"
        onClick={() => setOpen(true)}
      >
        <Search />
        <span>Search...</span>
        <kbd className="pointer-events-none ml-auto hidden select-none items-center gap-px rounded border bg-muted px-1.5 py-px font-mono text-[10px] font-medium xl:flex">
          ⌘ K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search all pages..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {data.navMain.map((section) => (
            <CommandGroup key={section.title} heading={section.title}>
              {section.items.map((item) => (
                <CommandItem
                  key={item.url}
                  onSelect={() => {
                    router.push(item.url);
                    setOpen(false);
                  }}
                >
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
