import type { Quest } from "@/types/quest";
import { QuestCard } from "@/components/quests/QuestCard";

type Props = {
  questList: Quest[];
};

export function QuestList({ questList }: Props) {
  return (
    <section
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Quest list"
    >
      {questList.map((quest) => (
        <QuestCard key={quest.id} quest={quest} />
      ))}
    </section>
  );
}
