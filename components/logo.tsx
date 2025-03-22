import { Bird } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-foreground text-background flex aspect-square size-6 items-center justify-center rounded">
        <Bird className="size-3.5" />
      </div>
      <span className="font-medium">Robin UI</span>
    </div>
  );
}
