import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1.5 text-sm font-medium">
      <div className="bg-foreground text-background flex aspect-square size-5 items-center justify-center rounded">
        <svg
          className="h-3"
          fill="currentColor"
          viewBox="0 0 52 56"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.621765 56V12.509H13.4878V30.2709C13.4878 30.2709 24.8379 0 51.3265 0V15.8919C51.3265 15.8919 14.2443 22.7032 15.0008 56H0.621765Z" />
          <path d="M51.3234 42.2443C43.5288 42.2443 37.1532 48.3233 36.6812 55.997C36.2091 48.3233 29.8336 42.2443 22.0389 42.2443C29.8336 42.2443 36.2091 36.1623 36.6812 28.4887C37.1532 36.1623 43.5288 42.2443 51.3234 42.2443Z" />
        </svg>
      </div>
      <span>Robin UI</span>
    </Link>
  );
}
