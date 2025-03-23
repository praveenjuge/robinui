import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 text-sm font-medium">
      <div className="bg-foreground text-background flex aspect-square size-5 items-center justify-center rounded">
        <svg
          className="h-2.5"
          fill="currentColor"
          viewBox="0 0 272 212"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M227.414 61.8305C224.321 57.9394 224.255 52.2583 227.77 48.7436L269.149 15.364C274.819 9.69427 270.803 0 262.785 0H155.198C129.437 0 105.584 13.5775 92.4308 35.7272L2.26726 187.562C-4.06616 198.228 3.6203 211.732 16.0245 211.732H201.678C204.065 211.732 206.356 210.794 208.014 209.077C249.916 165.675 263.034 106.642 227.414 61.8305Z" />
        </svg>
      </div>
      <span>Robin UI</span>
    </Link>
  );
}
