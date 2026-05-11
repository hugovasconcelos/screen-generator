# screen-generator
Screen Generator — Demo Setup

## Copilot UI Developer agent setup

This repository configures GitHub Copilot to behave as a **UI developer** for screen generation.

The project instructions are in:

- `.github/copilot-instructions.md`

In VS Code Copilot Chat, ask for screens with your Figma context and Copilot will prioritize:

1. Figma MCP as the design input
2. `shadcn/ui` components as source of truth
3. Storybook as the component reference for available variants and composition
