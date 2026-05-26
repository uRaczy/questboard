<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md

## Project
This is a learning Next.js project. Prioritize clear, simple, maintainable code over clever abstractions.

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components by default
- Client Components only when interactivity is needed

## Commands
- npm run dev
- npm run lint
- npm run build

## Rules
- Do not add new dependencies without asking.
- Keep components small and readable.
- Prefer named exports for reusable components.
- Put shared UI in `components/`.
- Put business/helper logic in `lib/`.
- Keep route-level code in `app/`.
- After changes, run lint and build if relevant.

## Done means
- Code compiles.
- Lint passes or known issues are explained.
- The change is summarized.
- Any risky assumption is listed.
<!-- END:nextjs-agent-rules -->
