# QuestBoard project context

## 1. Product idea

QuestBoard is a small web app built with Next.js as a practical training ground for frontend development, AI-assisted coding, and iterative project workflow.

It is a lightweight quest and priority dashboard. Users work with “quests”, which represent tasks or projects. The app uses a light RPG-style quest board metaphor, but the UI should remain clean, modern, readable, mobile-first, and portfolio-friendly.

The project should be simple, but not toy-like. It should include real application elements: routing, types, components, mock/API-like data, state, item lists, item details, forms, basic statistics, and a structure that could later be connected to a backend or database.

QuestBoard is also a training project before a larger future idea called “Planszujemy”. It should be a safe place to practice architecture, refactoring, and AI agent workflow before applying similar patterns to a bigger product.

## 2. Product metaphor

QuestBoard uses a light RPG / tavern notice board metaphor.

Users create and complete quests. Quests have size, status, child tasks, time spent, visibility, and XP derived from size.

The dashboard should feel more like an adventurer summary than a spreadsheet. It may use terms like:

- Quest Board
- Active Quests
- Completed Quests
- XP
- Level
- Adventurer Summary
- Quest Log
- New Quest

Do not overdo the fantasy theme. This is a practical portfolio project, not a parody UI where every button says “thy shall clicketh”.

## 3. Architecture philosophy

The project should be simple, but not chaotic.

Rules:

- Do not put everything into `src/lib/`.
- Keep mock data separate from helper logic.
- Keep shared types separate from components and mocks.
- Split components by function, but avoid excessive atomic design.
- Avoid architecture for scale that does not exist yet.
- Prefer explicit, readable code over clever abstraction.
- Do not create abstractions “just in case”.
- Do not let agents make large architecture or product decisions without a clear task.

The target is a junior / early-mid frontend portfolio project that shows good understanding of components, data, file responsibilities, and iterative development.

## 4. Preferred stack

- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- React Server Components by default
- Client Components only where interactivity is required
- Minimal dependencies
- Mobile-first layout
- Semantic HTML
- Simple readable folder structure
- No Storybook in MVP
- No database or authentication in MVP
- Mock data prepared as if it came from an API

## 5. Preferred folder structure

```txt
src/
  app/
    page.tsx
    quests/
      page.tsx

  components/
    layout/
      Navbar.tsx

    dashboard/
      CharacterSummary.tsx
      StatCard.tsx

    quests/
      QuestCard.tsx
      QuestList.tsx
      QuestDetailsOverlay.tsx
      QuestFormOverlay.tsx
      QuestStatusBadge.tsx
      QuestSizeBadge.tsx
      QuestProgress.tsx

  lib/
    quest-utils.ts
    stats-utils.ts

  mocks/
    mock-quests.ts
    mock-users.ts

  types/
    quest.ts
    user.ts
```

Important:

- Mock data belongs in `src/mocks/`.
- Helper logic belongs in `src/lib/`.
- Shared types belong in `src/types/`.
- Quest components belong in `src/components/quests/`.
- Dashboard components belong in `src/components/dashboard/`.
- Layout components belong in `src/components/layout/`.

Do not put mock data in `src/lib/`.

Do not put helper logic inside mock files.

## 6. Routing

MVP routes:

```txt
/         # dashboard / character stats
/quests   # quest list
```

Avoid adding separate routes too early:

```txt
/quests/[id]
/quests/new
```

Preferred MVP approach:

- show quest details as an overlay, modal, or panel on `/quests`;
- show quest creation as an overlay, modal, or form panel on `/quests`;
- query string control may be used later, for example `/quests?quest=<id>` or `/quests?new=true`.

If query-string overlay handling is too heavy early on, a simple local-state details panel is acceptable.

## 7. Main views

### Dashboard `/`

The dashboard should show basic user/adventurer progress:

- level
- XP
- active quests
- completed quests
- total time spent
- simple app hero/header if useful

### Quests `/quests`

The quests view should show:

- quest list
- quest cards
- quest status
- quest size
- task progress
- ability to view quest details
- ability to add a quest in a later step

## 8. Main components

### `QuestCard`

Shows at least:

- title
- size
- status
- task progress
- optionally XP
- optionally time spent

Clicking a quest card may open quest details.

### `QuestList`

Maps an array of quests to `QuestCard`.

### `QuestDetailsOverlay`

Shows:

- title
- description
- status
- size
- XP
- tasks
- time spent
- created date
- completed date, if present

Early MVP may use a large panel instead of a full modal.

### `QuestFormOverlay`

Simple quest creation form. Early version may be UI-only or local-state only.

Potential fields:

- title
- description
- size
- status
- tasks

### `QuestStatusBadge`

Renders:

- `todo`
- `active`
- `complete`

### `QuestSizeBadge`

Renders:

- `small`
- `medium`
- `large`

### `QuestProgress`

Shows task progress, for example `2/5`.

## 9. Domain types

Canonical quest values:

```ts
export type QuestSize = "small" | "medium" | "large";

export type QuestStatus = "todo" | "active" | "complete";

export type QuestVisibility = "private" | "public";
```

Preferred domain model:

```ts
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
```

Rules:

- Use `size`, not `difficulty`.
- Do not mix `difficulty` and `size`.
- Use `timeSpentMinutes: number`, not `Number`.
- `tasks` should always be an array.
- Use `tasks: []` when there are no tasks.
- Do not use `tasks: null`.
- Do not make `tasks` optional unless explicitly instructed.

## 10. DTOs and dates

In the application domain model, `createdAt` and `completedAt` may be `Date`.

Mock/API-like data should use string dates because JSON does not transmit actual `Date` objects.

Preferred DTO shape:

```ts
export type QuestTaskDto = {
  id: string;
  title: string;
  completed: boolean;
};

export type QuestDto = {
  id: string;
  title: string;
  description: string;
  size: QuestSize;
  status: QuestStatus;
  visibility: QuestVisibility;
  tasks: QuestTaskDto[];
  createdAt: string;
  completedAt?: string;
  timeSpentMinutes: number;
  creatorId?: string;
  assigneeId?: string;
};
```

Use mapper helpers in `src/lib/` when conversion from DTO to domain model is needed.

Do not put mapping logic inside mock files.

## 11. XP

XP is derived from quest size:

```txt
small  -> 25 XP
medium -> 50 XP
large  -> 100 XP
```

Do not store duplicated XP on a quest if it can be derived from `size`.

Preferred helper:

```ts
export function getQuestXp(size: QuestSize): number {
  const xpBySize: Record<QuestSize, number> = {
    small: 25,
    medium: 50,
    large: 100,
  };

  return xpBySize[size];
}
```

Dashboard XP should preferably count completed quests only, because that is more consistent with the RPG metaphor.

## 12. Mock data

Mock quest data should be reasonably API-like.

Good initial mock coverage:

- one `todo` quest
- one `active` quest
- one `complete` quest
- one quest with no tasks
- one larger quest with several tasks

Mock users can be added if needed because quests may include `creatorId` and `assigneeId`.

Preferred user type:

```ts
export type User = {
  id: string;
  name: string;
  avatarUrl?: string;
};
```

Mock users belong in:

```txt
src/mocks/mock-users.ts
```

User helper logic belongs in:

```txt
src/lib/
```

## 13. Useful helpers

Add helpers only when needed by components or pages.

Potential helpers:

```ts
getQuestXp(size);
getCompletedTasksCount(tasks);
getQuestProgress(tasks);
getTotalXp(quests);
getActiveQuestsCount(quests);
getCompletedQuestsCount(quests);
getTotalTimeSpentMinutes(quests);
getUserLevel(totalXp);
formatMinutes(minutes);
formatDate(date);
```

Do not add all helpers upfront unless the task requires them.

## 14. MVP scope

MVP should include:

1. Cleaned Next.js starter.
2. App layout.
3. Navbar.
4. Dashboard at `/`.
5. Quest list at `/quests`.
6. Types in `src/types`.
7. Mock data in `src/mocks`.
8. Helpers in `src/lib`.
9. `QuestCard`.
10. `QuestList`.
11. `QuestDetailsOverlay` or a simple details panel.
12. Basic dashboard stats.
13. Responsive mobile-first UI.

Do not include in MVP unless explicitly requested:

- database
- authentication
- user accounts
- real backend
- drag and drop
- notifications
- complex gamification system
- marketplace
- social features
- chat
- Storybook
- Three.js
- heavy animations
- large design system

## 15. Suggested work order

### Stage 1 — foundation

- Clean Next.js starter.
- Set up layout.
- Add simple `Navbar`.
- Prepare folder structure.
- Add quest types.

### Stage 2 — data

- Add mock quests.
- Add mock users if needed.
- Add basic XP and stats helpers.

### Stage 3 — quest list

- Add `QuestCard`.
- Add `QuestList`.
- Render quests at `/quests`.

### Stage 4 — details

- Add `QuestDetailsOverlay` or simple details panel.
- Show description and tasks after selecting a quest.
- Use local state first if query string handling is too heavy.

### Stage 5 — dashboard

- Add `CharacterSummary`.
- Add `StatCard`.
- Calculate level, XP, active quests, completed quests, and time.

### Stage 6 — form

- Add `QuestFormOverlay`.
- Early version may be UI-only or local-state only.

### Stage 7 — review and refactor

- Check file responsibilities.
- Ensure mock data is not in `src/lib/`.
- Ensure components do not have too many responsibilities.
- Improve naming.
- Remove dead code.

## 16. AI agent workflow

Preferred workflow:

```txt
Tech Lead -> Coder -> Reviewer -> Coder fixes review findings
```

Role expectations:

- Tech Lead defines scope, delegates tasks, and verifies results.
- Coder implements small delegated tasks.
- Reviewer reviews implementation work and reports findings.
- Coder applies specific review fixes only when delegated.

Agents should not silently expand scope.

Small tasks are preferred over broad requests.

Instead of:

```txt
Build the whole QuestBoard MVP.
```

Prefer:

```txt
Add quest types in src/types/quest.ts according to the project specification. Do not change other files.
```

Then:

```txt
Add mock quests in src/mocks/mock-quests.ts using QuestDto. Do not add logic to mock files.
```

Then:

```txt
Create QuestCard that accepts a quest prop and renders title, size, status, and task progress.
```

Small quests are better than giant epic tasks.
