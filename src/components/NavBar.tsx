import Link from "next/link";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/health", label: "Health" },
  { href: "/chat", label: "Chat" },
] as const;

export default function NavBar() {
  return (
    <nav className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Capstone
        </Link>
        <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
