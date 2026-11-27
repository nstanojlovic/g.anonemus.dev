# anonemus.dev

Personal portfolio and CV of Nemanja Stanojlović, a full-stack / WordPress developer in Belgrade. Used in his job search (WordPress roles, remote or Belgrade).

- Live: https://anonemus.dev
- Repo: github.com/nstanojlovic/g.anonemus.dev (public; moved from the company Bitbucket on 2026-11-25)

## Working with Nemanja

- Describes himself as new to AI-assisted dev tooling. Give exact commands and say where to run them; explain *why* briefly.
- Prefers that you just do the work, then summarize what changed and what he needs to run.
- Commits go under his personal identity: `Nemanja Stanojlović <nstanojlovic@hotmail.com>` (`includeIf` for `~/Personal-Sites/`). Remote uses the `github-personal` SSH host alias.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, shadcn/ui + Base UI, lucide-react, @react-pdf/renderer. Package manager: **pnpm** (the npm lockfile was removed on purpose).

## Where things are

- **All site copy:** `lib/portfolio-data.ts`: `profile`, `experience`, skills, `laravelProjects`, `wordpressProjects`, `sideProjects`, `education`. Edit content here, not in components.
- **CV PDF:** generated on request at `/cv` (`app/cv/route.tsx` + `lib/cv-document.tsx`) from the same data, so site and CV never drift.
- Sections: `components/hero.tsx`, `experience.tsx`, `projects.tsx` (Selected work, with a Side projects block on top), `stack.tsx`, `contact.tsx`; animations in `components/motion.tsx` (`Reveal`).
- Dark-only theme (`themeColor #232326`), Geist fonts.

## Conventions

- lucide-react v1 has **no brand icons** (no `Github`); use generic ones like `CodeXml`.
- To add a side project: one entry in `sideProjects` (`name`, `url`, `repo`, `description`, `stack`).
- Type check: `node_modules/.bin/tsc --noEmit -p .`

## Deploy (Forge)

- Server `161.35.174.2` (user `forge`), push-to-deploy from `main`.
- Node app behind Nginx: daemon runs `pnpm start` on port 3000; README has the full Forge setup.
- Deploy script loads nvm and uses **Node 21.6.2**.

## Open items

- Move the deploy script to **Node 22** (21 is end-of-life; Next 16 runs fine on 22): `nvm install 22` on the server, change `nvm use 21.6.2` to `nvm use 22`, restart the daemon.
- Add upcoming-games (games.anonemus.dev) to `sideProjects` once it's deployed.
