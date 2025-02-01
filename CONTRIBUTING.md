# Welcome

## Short Links

- [Onboarding Document](https://docs.google.com/document/d/1R3CT16qRYqOefrcALHj0bvIeB7eLJBiYy2P5kHkxD9E/edit?usp=sharing)
- [Discord Server](https://discord.gg/KYCtJ3axvB)

## Table of Contents

- [Welcome](#welcome)
  - [Short Links](#short-links)
  - [Table of Contents](#table-of-contents)
  - [How can I contribute?](#how-can-i-contribute)
    - [I'm ready, Where to start?](#im-ready-where-to-start)
    - [Help, I'm beginner. How do I fork?](#help-im-beginner-how-do-i-fork)
    - [Help again, How do I create a pull request?](#help-again-how-do-i-create-a-pull-request)
  - [Style Guide and Conventions](#style-guide-and-conventions)
    - [Project Structure](#project-structure)
    - [Git Workflow](#git-workflow)
    - [Code Style](#code-style)

## How can I contribute?

In summary, you will need to fork our repository, commit the changes on the forked repository and create a pull request from the original repository. It will be based on [this guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

### I'm ready, Where to start?

Pick a task you want to work on from the [Taskboard](https://github.com/orgs/cs-club-smc/projects/3/views/1?layout=board). You must only do the thing that the task specifies or you will be asked to amend your changes.

### Help, I'm beginner. How do I fork?

To fork a project:

1. First, go to [original repository page](https://github.com/cs-club-smc/cs-smc-website)
2. In the top-right corner of the repository, locate the fork button and click it
3. Click the create fork button and follow the README.md on how to run the project locally

### Help again, How do I create a pull request?

To create a pull request:

1. First, go to [original repository page](https://github.com/cs-club-smc/cs-smc-website)
2. After you make some changes to your forked repository, a notice will load up asking you to create a pull request
3. Make sure you create a pull request from your forked repository's branch to the original repository's development branch titled `development`
4. Follow our pull request and commit message conventions detailed in the Style Guide section below

## Style Guide and Conventions

We maintain detailed architecture decision records (ADRs) that outline our conventions and best practices. Please familiarize yourself with these documents before contributing:

### Project Structure

Review [ADR-001: Component Organization Structure](./docs/adrs/001-project-folder-structure.md) for:

- Directory structure and organization
- Component hierarchy
- File naming conventions
- Type safety guidelines
- Asset management

### Git Workflow

Our Git workflow is documented in two ADRs:

1. [ADR-002: Branching and Pull Request Guidelines](./docs/adrs/002-branching-pull-request-guidelines.md)

   - Branch naming conventions
   - Pull request format and requirements
   - Code review process
   - Common Git scenarios and solutions

2. [ADR-003: Git Commit Guidelines](./docs/adrs/003-git-commit-guidelines.md)
   - Commit message format
   - Types and scopes
   - Best practices for making commits
   - Examples and common scenarios

### Code Style

We follow established coding standards:

- TypeScript/JavaScript: [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- React: [Airbnb React Style Guide](https://airbnb.io/javascript/react/)
- CSS: TBD

Additional style guides and conventions may be added as the project evolves. Check the `/docs/adrs` directory for the latest guidelines.
