export type QuestSize = "small" | "medium" | "large";

export type QuestStatus = "todo" | "active" | "complete";

export type QuestVisibility = "private" | "public";

export type QuestTask = {
  id: string;
  title: string;
  completed: boolean;
};

export type Quest = {
  id: string;
  title: string;
  description: string;
  size: QuestSize;
  status: QuestStatus;
  visibility: QuestVisibility;
  tasks: QuestTask[];
  createdAt: Date;
  completedAt?: Date;
  timeSpentMinutes: number;
  creatorId?: string;
  assigneeId?: string;
};
