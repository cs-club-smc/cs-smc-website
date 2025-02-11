# ADR-002: Branching and Pull Request Guidelines

- Status: Proposed
- Date: [2025-01-31]
- Deciders: [Jake TyCyn Schmidt]

## Context and Problem Statement

As our computer club website grows, we need a clear and beginner-friendly workflow for creating branches and submitting pull requests. This will help new developers contribute confidently while maintaining code quality and organization.

## Decision Drivers

- Want to make it easy for new developers to contribute
- Need to keep our main branch stable
- Want to make code reviews efficient and helpful
- Need to prevent merge conflicts
- Want to maintain clear project history
- Need to make collaboration smoother
- Want to build good Git habits for future development work

## Considered Options

1. GitHub Flow (feature branches + main)
2. GitFlow (develop, feature, release branches)
3. Trunk-based development
4. Environment-based branching

## Decision Outcome

Chosen option: Modified GitHub Flow with descriptive branch names and protected main branch

## Branch Naming Convention

### Format: `<type>/<scope>/<short-description>`

#### Where:

- `<type>` matches our commit types:

  - `feature` (or `feat`): New features
  - `fix`: Bug fixes
  - `style`: Visual changes
  - `docs`: Documentation updates
  - `refactor`: Code improvements
  - `test`: Adding tests

- `<scope>` matches our website sections:

  - `events`
  - `projects`
  - `members`
  - `resources`
  - `layout`
  - `shared`
  - etc.

- `<short-description>`: Brief hyphenated description

### Branch Name Examples:

You can choose between two levels of branch name specificity depending on the scope of your work:

#### Specific Feature Branches

Use this format when working on a focused, single-purpose change:

```bash
feature/events/calendar-view          # Adding a specific calendar feature
fix/members/profile-upload            # Fixing profile image upload
style/ui/button-components            # Updating specific button styles
docs/adr/branching-guidelines         # Adding specific documentation
feature/projects/submission-form      # New project submission feature
```

#### General Section Branches

Use this format when making multiple related changes to a section:

```bash
feature/events                      # Multiple event-related changes
feature/members                     # Major members section updates
feature/navigation                  # Navigation system overhaul
style/ui                            # Global UI refresh
feature/projects                    # Projects section revamp
```

##### Guidelines for Choosing:

- Use specific branches when changes are isolated and focused
- Use general branches when making multiple related changes
- Always prefer specific branches unless you have a clear need for a general one
- Never mix unrelated changes regardless of branch naming style

## Workflow Steps

### 1. Starting New Work

```bash
# Update your main branch
git checkout main
git pull origin main

# Create your new branch
git checkout -b feature/events/add-calendar-view
```

### 2. Working on Your Branch

- Make small, focused commits
- Push regularly to backup your work:
  ```bash
  git push origin feature/events/add-calendar-view
  ```

### 3. Creating a Pull Request

#### PR Title Format:

Use the same convention as commits:

```
feat(events): add calendar view for upcoming workshops
```

#### Minimal PR Example (Let's Make It Better!)

```
feat(events): add event card

Made a card component for events that shows the event title, date,
and description. Tested it and it works.

Related Issue: #456
```

##### Why This Could Be Better:

- Doesn't specify what was actually changed
- No mention of how it was tested
- No visual reference for reviewers
- Doesn't indicate if there are any potential issues
- Makes it harder for reviewers to give meaningful feedback

##### When Is a Minimal PR Acceptable?

A minimal PR like this can be acceptable for simple fixes or changes where:

- The change is trivial (e.g., fixing a typo, updating a config file).
- The context is already well-understood by the team (e.g., a follow-up to a recent discussion).
- The change has minimal impact on functionality or user experience.

However, even in these cases, it’s good practice to include:

- A brief description of the change.
- A link to the related issue or discussion.
- A note about testing (if applicable).

For all other changes, aim to provide more context and detail to make the review process smoother and more productive.

#### Good PR Description Example:

```
## Changes Made
• Added new Calendar component for events page
• Implemented date filtering and sorting
• Added hover states for event previews

## Screenshots
[Add screenshots of the new calendar feature]

## Testing Done
• Tested on Chrome, Firefox, and Safari
• Verified mobile responsiveness
• Checked keyboard navigation works

## Checklist
- [x] Code follows our style guidelines
- [x] Added necessary tests
- [x] Updated documentation
- [x] Tested on mobile devices
- [x] No console errors

Related Issue: #456
```

#### Overachiever PR Description Example (AKA "Please Future Employer Hire Me"):

```
feat(shared): create reusable EventCard component

## Changes Made
- Built new EventCard component using shadcn/ui Card as base
- Added responsive image handling with fallback states
- Implemented hover animations for better interactivity
- Created three variants: compact, standard, and featured
- Added skeleton loading state for better UX
- Made sure all interactive elements are keyboard accessible

## Insights & Future Thoughts
I noticed while building this that we might want to create a standard MediaCard
component in the future, since this EventCard shares a lot of patterns we might
want for ProjectCard and ResourceCard too. I structured the component with this
in mind, keeping the media handling separate from the event-specific logic.
Also, we might want to consider lazy loading for images if we end up showing
many cards at once on the events page.

## Screenshots
[Before/After screenshots of the component]

## Testing Done
- Tested on Chrome, Firefox, and Safari
- Checked mobile responsiveness
- Verified keyboard navigation
- Tested loading and error states

Related Issue: #456
```

## Review Process

### For PR Authors

1. **Before Submitting**

   - Your code builds without errors
   - You've tested your changes
   - You've added necessary tests
   - You've updated documentation
   - Your branch is up to date with main

2. **After Submitting**
   - Respond to reviewer comments promptly
   - Make requested changes in new commits
   - Don't force push unless asked
   - Thank your reviewers!

### For Reviewers

1. **What to Look For**

   - Code works as intended
   - Follows project style
   - Has appropriate tests
   - Is maintainable
   - Documentation is updated

2. **How to Give Feedback**

   - Be kind and constructive
   - Explain your reasoning
   - Suggest specific improvements
   - Use "We" instead of "You"

   Example:

   ```
   Instead of:
   "You wrote this function wrong"

   Write:
   "We could make this function more efficient by..."
   ```

## Common Questions

### "Help! My branch is out of date with main!"

```bash
# Update your main branch
git checkout main
git pull origin main

# Go back to your branch and update it
git checkout your-branch-name
git merge main

# Fix any conflicts and continue
```

### "I made commits to the wrong branch!"

Don't panic! Talk to a team member - we can help move your changes to the right place.

### "I need to update my PR after review!"

```bash
# Make your changes
git add .
git commit -m "fix(scope): address review feedback"
git push origin your-branch-name
```

## Pro Tips

1. Create branches for even small changes
2. Keep PRs focused and reasonably sized
3. Ask for help early if you're stuck
4. Use draft PRs for work in progress
5. Review your own PR before requesting reviews
6. Test your changes thoroughly
7. Write clear PR descriptions

Remember: Everyone was new to Git once! Don't be afraid to ask questions or make mistakes - that's how we learn! 🎓

## Need Help?

- Ask in our team chat
- Tag specific team members in your PR
- Use the "draft
