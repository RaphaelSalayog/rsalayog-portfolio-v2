## Formatting and Code Actions

After creating or modifying a JavaScript, TypeScript, JSX, or TSX file:

- Always format changed files using Prettier.
- Use the project's `.prettierrc` as the source of truth for formatting.
- Run `npx prettier --write <changed-file>` on every changed file.
- Organize imports in changed files to match VS Code's `source.organizeImports` save action.
- Remove unused imports and keep imports organized according to the project's existing tooling and conventions.
- If multiple files are changed, apply these actions to all changed files.
- Complete these formatting and import-organization steps before finishing the task.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
