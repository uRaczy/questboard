import Link from "next/link";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Quests", href: "/quests" },
  { label: "Progress", href: "#" },
];

export function TopNavigation() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Questboard
        </Link>

        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-stone-100 hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
