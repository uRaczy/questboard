import { TopNavigation } from "@/components/layout/TopNavigation";
import { QuestCard } from "@/components/quests/QuestCard";
import { QuestDetailsOverlay } from "@/components/quests/QuestDetailsOverlay";
import { getQuestById, getQuestsByStatus } from "@/lib/quests";
import { mockQuests } from "@/mocks/quests";
import type { QuestStatus } from "@/types/quest";

const columns: { status: QuestStatus; title: string }[] = [
  { status: "todo", title: "Todo" },
  { status: "active", title: "Active" },
  { status: "complete", title: "Complete" },
];

type Props = {
  searchParams?: Promise<{
    quest?: string | string[];
  }>;
};

function getQuestId(questParam?: string | string[]) {
  return Array.isArray(questParam) ? questParam[0] : questParam;
}

export default async function QuestsPage({ searchParams }: Props) {
  const params = await searchParams;
  const selectedQuestId = getQuestId(params?.quest);
  const selectedQuest = getQuestById(mockQuests, selectedQuestId);
  const hasQuestParam = selectedQuestId !== undefined;

  return (
    <div className="min-h-screen">
      <TopNavigation />

      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-stone-500">Quest board</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            Track every quest by status.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
            Move from future work to active focus to completed wins without leaving the board.
          </p>
        </section>

        <section className="grid gap-4 lg:grid-cols-3" aria-label="Quest kanban board">
          {columns.map((column) => {
            const quests = getQuestsByStatus(mockQuests, column.status);

            return (
              <div
                key={column.status}
                className="flex flex-col gap-4 rounded-lg border border-stone-200 bg-stone-50 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-lg font-semibold text-stone-950">{column.title}</h2>
                  <span className="rounded-full bg-white px-2.5 py-1 text-sm font-medium text-stone-600">
                    {quests.length}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {quests.length > 0 ? (
                    quests.map((quest) => (
                      <QuestCard key={quest.id} quest={quest} href={`/quests?quest=${quest.id}`} />
                    ))
                  ) : (
                    <p className="rounded-lg border border-dashed border-stone-300 bg-white p-5 text-sm text-stone-500">
                      No quests here yet.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      {hasQuestParam ? <QuestDetailsOverlay closeHref="/quests" quest={selectedQuest} /> : null}
    </div>
  );
}
