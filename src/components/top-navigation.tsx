const navItems = ["Overview", "Quests", "Progress"];

export function TopNavigation() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="#" className="text-lg font-semibold tracking-tight">
          Questboard
        </a>

        <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-md px-3 py-2 transition hover:bg-stone-100 hover:text-stone-950"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
