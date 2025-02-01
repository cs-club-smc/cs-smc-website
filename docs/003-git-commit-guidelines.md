# ADR-003: Git Commit Guidelines

- Status: Proposed
- Date: [2025-01-31]
- Deciders: [Jake TyCyn Schmidt]

## Context and Problem Statement

We need to establish clear guidelines for using Git and making commits, starting with the basics for new developers and building up to our commit message standards. This will help maintain a clean codebase, make collaboration easier, and help developers build good habits.

## Getting Started with Git

### Checking Your Changes

The first step in making commits is understanding what you've changed. Here's how:

```bash
# See all changed files
git status

# This will show you:
# - Files you've modified (in red)
# - Files you've staged for commit (in green)
# - New files that aren't being tracked yet (in red)
```

### Staging Your Changes

You can stage files (prepare them for commit) in different ways:

```bash
# Stage a specific file
git add src/components/EventCard.tsx

# Stage multiple specific files
git add file1.ts file2.ts

# Stage all changed files
git add .

# Stage parts of a file
git add -p  # This will walk you through each change
```

### When to Stage and Commit

#### Scenario 1: Single Feature, Multiple Files

Let's say you're working on the event calendar and changed three files:

```bash
# Check what you changed
git status

# You see:
# modified: src/components/EventCard.tsx
# modified: src/styles/calendar.css
# modified: src/utils/date-helpers.ts

# Since these are all part of the same feature, stage them together:
git add src/components/EventCard.tsx src/styles/calendar.css src/utils/date-helpers.ts

# Then commit with an appropriate message (we'll cover message format below):
git commit -m "feat(events): add hover state to calendar events"
```

#### Scenario 2: Multiple Features, Multiple Files

If you've made changes for different features:

```bash
# First, check all changes
git status

# Stage and commit the event feature changes
git add src/components/EventCard.tsx src/styles/calendar.css
git commit -m "feat(events): update event card styling"

# Then stage and commit the profile changes
git add src/components/ProfileImage.tsx
git commit -m "fix(members): resolve profile image upload bug"
```

### Using VSCode's Git Interface

VSCode makes this even easier:

1. Click the "Source Control" icon in the sidebar (looks like a branch)
2. You'll see all changed files
3. Click the + next to each file to stage it
4. Type your commit message in the text box above
5. Click the checkmark to commit

### Pushing Your Changes

After committing, you'll need to push your changes:

```bash
# Push all commits to your branch
git push origin your-branch-name

# If you're unsure of your branch name, use:
git branch
```

### Pro Tips for Beginners

1. **Use `git status` frequently** - It's your best friend for seeing what's changed
2. **Commit related changes together** - If you fixed two bugs, make two commits
3. **Write clear commit messages** - Future you will thank present you
4. **When in doubt, make a new branch** - Better safe than sorry!
5. **Don't be afraid to ask for help** - Everyone was new to Git once

## Commit Message Guidelines

Now that you understand the basic workflow, let's look at how to write good commit messages.

### Format: `<type>(<scope>): <description>`

#### Where:

- `<type>` defines what kind of change you made:

  - `feat`: Adding something new (like a new button or page)
  - `fix`: Fixing something that wasn't working right
  - `docs`: Changes to documentation or comments
  - `style`: Making things look prettier (spacing, colors, alignment)
  - `refactor`: Reorganizing code without changing what it does
  - `perf`: Making things run faster
  - `test`: Adding or fixing tests
  - `chore`: Routine tasks like updating packages

- `<scope>` defines which part of the website you're working on:
  - `events`: Event-related features (calendar, registration)
  - `projects`: Project showcase and submission features
  - `members`: Member profiles and directory
  - `resources`: Learning materials and tutorials
  - `layout`: Header, footer, or sidebar changes
  - `shared`: Reusable components used across pages
  - `ui`: Design system and shadcn components
  - `types`: TypeScript type definitions
  - `styles`: Global styling changes
  - `assets`: Images, icons, or fonts
  - `lib`: Utility functions and helpers
  - `global`: Changes that affect everything

### Examples (ordered from simple to complex):

```
feat(events): add calendar view for upcoming workshops

fix(members): resolve profile image upload bug

style(ui): standardize button styles across application

refactor(shared): split EventCard into smaller components

docs(global): add TypeScript type documentation

feat(projects): implement project submission form with validation

perf(resources): implement lazy loading for resource images
```

## Additional Guidelines

- Keep the first line under 72 characters
- Use bullet points for additional details if needed
- Write in present tense ("add feature" not "added feature")
- If your change affects multiple areas, you can use multiple commits
- Reference any related issue numbers if applicable

## Questions?

If you're ever unsure about how to use Git or format your commit message, don't hesitate to ask a team member or reference this guide. We're here to help!
