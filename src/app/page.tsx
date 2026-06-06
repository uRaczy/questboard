import Link from "next/link";

import { TopNavigation } from "@/components/layout/top-navigation";
import { QuestCard } from "@/components/quests/QuestCard";
import { QuestDetailsOverlay } from "@/components/quests/QuestDetailsOverlay";
import { getQuestById, getQuestPreviewByStatus } from "@/lib/quests";
import { mockQuests } from "@/mocks/quests";
import type { QuestStatus } from "@/types/quest";

const previewStatuses: { status: QuestStatus; title: string }[] = [
  { status: "todo", title: "Todo preview" },
  { status: "active", title: "Active preview" },
  { status: "complete", title: "Complete preview" },
];

type Props = {
  searchParams?: Promise<{
    quest?: string | string[];
  }>;
};

function getQuestId(questParam?: string | string[]) {
  return Array.isArray(questParam) ? questParam[0] : questParam;
}

export default async function Home({ searchParams }: Props) {
  const params = await searchParams;
  const selectedQuestId = getQuestId(params?.quest);
  const selectedQuest = getQuestById(mockQuests, selectedQuestId);
  const hasQuestParam = selectedQuestId !== undefined;
  const activeQuests = mockQuests.filter((quest) => quest.status === "active");
  const completedQuests = mockQuests.filter(
    (quest) => quest.status === "complete",
  );
  const totalMinutes = mockQuests.reduce(
    (minutes, quest) => minutes + quest.timeSpentMinutes,
    0,
  );

  return (
    <div className="min-h-screen">
      <TopNavigation />

      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
            Character dashboard
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Organize your quests without losing sight of the next move.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Questboard gives this project a simple, responsive starting point
            for planning priorities, following progress, and shaping the app
            one clear step at a time.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3" aria-label="Quest stats">
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <p className="text-sm text-stone-500">Active quests</p>
            <p className="mt-2 text-3xl font-semibold text-stone-950">
              {activeQuests.length}
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <p className="text-sm text-stone-500">Completed quests</p>
            <p className="mt-2 text-3xl font-semibold text-stone-950">
              {completedQuests.length}
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5">
            <p className="text-sm text-stone-500">Time logged</p>
            <p className="mt-2 text-3xl font-semibold text-stone-950">
              {totalMinutes} min
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-4" aria-labelledby="quest-preview">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                Quest preview
              </p>
              <h2
                id="quest-preview"
                className="mt-2 text-2xl font-semibold tracking-tight text-stone-950"
              >
                A glimpse across the board
              </h2>
            </div>
            <Link
              href="/quests"
              className="inline-flex w-fit rounded-md bg-stone-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-800"
            >
              View all quests
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {previewStatuses.map((preview) => {
              const quest = getQuestPreviewByStatus(
                mockQuests,
                preview.status,
              );

              return (
                <div key={preview.status} className="flex flex-col gap-3">
                  <h3 className="text-sm font-medium text-stone-500">
                    {preview.title}
                  </h3>
                  {quest ? (
                    <QuestCard quest={quest} href={`/?quest=${quest.id}`} />
                  ) : (
                    <div className="rounded-lg border border-dashed border-stone-300 bg-white p-5 text-sm text-stone-500">
                      No {preview.status} quest yet.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {hasQuestParam ? (
        <QuestDetailsOverlay closeHref="/" quest={selectedQuest} />
      ) : null}
    </div>
  );
}
