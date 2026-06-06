import type { Quest, QuestStatus } from "@/types/quest";

const questXpBySize: Record<Quest["size"], number> = {
  small: 25,
  medium: 50,
  large: 100,
};

export function getQuestsByStatus(quests: Quest[], status: QuestStatus) {
  return quests.filter((quest) => quest.status === status);
}

export function getQuestPreviewByStatus(quests: Quest[], status: QuestStatus) {
  return getQuestsByStatus(quests, status)[0];
}

export function getQuestById(quests: Quest[], id?: string) {
  if (!id) {
    return undefined;
  }

  return quests.find((quest) => quest.id === id);
}

export function getQuestXp(quest: Quest) {
  return questXpBySize[quest.size];
}
