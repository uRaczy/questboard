import Link from "next/link";

import { QuestDetails } from "@/components/quests/QuestDetails";
import type { Quest } from "@/types/quest";

type Props = {
  closeHref: string;
  quest?: Quest;
};

export function QuestDetailsOverlay({ closeHref, quest }: Props) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/40 px-4 py-8">
      <Link
        href={closeHref}
        className="fixed inset-0"
        aria-label="Close quest details"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quest details"
        className="relative mx-auto flex max-w-3xl flex-col gap-3"
      >
        <div className="flex justify-end">
          <Link
            href={closeHref}
            className="rounded-md bg-white px-3 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:text-stone-950"
          >
            Close
          </Link>
        </div>

        {quest ? (
          <QuestDetails quest={quest} />
        ) : (
          <section className="rounded-lg border border-stone-200 bg-white p-5">
            <h2 className="text-xl font-semibold tracking-tight text-stone-950">
              Quest not found
            </h2>
          </section>
        )}
      </div>
    </div>
  );
}
