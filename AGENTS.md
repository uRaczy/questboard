# AGENTS.md

## Project
Learning Next.js project: lightweight quest and priority dashboard. Prioritize clear, simple, maintainable code over clever abstractions.

## Stack
- Next.js 16 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS v4 (`@tailwindcss/postcss` plugin)
- React Server Components by default; Client Components only when interactivity is needed

## Commands
- `npm run dev` — development server
- `npm run lint` — ESLint (uses FlatConfig API via `eslint.config.mjs`)
- `npm run build` — production build
- No test suite configured yet

## TypeScript
- Path alias `@/*` resolves to `src/*`. Always use `@/components/...`, `@/lib/...`, etc.
- Config: `tsconfig.json` (strict, ES2017 target, bundler module resolution)

## Formatting
- Prettier configured in `.prettierrc`: double quotes, semicolons, 2-space indent, trailing comma on all, print width 100

## Project Structure
```
src/
├── app/        # route handlers and pages
├── components/ # shared UI components
├── lib/        # business/helper logic
├── types/      # TypeScript type definitions
└── mocks/      # mock data
```

## Rules
- Do not add new dependencies without asking.
- Keep components small and readable.
- Prefer named exports for reusable components.
- Put shared UI in `components/`, business logic in `lib/`, routes in `app/`.
- After changes, run lint and build if relevant.

## Gotchas
- Both `package-lock.json` and `pnpm-lock.yaml` exist; use `npm` commands (the lockfile situation is likely stale).
- `.storybook/` directory exists but is empty. No Storybook config present.
- `.playwright-libs/` exists but no Playwright tests are configured.

## Done means
- Code compiles (`npm run build`).
- Lint passes or known issues are explained.
- The change is summarized.
- Any risky assumption is listed.
<!-- END:nextjs-agent-rules -->
