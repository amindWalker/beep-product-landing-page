# Beep Product Landing Page

Product landing page for **Beep** - Cross-border Pix payments · eFX · LATAM ⇄ China.  
Built with Astro, Tailwind CSS v4, and Basecoat UI.

## Prerequisites

- [Bun](https://bun.sh/) (v1.4.1 or later)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/beelogik/beep-product-landing-page.git
   cd beep-product-landing-page
   ```

2. **Install dependencies:**
   ```bash
   bun install
   ```

3. **Start the development server:**
   ```bash
   bun run dev
   ```
   The development server will be available at `http://localhost:4321`.

## Available Scripts

| Command | Action |
| :--- | :--- |
| `bun run dev` | Starts the local dev server with HMR |
| `bun run build` | Builds the production site to `./dist/` |
| `bun run preview` | Previews the production build locally |
| `bunx astro check` | Runs TypeScript and Astro diagnostics |

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (static output)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Basecoat UI](https://basecoatui.com/)
- **Runtime & Package Manager:** [Bun](https://bun.sh/)
- **Language:** TypeScript

## Styling & UI (Local, No CDN)

Tailwind CSS and Basecoat UI are installed as **local npm dependencies** and configured via `astro.config.mjs` (using `@tailwindcss/vite`).  
Global styles, theme tokens, and Basecoat imports live in `src/styles/global.css`.  
The Basecoat interactive JavaScript is loaded locally from the installed package (via `node_modules`). Which means, no CDN calls, no runtime fetching, no compiling delays.

### Basecoat JS Local Runtime

In `src/layouts/Base.astro`, the Basecoat runtime is bundled via:

```astro
<script>
  import 'basecoat-css/dist/js/all.min.js';
</script>
```

This tells Astro/Vite to bundle Basecoat's runtime script directly from the local installed `node_modules`.


### Verification

After saving all files and installing dependencies, run:

```bash
bun install
bun run build
```

You should see something like this during the build process:
```bash
❯ bun run build
$ astro build
[types] Generated 45ms
[build] output: "static"
[build] mode: "static"
[build] directory: C:\Users\Administra
[build] Collecting build info...
[build] ✓ Completed in 72ms.
[build] Building static entrypoints...
[vite] ✓ built in 162ms
[vite] ✓ built in 32ms
[build] Rearranging server assets...

 generating static routes
 ├─ /index.html (+12ms)
✓ Completed in 41ms.

[build] ✓ Completed in 286ms.
[@astrojs/sitemap] `sitemap-index.xml` created at `dist`
[build] 1 page(s) built in 377ms
[build] Complete!
```

After running `bun run build` successfully with no errors, your project is working and ready to keep the development going.

## Project Structure Overview

```text
./
├── .github/
│   ├── CODEOWNERS                 # Code ownership for PR reviews
│   └── workflows/
│       └── ci.yml                 # GitHub Actions CI pipeline
├── public/                        # Public static assets served at the site root (icons, logos, etc.)
├── src/
│   ├── assets/                    # Local static files (SVG, images, audio, video, etc.)
│   ├── components/                # Astro components
│   ├── data/
│   │   └── site.ts                # Site content, pricing, FAQs, etc.
│   ├── layouts/                   # Astro HTML layout
│   ├── lib/
│   │   └── structuredData.ts      # JSON-LD schema builders
│   ├── pages/                     # Default Astro watch folder for new web pages/routes
│   └── styles/
│       └── global.css             # Tailwind + Basecoat imports and theme tokens
├── astro.config.mjs
├── bun.lock
├── LICENSE
├── package.json
├── README.md
└── tsconfig.json
```

## CI/CD

This project uses GitHub Actions for continuous integration.  
The workflow (`.github/workflows/ci.yml`) runs on **`ubuntu-26.04-arm`** and performs the following on every push and pull request to `main`:

1. Installs dependencies with Bun (using `bun install --frozen-lockfile`).
2. Runs `astro check` to catch type errors.
3. Builds the production site (`bun run build`).
4. Uploads the `dist/` folder as a downloadable artifact.

## Code Owners

Code ownership is defined in `.github/CODEOWNERS` ([CODEOWNERS](./.github/CODEOWNERS)).  
The default owner for all files is the **`@beelogik/beep-core-maintainers`** team.  
Specific teams/users can be assigned by uncommenting the relevant lines in that file.

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.
