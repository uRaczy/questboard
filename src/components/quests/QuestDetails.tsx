import type { Quest } from "@/types/quest";
import { getQuestXp } from "@/lib/quests";
import { getCreatorName } from "@/lib/users";

type Props = {
  quest: Quest;
};

function formatQuestDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function QuestDetails({ quest }: Props) {
  const creatorName = getCreatorName(quest.creatorId);
  const completedTasks = quest.tasks.filter((task) => task.completed).length;
  const taskProgress =
    quest.tasks.length > 0
      ? `${completedTasks} of ${quest.tasks.length} tasks complete`
      : "No task checklist yet";

  return (
    <section className="flex flex-col gap-6 rounded-lg border border-stone-200 bg-white p-5">
      <div>
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide">
          <span className="rounded-full bg-stone-100 px-2.5 py-1 text-stone-700">
            {quest.status}
          </span>
          <span className="rounded-full bg-amber-100 px-2.5 py-1 text-amber-800">
            {quest.size}
          </span>
          <span className="rounded-full bg-sky-100 px-2.5 py-1 text-sky-800">
            {quest.visibility}
          </span>
        </div>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight text-stone-950">
          {quest.title}
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">
          {quest.description}
        </p>
      </div>

      <dl className="grid gap-4 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-stone-500">Creator</dt>
          <dd className="mt-1 font-medium text-stone-900">{creatorName}</dd>
        </div>
        <div>
          <dt className="text-stone-500">XP</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {getQuestXp(quest)} XP
          </dd>
        </div>
        <div>
          <dt className="text-stone-500">Created</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {formatQuestDate(quest.createdAt)}
          </dd>
        </div>
        <div>
          <dt className="text-stone-500">Completed</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {quest.completedAt ? formatQuestDate(quest.completedAt) : "Not yet"}
          </dd>
        </div>
        <div>
          <dt className="text-stone-500">Time spent</dt>
          <dd className="mt-1 font-medium text-stone-900">
            {quest.timeSpentMinutes} minutes
          </dd>
        </div>
        <div>
          <dt className="text-stone-500">Task progress</dt>
          <dd className="mt-1 font-medium text-stone-900">{taskProgress}</dd>
        </div>
      </dl>

      <div>
        <h3 className="text-sm font-semibold text-stone-950">Tasks</h3>
        {quest.tasks.length > 0 ? (
          <ul className="mt-3 space-y-2">
            {quest.tasks.map((task) => (
              <li
                key={task.id}
                className="flex items-center gap-3 text-sm text-stone-700"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    task.completed ? "bg-emerald-500" : "bg-stone-300"
                  }`}
                  aria-hidden="true"
                />
                <span className={task.completed ? "line-through" : undefined}>
                  {task.title}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-stone-500">
            This quest does not have tasks yet.
          </p>
        )}
      </div>
    </section>
  );
}
