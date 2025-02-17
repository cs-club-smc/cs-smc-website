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

### TanStack Routes:

Reminder!!! Any file under the `routes` folder will automatically be made into a route unless you place `_` before the name
For more specific information refer to the TanStack docs specifically:

1. https://tanstack.com/router/v1/docs/framework/react/guide/route-trees
2. https://tanstack.com/router/v1/docs/framework/react/guide/routing-concepts

When in doubt place \_before file & folder names and remove them as you want to create the routes.

```
src/
├── routes/                           # TanStack Router routes
│   ├── __root.tsx                   # Root layout with navigation (uses layout components)
│   ├── index.tsx                    # Homepage route
│   ├── members/                      # Events routes
│   │   ├── index.tsx               # Events listing
│   │   ├── [eventId].tsx          # Single event view
│   │   └── _components/
│   │       └── _MemberComponent.tsx # non-routed component for member
│   │            (The `_` on both the folder & file prevent them from being recognized as routes)
│   ├── projects/
│   └── resources/
│
├── components/                       # All components
│   ├── layout/                      # Layout components used in __root.tsx
│   │   ├── MainNav/
│   │   │   ├── MainNav.tsx
│   │   │   └── MainNav.test.tsx
│   │   ├── Footer/
│   │   └── Sidebar/
│   │
│   └── shared/                      # Reusable components
│       ├── EventCard/
│       ├── MemberCard/
│       └── ProjectShowcase/
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

# Key Features and Organization

## App Routes (`/routes`)

- **Root** (`__root.tsx`): Application shell with shared navigation and layouts
- **Events** (`/routes/events/`): Manages club meetings, workshops, and competitions
  - `index.tsx`: Events listing page
  - `[eventId].tsx`: Individual event details
  - `create.tsx`: Event creation form
- **Projects** (`/routes/projects/`): Showcases member projects and collaborative work
  - `index.tsx`: Projects gallery
  - `[projectId].tsx`: Project details page
  - `submit.tsx`: Project submission form
- **Members** (`/routes/members/`): Directory and profiles for club members
  - `index.tsx`: Members directory
  - `[memberId].tsx`: Member profile page
- **Resources** (`/routes/resources/`): Learning materials, tutorials, and coding resources
  - `index.tsx`: Resources listing
  - `[resourceId].tsx`: Individual resource view

## Component Organization

1. **Layout Components** (`/components/layout/`)

   - Core layout components used in `__root.tsx`
   - Navigation, footer, and structural elements
   - Example: `MainNav/`, `Footer/`, `Sidebar/`

2. **UI Components** (`/components/ui/`)

   - shadcn component library integration
   - Design system fundamentals
   - Example: `Button/`, `Card/`, `Dialog/`

3. **Shared Components** (`/components/shared/`)

   - Reusable components used across features
   - Common interface patterns
   - Example: `DataTable/`, `SearchInput/`, `Pagination/`

4. **Feature Components** (`/features/*/components/`)
   - Feature-specific components
   - Contained within feature directories
   - Example: `EventCard/`, `ProjectGallery/`, `MemberProfile/`

## Hook Organization

### Global Hooks (`/lib/hooks/`)

Domain-agnostic, application-wide hooks:

```typescript
// Authentication
useAuth(); // User authentication state
usePermissions(); // Permission checking

// UI Utilities
useMediaQuery(); // Responsive design hooks
useLocalStorage(); // Client-side storage
useForm(); // Form handling

// Data Fetching
usePagination(); // Reusable pagination logic
useInfiniteScroll(); // Infinite scroll behavior
```

### Feature Hooks (`/features/*/hooks/`)

Feature-specific business logic:

```typescript
// Events Feature
useEventRegistration(); // Handle event signup
useEventFilters(); // Event search/filtering

// Members Feature
useProfileUpdate(); // Profile editing
useMemberSearch(); // Member directory search

// Projects Feature
useProjectSubmission(); // Project upload/submission
useProjectGallery(); // Project browsing/filtering
```

## Type Safety

### Global Types (`/types/`)

```typescript
// Common interfaces
interface User {
  id: string;
  name: string;
  role: UserRole;
}

// Utility types
type AsyncReturnType<T> = T extends (...args: any[]) => Promise<infer R>
  ? R
  : any;
```

### Feature Types (`/features/*/types/`)

```typescript
// events/types/index.ts
interface Event {
  id: string;
  title: string;
  date: Date;
  capacity: number;
  registrations: Registration[];
}

// projects/types/index.ts
interface Project {
  id: string;
  title: string;
  creator: User;
  technologies: string[];
}
```

## Styling

1. **Global Styles**

   - Tailwind configuration
   - Design tokens and theme variables
   - Base component styles

2. **Component Styles**
   - Tailwind utility classes
   - shadcn component customization
   - Feature-specific styles when needed

## Assets (`/public/`)

```
public/
├── images/
│   ├── brand/            # Logo and brand assets
│   ├── icons/            # UI icons
```
