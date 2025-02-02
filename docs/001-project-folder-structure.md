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
├── app/                                # App directory
│   ├── page.tsx                       # Home page
│   ├── layout.tsx                     # Root layout
│   ├── _components/                   # Shared components across app routes
│   │   ├── layout/
│   │   │   ├── Header/               # Site header with navigation
│   │   │   ├── Footer/               # Site footer
│   │   │   └── Sidebar/              # Optional sidebar for member areas
│   │   └── shared/
│   │       ├── EventCard/            # Reusable event display component
│   │       ├── MemberCard/           # Member profile display component
│   │       └── ProjectShowcase/      # Project display component
│   │
│   ├── events/                       # Events section
│   │   ├── page.tsx                  # Events listing page
│   │   ├── [eventId]/               # Dynamic event pages
│   │   │   └── page.tsx
│   │   └── _components/             # Event-specific components
│   │       ├── EventCalendar/
│   │       └── EventRegistration/
│   │
│   ├── projects/                     # Projects section
│   │   ├── page.tsx                  # Projects listing page
│   │   ├── [projectId]/             # Individual project pages
│   │   │   └── page.tsx
│   │   └── _components/             # Project-specific components
│   │       ├── ProjectGallery/
│   │       └── ProjectSubmission/
│   │
│   ├── members/                      # Members section
│   │   ├── page.tsx                  # Members directory
│   │   ├── [memberId]/              # Member profiles
│   │   │   └── page.tsx
│   │   └── _components/             # Member-specific components
│   │       ├── MemberDirectory/
│   │       └── ProfileEditor/
│   │
│   └── resources/                    # Learning resources section
│       ├── page.tsx                  # Resources landing page
│       ├── [categoryId]/            # Resource categories
│       │   └── page.tsx
│       └── _components/             # Resource-specific components
│           ├── ResourceCard/
│           └── TutorialViewer/
│
├── lib/                              # Shared utilities and helpers
│   ├── types/                        # TypeScript type definitions
│   │   ├── event.types.ts
│   │   ├── member.types.ts
│   │   └── project.types.ts
│   │
│   ├── utils/                        # Utility functions
│   │   ├── date-helpers.ts
│   │   └── validation.ts
│   │
│   └── constants/                    # App-wide constants
│       ├── routes.ts
│       └── config.ts
│
├── styles/                           # Global styles
│   ├── globals.scss
│   └── variables.scss
│
└── public/                           # Static assets
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
