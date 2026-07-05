# AGENTS.md

## Project

QuestBoard is a small learning project built with Next.js. It is a lightweight quest and priority dashboard for practicing frontend development, TypeScript, component structure, project workflow, and AI-assisted coding.

Prioritize clear, simple, maintainable code over clever abstractions.

Keep the project small, readable, mobile-first, and portfolio-friendly. Avoid premature architecture, unnecessary dependencies, broad rewrites, and unrelated refactors.

For broader product context, architecture decisions, MVP scope, naming conventions, and domain details, read:

```txt
docs/project-context.md
```

Read `docs/project-context.md` before planning larger features, changing architecture, changing the domain model, moving files, or implementing multiple related components.

For small implementation tasks, use this `AGENTS.md` as the primary source of instructions.

## Stack

- Next.js 16 with App Router
- React 19
- TypeScript in strict mode
- Tailwind CSS v4 using `@tailwindcss/postcss`
- React Server Components by default
- Client Components only when interactivity is required

Use `npm` commands:

- `npm run dev`
- `npm run lint`
- `npm run build`

No test suite is configured yet.

## Core rules

- Make the smallest change that satisfies the task.
- Avoid unrelated refactors.
- Avoid “while I’m here” changes.
- Preserve existing behavior unless the task requires changing it.
- Do not silently expand scope.
- Do not add dependencies without explicit approval.
- Do not invent successful validation results.
- Ask only when missing information blocks progress.
- Report assumptions, risks, and validation results honestly.
- Do not reformat unrelated files.

## Project structure

Preferred structure:

```txt
src/
  app/          # routes, layouts, pages
  components/   # reusable UI components
  lib/          # reusable business/helper logic
  mocks/        # mock data only
  types/        # shared TypeScript types
```

Specific conventions:

```txt
src/components/layout/      # layout components, navigation, shell
src/components/dashboard/   # dashboard-specific components
src/components/quests/      # quest-specific components
src/lib/                    # helpers, utilities, calculations
src/mocks/                  # mock data only
src/types/                  # shared domain and DTO types
```

Rules:

- Route files belong in `src/app/`.
- Quest-related components belong in `src/components/quests/`.
- Dashboard components belong in `src/components/dashboard/`.
- Layout components belong in `src/components/layout/`.
- Shared types belong in `src/types/`.
- Mock data belongs in `src/mocks/`.
- Reusable helper logic belongs in `src/lib/`.
- Do not put mock data in `src/lib/`.
- Do not put reusable business logic inside mock files.
- Do not move files unless the task requires it.

## TypeScript

- Path alias `@/*` resolves to `src/*`.
- Prefer imports like `@/components/...`, `@/lib/...`, `@/types/...`, and `@/mocks/...`.
- Use strict, meaningful TypeScript types.
- Do not weaken types to make errors disappear.
- Avoid unnecessary `any`.
- Use primitive types such as `number`, `string`, and `boolean`.
- Do not use wrapper types such as `Number`, `String`, or `Boolean`.

## Component rules

- Use Server Components by default.
- Use Client Components only when interactivity, browser APIs, local state, or event handlers require them.
- Add `"use client"` only to the smallest component that needs it.
- Keep components focused on one clear responsibility.
- Prefer readable JSX over clever abstraction.
- Prefer explicit props.
- Prefer named exports for reusable components.
- Use semantic HTML where practical.
- Keep UI simple, responsive, and mobile-first.
- Avoid building a large design system unless explicitly asked.

## Quest domain rules

Use these domain values consistently:

```ts
export type QuestSize = "small" | "medium" | "large";
export type QuestStatus = "todo" | "active" | "complete";
export type QuestVisibility = "private" | "public";
```

Quest rules:

- Use `size`, not `difficulty`.
- Do not mix `difficulty` and `size` for the same concept.
- Use `timeSpentMinutes: number`, not `Number`.
- `tasks` must always be an array.
- Use `tasks: []` when a quest has no tasks.
- Do not use `tasks: null`.
- Do not make `tasks` optional unless explicitly instructed.

XP is derived from quest size:

```txt
small  -> 25
medium -> 50
large  -> 100
```

Do not store duplicated XP on a quest if it can be derived from `size`.

Mock data should be reasonably API-like. Prefer DTOs with string dates for mock/API data, and use mapper helpers in `src/lib/` when conversion to domain models is needed.

## MVP scope

Focus on:

- Dashboard at `/`
- Quest list at `/quests`
- Shared quest types
- Mock quest data
- Basic helper functions
- `QuestCard`
- `QuestList`
- Quest details overlay or simple details panel
- Basic dashboard stats
- Simple responsive UI

Do not add these unless explicitly requested:

- Database
- Authentication
- Real backend
- Storybook
- Three.js
- Drag and drop
- Complex animation system
- Marketplace functionality
- Social features
- Large design system

## Validation

After code changes, run relevant validation when practical:

- `npm run lint`
- `npm run build`

If validation is not run, explain why.

If validation fails, report:

- The command that failed
- The relevant error
- Whether it appears related to the change
- Recommended next step

Documentation-only changes do not require build validation unless the task specifically asks for it.

## Repository notes

- Both `package-lock.json` and `pnpm-lock.yaml` may exist.
- Use `npm` commands.
- The lockfile situation may be stale.
- `.storybook/` may exist even if Storybook is not configured.
- `.playwright-libs/` may exist even if Playwright tests are not configured.
- No test suite is configured yet.

Keep this section updated when repository state changes.

## Done means

A task is done only when:

- The requested change is implemented.
- The change is limited to the requested scope.
- Code follows this file and existing conventions.
- Relevant validation passes, or failures are clearly explained.
- Changed files are summarized.
- Assumptions or risks are listed when relevant.
- Follow-up work is identified only when genuinely useful.
