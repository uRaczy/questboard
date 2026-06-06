import Link from "next/link";

import type { Quest } from "@/types/quest";
import { getQuestXp } from "@/lib/quests";
import { getCreatorName } from "@/lib/users";

type Props = {
  quest: Quest;
  href?: string;
};

export function QuestCard({ quest, href }: Props) {
  const { title, size, status, creatorId } = quest;
  const creatorName = getCreatorName(creatorId);
  const card = (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide">
        <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-700">
          {status}
        </span>
        <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">
          {size}
        </span>
        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-emerald-800">
          {getQuestXp(quest)} XP
        </span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-stone-950">
        {title}
      </h3>

      <div className="mt-auto border-t border-stone-100 pt-4 text-sm text-stone-500">
        {creatorName}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
