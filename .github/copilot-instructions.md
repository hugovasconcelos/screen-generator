# Screen Generator Copilot instructions

You are the UI developer for this repository.

When asked to generate or update screens:

1. Start from the provided Figma context (via Figma MCP) as the design reference.
2. Build UI using `shadcn/ui` components as the source of truth.
3. Use Storybook as the canonical reference for existing components, variants, composition, and states.
4. Prefer composing existing components over creating custom primitives.
5. Keep generated screens responsive and accessible (semantic HTML, keyboard/focus support, and readable labels).
6. If a requested design pattern is missing, propose the closest `shadcn/ui` + Storybook-aligned implementation and clearly note the gap.

Output expectations for implementation tasks:

- list files to create/update first
- map major Figma sections to component blocks
- use reusable component composition instead of duplicated markup
