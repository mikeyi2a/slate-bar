/** Options passed to `SlateBar.load` / `useSlateBar`. */
export interface SlateBarLoadOptions {
  /**
   * Notes included in the copied prompt: stack, token paths, components to reuse,
   * or pointers like "match the hero on the marketing layout".
   */
  cohesionContext?: string

  /**
   * Exact target location in the real app (route, component order, sibling).
   * Included in every Copy payload. Also written to localStorage so the Settings
   * field stays in sync; edits there override until the next `load()` with placement.
   */
  placement?: string

  /**
   * UI component libraries available in the project.
   * The copied prompt will instruct the agent to prefer these over raw HTML.
   * Examples: `['shadcn/ui', 'tailark', 'heroui', 'radix', 'chakra']`
   */
  uiLibraries?: string[]
}
