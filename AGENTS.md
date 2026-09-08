# Project Guide

## Project Overview

- This is a single-page portfolio built with Next.js 16.3.4, the App Router, React 19,
  TypeScript 5, and Tailwind CSS 4.
- The project also uses React Three Fiber and Drei for its decorative WebGL star field.
- React Compiler is enabled with `reactCompiler: true` in `next.config.ts`.
- `SPEC.md` is the product and design source of truth. The current UI is an early scaffold and
  does not yet implement the whole specification. Do not describe a requested feature as complete
  merely because it appears in `SPEC.md`.
- `README.md` is still largely the create-next-app starter README. Verify commands, paths, and
  behavior against `package.json` and the source rather than relying on the README alone.
- Use npm for dependency and script commands. The repository commits `package-lock.json` and does
  not contain lockfiles for another package manager.
- GSAP, Framer Motion, and Lenis are named in `SPEC.md` but are not currently installed. Add them as
  explicit dependencies only when implementing the specified motion work; do not assume a package
  mentioned in the specification is already available.
- Do not add new direct imports from undeclared transitive packages. When application code imports a
  package directly, declare it in `package.json` rather than relying on another dependency to
  install it incidentally.

## Project Structure

- `src/app/` contains the App Router route tree.
  - `layout.tsx` is the root layout, global metadata entry point, and `next/font` setup.
  - `page.tsx` renders the `/` route.
  - `globals.css` imports Tailwind CSS and owns global theme tokens and document-level styles.
- `src/components/` contains reusable UI and visual components. Existing component files use
  PascalCase names such as `Moon.tsx` and `StarField.tsx`.
- `next.config.ts` contains typed Next.js configuration and enables React Compiler.
- `eslint.config.mjs` is the ESLint 9 flat configuration. It composes Next.js Core Web Vitals and
  TypeScript rules and ignores generated/build output.
- `postcss.config.mjs` enables Tailwind CSS 4 through `@tailwindcss/postcss`.
- `tsconfig.json` contains the strict TypeScript configuration and maps `@/*` to `src/*`.
- `.prettierrc` and `.vscode/settings.json` define formatting and import-organization behavior.
- `.agents/skills/` contains repository-local animation guidance. Use the relevant skill when work
  involves GSAP or Framer Motion.
- There is currently no `public/` directory, test directory, or automated test setup. Add such
  structure only when a task requires it.

## Next.js and React Rules

- This project uses the App Router under `src/app`; do not introduce Pages Router conventions.
- Before changing Next.js code, read the relevant installed guide under
  `node_modules/next/dist/docs/`. The installed documentation matches the actual framework version
  and takes precedence over remembered APIs or older online examples.
- Treat layouts and pages as Server Components by default. Keep static content and non-interactive
  composition on the server.
- Add `"use client"` only at a narrow interactive boundary that needs hooks, event handlers,
  browser APIs, animation runtime code, or WebGL. Place the directive before imports. Do not mark
  the whole page or root layout as a Client Component solely to support one effect.
- Props passed from a Server Component into a Client Component must be serializable.
- Keep components at module scope. Do not declare a component inside another component's render
  function; the configured React lint rules reject this pattern.
- Hooks must follow the React Hooks rules and may only be used in an appropriate Client Component.
  Clean up animation frames, observers, timelines, event listeners, and WebGL-related resources on
  unmount when a component creates them.
- React Compiler already provides automatic render optimization. Do not add `useMemo`,
  `useCallback`, or `memo` by habit; use manual memoization only when an API requires stable
  identity or a measured problem justifies it.
- Use Next.js APIs already established by the project where applicable: `Metadata` for route
  metadata and `next/font` for optimized fonts.
- Keep React Three Fiber and Drei code behind a Client Component boundary. Per `SPEC.md`, canvas
  content is decorative and must not contain essential text, navigation, or the only version of
  meaningful content.
- Route entry files use Next.js-required default exports. Shared components currently use default
  exports and PascalCase filenames. There is no strong repository-wide preference between function
  declarations and arrow functions, so match the nearby file rather than performing style-only
  rewrites.

## TypeScript and Imports

- Keep the project compatible with the existing strict `tsconfig.json`; do not weaken `strict`,
  `noEmit`, `isolatedModules`, or related checks to make an implementation pass.
- Use `.ts` and `.tsx` for new application code even though `allowJs` is enabled for compatibility.
- Give component props, refs, collections, and external data explicit useful types. Avoid adding
  `any`; `@typescript-eslint/no-explicit-any` is active through the current ESLint configuration.
  Prefer `unknown` plus narrowing when the input type is genuinely uncertain.
- Use `import type` for type-only imports, as demonstrated in `layout.tsx` and `next.config.ts`.
- Use the `@/` alias for imports from `src` when it makes the import clearer. Keep colocated assets
  and styles relative to their importing file.
- Use Next.js generated route helpers such as `LayoutProps` when they fit the route file. Do not
  edit generated `.next` types or `next-env.d.ts` by hand.
- Remove unused imports. Organize imports with the repository's VS Code
  `source.organizeImports` action, while preserving intentional stylesheet import order because CSS
  ordering can affect the production build.

## Styling and Visual Conventions

- Tailwind CSS 4 is the primary component-styling mechanism. Compose utilities in `className`, as
  the existing components do, instead of adding a second styling system without a task-specific
  reason.
- Keep truly global rules, Tailwind's `@import`, CSS custom properties, and `@theme inline` mappings
  in `src/app/globals.css`. Keep component styling in Tailwind utilities and avoid broad global
  selectors. CSS Modules are supported by Next.js but are not an established pattern in this
  repository.
- Reuse theme variables and `next/font` CSS variables instead of duplicating global values in
  components. Use Tailwind arbitrary values for one-off gradients, masks, shadows, and exact sizes
  only when standard utilities do not express the design.
- No Tailwind class-sorting plugin or custom Tailwind configuration is present. Do not claim or
  enforce a class-order convention that the repository does not configure; keep edited class lists
  readable and avoid unrelated reordering.
- Follow the visual direction and responsive/accessibility requirements in `SPEC.md`: a dark
  near-black space theme, restrained magenta/cyan accents, responsive layouts, visible focus,
  readable contrast, semantic HTML, and equivalent content with reduced motion.
- Decorative layers must not block interaction or reduce text contrast. Preserve useful HTML when
  WebGL or animation code is unavailable, loading, or disabled.
- For motion work, keep ownership separated as specified in `SPEC.md`: GSAP/ScrollTrigger for
  scroll-linked sequences, Framer Motion for component interactions, Lenis for smooth scrolling,
  and React Three Fiber for the ambient star field. Do not animate the same property on the same
  element from multiple libraries.

## Formatting and Code Actions

The project Prettier settings are four-space indentation, double quotes, semicolons, ES5 trailing
commas, and a 100-character print width. `.prettierrc` remains the source of truth if these values
change.

After creating or modifying a JavaScript, TypeScript, JSX, or TSX file:

- Run `npx prettier --write <changed-file>` on every changed file. Pass all changed supported files
  in one invocation when convenient.
- Organize imports in changed files to match VS Code's `source.organizeImports` save action.
- Remove unused imports and keep imports consistent with the existing local file.
- Apply formatting and import organization before linting or final validation.
- Avoid formatting unrelated files or mixing broad style-only churn into a focused change.

## Commands and Testing

- `npm run dev` starts the Next.js development server.
- `npm run lint` runs ESLint across the repository.
- `npx tsc --noEmit` performs a standalone strict TypeScript check.
- `npm run build` creates the production build and performs Next.js production validation.
- `npm run start` serves an existing production build.
- Prettier has no package script or direct development dependency at present; use the required
  `npx prettier --write ...` invocation instead of referring to a nonexistent `npm run format`
  command.
- No `test` script, unit-test framework, browser-test framework, or repository-owned test files are
  configured. Do not report automated tests as passing. If a task introduces tests, add the runner
  and an explicit package script as part of that scoped work.

## Validation Before Finishing

For application-code changes, use the following order and report any failures accurately:

1. Format every changed JavaScript, TypeScript, JSX, or TSX file with Prettier and organize imports.
2. Run `npm run lint`.
3. Run `npx tsc --noEmit`.
4. Run `npm run build` for changes to components, routes, styling, dependencies, or configuration.
5. Manually exercise the affected UI with `npm run dev` when behavior or presentation changed.
   Check representative mobile and desktop widths and keyboard interaction. For animation or WebGL
   work, also check reduced-motion behavior and a usable non-canvas fallback as required by
   `SPEC.md`.
6. Review `git diff` and `git status --short` to ensure only intended files changed and generated
   output was not added.

If a validation command already fails outside the changed scope, do not hide the failure or claim a
clean pass. Identify the exact failing file/rule, distinguish it from regressions introduced by the
task, and avoid increasing the existing failure count.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
