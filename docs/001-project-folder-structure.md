# ADR-001: Project Folder Structure

- Status: Proposed
- Date: [2025-01-27]
- Deciders: [Jake TyCyn Schmidt]

## Context and Problem Statement

The application needs a clear and scalable structure for organizing UI components, backend API calls, & any future libraries or other implementations as we scale.

## Decision Drivers

- Need to maintain clear separation between front and backend
- Need to distinguish between app-wide and feature-specific components
- Want to follow Typesafety conventions & best practices
- Want to make it easy for new developers to understand where components belong & where they can easily add features to while not creating redundant feature.

## Decision

We will organize components in a hierarchical structure that clearly separates different types of components based on their scope and reusability:

```
src/
├── components/                         # Shared components
│   ├── layout/                        # Layout components
│   │   ├── Header/                    # Site header with navigation
│   │   │   ├── Header.tsx
│   │   │   ├── Header.styles.ts
│   │   │   └── Header.test.tsx
│   │   ├── Footer/                    # Site footer
│   │   └── Sidebar/                   # Optional sidebar
│   │
│   └── shared/                        # Reusable components
│       ├── EventCard/                 # Event display component
│       ├── MemberCard/                # Member profile component
│       └── ProjectShowcase/           # Project display component
│
├── features/                          # Feature-based modules
│   ├── events/                        # Events feature
│   │   ├── components/               # Event-specific components
│   │   │   ├── EventCalendar/
│   │   │   └── EventRegistration/
│   │   ├── hooks/                    # Event-related hooks
│   │   ├── services/                 # Event-related services
│   │   ├── store/                    # Event state management
│   │   ├── types/                    # Event type definitions
│   │   └── routes/                   # Event routes
│   │       ├── EventList.tsx         # Events listing
│   │       └── EventDetail.tsx       # Single event view
│   │
│   ├── projects/                     # Projects feature
│   │   ├── components/
│   │   │   ├── ProjectGallery/
│   │   │   └── ProjectSubmission/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── routes/
│   │
│   ├── members/                      # Members feature
│   │   ├── components/
│   │   │   ├── MemberDirectory/
│   │   │   └── ProfileEditor/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── store/
│   │   ├── types/
│   │   └── routes/
│   │
│   └── resources/                    # Resources feature
│       ├── components/
│       │   ├── ResourceCard/
│       │   └── TutorialViewer/
│       ├── hooks/
│       ├── services/
│       ├── store/
│       ├── types/
│       └── routes/
│
├── lib/                              # Shared utilities and helpers
│   ├── api/                         # API client configuration
│   │   ├── client.ts
│   │   └── endpoints.ts
│   │
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
├── routes/                          # Application routing
│   ├── RouteConfig.tsx              # Route definitions
│   └── PrivateRoute.tsx            # Auth wrapper
│
└── assets/                          # Static assets
    ├── images/
    │   ├── logo.svg
    │   └── icons/
    └── fonts/
```

## Key Features and Organization

### App Routes

- **Events**: Manages club meetings, workshops, and competitions
- **Projects**: Showcases member projects and collaborative work
- **Members**: Directory and profiles for club members
- **Resources**: Learning materials, tutorials, and coding resources

### Component Organization

1. **App Components** (`app/_components/`)
   - Layout components for consistent site structure
   - Shared components used across multiple routes
2. **UI Components** (`components/ui/`)
   - shadcn component library integration or other design systems - if applicable
   - Consistent design system implementation
3. **Shared Components** (`components/shared/`)
   - Reusable utility components
   - Common interface elements

### Why are there different hook folders?

#### Global Hooks (/lib/hooks)

- Hooks that are truly application-wide and domain-agnostic
- Examples:
  - `useAuth` - Authentication state management for pages like `members` & `projects`
  - `useForm`
  - `useMediaQuery`
  - `useLocalStorage`
- These hooks are reusuable across the platform and multiple features, independent of feature specific logic & less likely to change.

#### Feature Hooks (/features/\*/hooks)

- Hooks specifically tied to a feature domain logic
- Examples:
  - `/features/events/hooks/useEventRegistration`
  - `/features/members/hooks/useProfileUpdate`
  - `/features/members/hooks/useProjectSubmission`
- These are tightly coupled to a specific feature.
- We also want to keep them within the feature directory section in case of future updates.
- You can extend or build upon the functionality of a global hook with a feature hook if needed.

### Type Safety

- Dedicated types directory for TypeScript definitions
- Separate type files for each major feature
- Shared interfaces and utility types

### Styling

- Global SCSS for site-wide styles
- Tailwind utility classes for component-specific styling
- shadcn components for consistent UI elements

### Assets

- Organized public directory for static assets
- Separate directories for images, icons, and fonts
- Easy access to frequently used media
