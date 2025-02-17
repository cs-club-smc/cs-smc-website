# ADR-001: Project Folder Structure

- Status: Proposed
- Date: [2025-01-27]
- Deciders: [Jake TyCyn Schmidt]

## Context and Problem Statement

The application needs a clear and scalable structure for organizing UI components, backend API calls, & any future libraries or other implementations as we scale, with special consideration for TanStack Router's file-based routing conventions.

## Decision Drivers

- Need to maintain clear separation between front and backend
- Need to distinguish between app-wide and feature-specific components
- Need to maintain clear separation between routes and non-route components
- Want to make it easy for new developers to understand where components belong

## Decision

We will organize components in a hierarchical structure that clearly separates routes from other components while maintaining proximity for related code:

### Route Structure & Conventions:

Important file/folder prefix meanings:

- `__root.tsx`: The root layout component (required)
- `_`: Pathless/layout routes that wrap other routes (e.g., `_layout.tsx`)
- `-`: Files/folders to exclude from routing (default convention)
- `[param]`: Dynamic route parameters(e.g., `[userId].tsx`)
- `index.tsx`: Default route for a directory

**When in doubt** if you want something routed to place `-` infront of the file so it **DOES NOT** get included into routing

For more specific information refer to the TanStack docs specifically:

1. https://tanstack.com/router/v1/docs/framework/react/guide/route-trees
2. https://tanstack.com/router/v1/docs/framework/react/guide/routing-concepts
3. https://tanstack.com/router/v1/docs/framework/react/guide/file-based-routing

```src/
├── routes/                           # All route components
│   ├── __root.tsx                   # Root layout (required)
│   ├── index.tsx                    # Homepage route
│   │
│   ├── members/                     # Members feature routes
│   │   ├── index.tsx               # /members route
│   │   ├── [memberId].tsx          # /members/[id] route
│   │   ├── _layout.tsx             # Shared layout for member routes
│   │   │
│   │   ├── -components/            # Non-route member components
│   │   │   ├── MemberCard.tsx
│   │   │   └── ProfileEditor.tsx
│   │   │
│   │   └── -utils/                 # Non-route member utilities
│   │       └── validation.ts
│   │
│   ├── projects/                    # Projects feature routes
│   │   ├── index.tsx               # /projects route
│   │   ├── [projectId].tsx         # /projects/[id] route
│   │   ├── create.tsx              # /projects/create route
│   │   │
│   │   └── -components/            # Non-route project components
│   │       ├── ProjectForm.tsx
│   │       └── ProjectCard.tsx
│   │
│   └── resources/                   # Resources feature routes
│       ├── index.tsx
│       ├── [resourceId].tsx
│       │
│       └── -components/            # Non-route resource components
│           └── ResourceCard.tsx
├── components/                      # Shared components
│   ├── ui/                         # Base UI components
│   │   ├── Button/
│   │   └── Card/
│   │
│   └── layout/                     # Layout components
│       ├── Header/
│       └── Footer/
└── lib/                            # Shared utilities
│   ├── hooks/                       # Shared custom hooks
│   │   ├── useAuth.ts
│   │   └── useForm.ts
│   │
│   ├── utils/                       # Utility functions
│   │   ├── date-helpers.ts
│   │   └── validation.ts
│   │
│   └── constants/                   # App-wide constants
│       ├── routes.ts
│       └── config.ts
│
├── styles/                          # Global styles
│   ├── global.ts                    # Global styled-components
│   ├── theme.ts                     # Theme configuration
│   └── mixins.ts                    # Styled-components mixins
│
├── types/                           # Global TypeScript types
│   ├── common.ts
│   └── api.ts
│
└── assets/                          # Static assets
    ├── images/
    │   ├── logo.svg
    │   └── icons/
    └── fonts/
```

### Key Conventions:

1. **Route Organization**

   - All routes live in the `routes/` directory
   - Each feature has its own directory (e.g., `routes/members/`)
   - Use `-` prefix for non-route files/folders within route directories
   - Use `_` prefix for layout/wrapper routes
   - Use `[param]` for dynamic route parameters

2. **Component Organization**

   - Feature-specific components live in `-components/` within their feature directory
   - Shared components live in the top-level `components/` directory
   - UI components live in `components/ui/`

3. **File Naming**
   - Routes: `index.tsx`, `[param].tsx`, `_layout.tsx`
   - Components: `PascalCase.tsx`
   - Utilities: `camelCase.ts`

## Benefits

- Clear separation between routes and components
- Feature-related code stays together
- Easy to understand routing conventions
- Scalable structure for large applications
- Follows TanStack Router best practices

## Implementation Notes

1. Always use the `-` prefix for non-route files/folders within the routes directory
2. Keep route components focused on routing/layout logic
3. Move complex component logic to separate files in `-components/`
4. Use `_layout.tsx` for shared layouts within a feature

## Examples

### Good:

```
routes/
  members/
    index.tsx                # /members route
    [memberId].tsx          # /members/[id] route
    -components/
      MemberProfile.tsx     # Not a route
    -utils/
      memberHelpers.ts      # Not a route
```

### Bad:

```
routes/
  members/
    index.tsx
    [memberId].tsx
    components/             # ❌ Missing `-` prefix
      MemberProfile.tsx     # Will try to become a route!
```
