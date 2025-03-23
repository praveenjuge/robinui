import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 text-sm font-medium">
      <div className="bg-foreground text-background flex aspect-square size-5 items-center justify-center rounded">
        <svg
          className="h-2.5"
          viewBox="0 0 272 212"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M243.414 53.8305C240.321 49.9394 240.255 44.2583 243.77 40.7436L269.149 15.364C274.819 9.69427 270.803 0 262.785 0H155.198C129.437 0 105.584 13.5775 92.4308 35.7272L2.26726 187.562C-4.06616 198.228 3.6203 211.732 16.0245 211.732H201.678C204.065 211.732 206.356 210.794 208.014 209.077C249.916 165.675 279.034 98.6421 243.414 53.8305ZM201.771 36.4124C195.973 36.4124 191.274 31.7132 191.274 25.9148C191.274 20.1164 195.973 15.4172 201.771 15.4172C207.57 15.4172 212.269 20.1164 212.269 25.9148C212.265 31.7089 207.566 36.4124 201.771 36.4124Z" />
        </svg>
      </div>
      <span>Robin UI</span>
    </Link>
  );
}
