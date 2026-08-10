# Vaishnavi Shanmugam — Portfolio

A fast, single-page portfolio built with **React + TypeScript + Vite + Tailwind CSS v4** and
**Framer Motion**, in a white / ash / blue theme with a knowledge-graph-inspired signature motif.

## ✨ Why this setup

- **One content file to edit.** Everything you see on the site — experience, projects,
  skills, coursework, certificates, awards, clubs — comes from a single typed file:
  `src/data/portfolio.ts`. To add something new in the future, just add a new object to
  the relevant array. You don't need to touch any component code.
- **Fast & cheap to host.** It's a static site (no server/database needed), so it deploys
  in seconds to Vercel or Render's static site hosting, both free for a personal portfolio.
- **Typed, so mistakes are caught early.** If you add a new project/experience entry and
  forget a required field, TypeScript will tell you before you ever deploy.

## 🚀 Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

To produce a production build (this is what gets deployed):

```bash
npm run build
npm run preview   # to sanity-check the production build locally
```

## 🖼️ Adding your photo

1. Drop your photo file into the `public/` folder, e.g. `public/photo.jpg`.
2. Open `src/data/portfolio.ts` and set:
   ```ts
   photoUrl: "/photo.jpg",
   ```
3. Save — the hero photo frame will automatically show your photo instead of the monogram.
   A square-ish photo (close to 1:1) works best since it's cropped into a square frame.

## ➕ Adding new content in the future

Open `src/data/portfolio.ts`. Every section of the site is backed by one exported array
or object:

| Section on the site      | Edit this in `portfolio.ts` |
|---------------------------|------------------------------|
| Hero / bio / socials      | `personal`                  |
| Experience timeline       | `experience` (array)        |
| Projects grid             | `projects` (array)          |
| Skills                    | `skills` (array), `strengths` (array) |
| Education                 | `education` (array)         |
| Coursework                | `coursework` (array)        |
| Certificates & courses    | `certificates` (array)      |
| Awards & honors           | `awards` (array)            |
| Clubs & societies         | `activities` (array)        |
| Nav bar links / sections  | `navLinks` (array)          |

Example — adding a new project:

```ts
export const projects: ProjectItem[] = [
  {
    name: "Your New Project",
    tag: "Research Project",
    period: "2026",
    links: { github: "https://github.com/you/repo", demo: "https://your-demo.com" },
    points: [
      "One bullet per sentence describing what you built and the impact.",
      "Add as many bullets as you like.",
    ],
    stack: ["Python", "FastAPI", "Docker"],
  },
  // ...existing projects
];
```

The same pattern applies to `experience`, `education`, `coursework`, `certificates`,
`awards`, and `activities` — copy an existing object, edit the values, done. TypeScript
will underline anything you're missing.

If you ever want a whole new section (e.g. "Publications" or "Talks"), the easiest path is:
1. Add a new array + interface in `portfolio.ts` (copy the pattern of an existing one).
2. Copy an existing section component (e.g. `src/components/Awards.tsx`) as a starting point.
3. Import and render it in `src/App.tsx`, and add an entry to `navLinks`.

## 🎨 Design tokens

Colors, fonts, and other tokens live in `src/index.css` under the `@theme` block, so you
can retint the whole site (or swap fonts) from one place without hunting through components.

## ☁️ Deploying

### Vercel (recommended, easiest)
1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `npm run build`,
   Output Directory: `dist`) and click **Deploy**.
4. Every future push to your main branch redeploys automatically.

### Render (Static Site)
1. Push this project to a GitHub repo.
2. In the Render dashboard, choose **New → Static Site** and connect the repo.
3. Set:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
4. Click **Create Static Site**.

Both platforms are on this project's free tier for a personal portfolio, and both give you
a live HTTPS URL plus the option to attach a custom domain later.

## 🧱 Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vitejs.dev) — build tool & dev server
- [Tailwind CSS v4](https://tailwindcss.com) — styling, via the official Vite plugin
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered animation
- [lucide-react](https://lucide.dev) — icon set
