import type { Quest } from "@/types/quest";

export const mockQuests: Quest[] = [
  {
    id: "quest-001",
    title: "Map the weekly priorities",
    description:
      "Choose the quests that matter most this week and group them by size.",
    size: "small",
    status: "complete",
    visibility: "private",
    tasks: [
      { id: "task-001-1", title: "Review open work", completed: true },
      { id: "task-001-2", title: "Pick three focus quests", completed: true },
    ],
    createdAt: new Date("2026-05-20T09:00:00"),
    completedAt: new Date("2026-05-20T09:35:00"),
    timeSpentMinutes: 35,
    creatorId: "solo-player",
    assigneeId: "solo-player",
  },
  {
    id: "quest-002",
    title: "Refine the quest card layout",
    description:
      "Make each quest easy to scan with status, size, visibility, and task progress.",
    size: "medium",
    status: "active",
    visibility: "private",
    tasks: [
      { id: "task-002-1", title: "Show status and size", completed: true },
      { id: "task-002-2", title: "Add task progress", completed: true },
      { id: "task-002-3", title: "Polish spacing", completed: false },
    ],
    createdAt: new Date("2026-05-22T14:15:00"),
    timeSpentMinutes: 80,
    creatorId: "village-scribe",
    assigneeId: "solo-player",
  },
  {
    id: "quest-003",
    title: "Draft the Village Notice Board idea",
    description:
      "Outline how public quests could later support a shared village board.",
    size: "large",
    status: "todo",
    visibility: "public",
    tasks: [
      {
        id: "task-003-1",
        title: "List multiplayer assumptions",
        completed: false,
      },
      {
        id: "task-003-2",
        title: "Sketch public quest rules",
        completed: false,
      },
      {
        id: "task-003-3",
        title: "Identify solo-safe fields",
        completed: false,
      },
    ],
    createdAt: new Date("2026-05-23T10:30:00"),
    timeSpentMinutes: 0,
    creatorId: "village-scribe",
  },
  {
    id: "quest-004",
    title: "Clear inbox notes",
    description:
      "Turn loose notes into a short list of concrete quests or discard them.",
    size: "small",
    status: "todo",
    visibility: "private",
    tasks: [],
    createdAt: new Date("2026-05-24T17:45:00"),
    timeSpentMinutes: 0,
    creatorId: "solo-player",
    assigneeId: "solo-player",
  },
  {
    id: "quest-005",
    title: "Build the progress summary",
    description:
      "Summarize active work and recently completed quests for the dashboard.",
    size: "medium",
    status: "active",
    visibility: "private",
    tasks: [
      { id: "task-005-1", title: "Count quests by status", completed: true },
      {
        id: "task-005-2",
        title: "Calculate completed minutes",
        completed: false,
      },
    ],
    createdAt: new Date("2026-05-25T08:20:00"),
    timeSpentMinutes: 45,
    creatorId: "guild-mender",
    assigneeId: "solo-player",
  },
  {
    id: "quest-006",
    title: "Archive finished planning quests",
    description:
      "Review complete quests and mark any notes worth carrying into the next cycle.",
    size: "small",
    status: "complete",
    visibility: "private",
    tasks: [
      { id: "task-006-1", title: "Review finished quests", completed: true },
      { id: "task-006-2", title: "Keep useful notes", completed: true },
    ],
    createdAt: new Date("2026-05-18T11:10:00"),
    completedAt: new Date("2026-05-21T16:25:00"),
    timeSpentMinutes: 50,
    creatorId: "solo-player",
    assigneeId: "solo-player",
  },
  {
    id: "quest-007",
    title: "Plan first milestone",
    description:
      "Define what the MVP should prove before adding persistence or collaboration.",
    size: "large",
    status: "active",
    visibility: "private",
    tasks: [
      { id: "task-007-1", title: "Define MVP scope", completed: true },
      { id: "task-007-2", title: "Write acceptance notes", completed: false },
      { id: "task-007-3", title: "Decide what stays out", completed: true },
      { id: "task-007-4", title: "Review with fresh eyes", completed: false },
    ],
    createdAt: new Date("2026-05-26T13:00:00"),
    timeSpentMinutes: 120,
    creatorId: "guild-mender",
    assigneeId: "solo-player",
  },
  {
    id: "quest-008",
    title: "Write a public quest example",
    description:
      "Create one notice-board-friendly quest that can later be assigned to another player.",
    size: "medium",
    status: "todo",
    visibility: "public",
    tasks: [
      {
        id: "task-008-1",
        title: "Give it a village-friendly title",
        completed: false,
      },
      {
        id: "task-008-2",
        title: "Add simple completion steps",
        completed: false,
      },
    ],
    createdAt: new Date("2026-05-27T15:40:00"),
    timeSpentMinutes: 0,
    creatorId: "village-scribe",
  },
];
