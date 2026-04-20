# Screen Generator — Context File for AI Agent

This file defines how every screen must be generated in this project.
Read this before generating anything.

---

## Stack

- Next.js App Router (Next.js 16 / React 19)
- TypeScript
- Tailwind CSS v4
- shadcn/ui — all components available in `@/components/ui/`
- Lucide React for icons
- Geist font (already configured)

---

## Import rules

Always import from the local aliases:

```ts
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
```

---

## Output rules

- One screen = one file
- Path: `app/generated/[screen-name]/page.tsx`
- Default export React component
- TypeScript — no `any`
- No `useState` for real logic — visual prototype only
- No API calls
- No authentication logic
- No external images — use `<div className="bg-muted rounded-md" />` as placeholder

---

## Layout rules

- Mobile first — responsive by default
- Max content width: `max-w-5xl mx-auto`
- Page padding: `p-6` or `p-8`
- Use Tailwind spacing only — no inline styles, no custom CSS
- Use `cn()` from `@/lib/utils` for conditional classes

---

## Content rules

- Always use realistic placeholder content
- Real-looking names: "Sarah Mitchell", "James O'Brien"
- Real-looking dates: "Apr 18, 2026"
- Real-looking numbers and amounts: "€1,240.00", "94%"
- Real-looking IDs: "INV-2026-00421"
- Never use "Lorem ipsum"
- Never use "placeholder", "test", "example" as content

---

## Component usage guidelines

**Button**
```ts
// Use the right variant for the context
<Button variant="default">Primary action</Button>
<Button variant="outline">Secondary action</Button>
<Button variant="ghost">Tertiary / nav</Button>
<Button variant="destructive">Delete / danger</Button>
<Button size="sm">Compact</Button>
```

**Badge**
```ts
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Pending</Badge>
<Badge variant="destructive">Expired</Badge>
<Badge variant="outline">Draft</Badge>
```

**Card**
```ts
// Always use the full card anatomy
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Supporting text</CardDescription>
  </CardHeader>
  <CardContent>content</CardContent>
  <CardFooter>actions</CardFooter>
</Card>
```

**Skeleton** — use for loading states
```ts
<Skeleton className="h-4 w-[200px]" />
<Skeleton className="h-32 w-full" />
```

---

## Screen patterns

**Dashboard**
- Top: breadcrumb or page title + primary action button
- Middle: stat cards row (3–4 cards with number + label)
- Below: table or list with data
- Optional: sidebar with navigation

**Form screen**
- Card container
- Logical field groups with Label + Input
- Validation states where relevant
- Clear primary CTA + secondary cancel

**Detail screen**
- Header with title, badge status, action buttons
- Two-column layout on desktop: main content + sidebar summary
- Tabs for different sections of content

**List / Table screen**
- Search input + filter controls at top
- Table with sortable columns
- Pagination at bottom
- Row actions via DropdownMenu

---

## Accessibility

- Every Input must have a corresponding Label with `htmlFor`
- Interactive elements must have `aria-label` if no visible text
- Icon-only buttons must have `aria-label`
- Use semantic HTML: `<main>`, `<nav>`, `<section>`, `<header>`
- Minimum touch target: 44px height for interactive elements

---

## What NOT to generate

- `useState` / `useEffect` for real data fetching
- `useRouter` navigation
- Real form submission handlers
- Database or API connections
- Authentication flows
- `"use client"` unless strictly needed for basic UI interaction

---

## Example — minimal screen

```tsx
import { Button } from "@/components/ui/button"

export default function ExampleScreen() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-5xl mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Page Title</h1>
            <p className="text-muted-foreground">Supporting description</p>
          </div>
          <Button>Primary Action</Button>
        </div>
        {/* content */}
      </main>
    </div>
  )
}
```
