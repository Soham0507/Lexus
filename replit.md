# Lexus Energy Quiz

An interactive Lexus "Your Energy, Your Lexus" quiz experience — a WebGL-animated, iPad-oriented quiz that matches users to a Lexus vehicle. Imported from Vercel as a single self-contained static HTML file.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/lexus-energy-quiz/` — the web artifact served at `/`
- `artifacts/lexus-energy-quiz/public/lexus_energy_quiz_tuned_v018.html` — the entire quiz experience, byte-identical to the Vercel original (all assets embedded inline). Served as a static file; the React root page redirects to it.
- `.migration-backup/` — original imported Vercel project

## Architecture decisions

- The quiz is a single self-contained HTML file (~15MB, embedded base64 assets). It is intentionally NOT converted to React — it is served untouched from `public/` to preserve pixel/behavior parity, and the root route redirects to it (same pattern the original Vercel `index.html` used).
- The quiz's main script requires WebGL at the top level; without WebGL the whole script halts (buttons do nothing). Real browsers are fine; headless/automated browsers without GPU fail. This is pre-existing original behavior.

## Product

_Describe the high-level user-facing capabilities of this app once they exist._

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
