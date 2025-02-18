/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ProjectsIndexImport } from './routes/projects/index'
import { Route as MembersIndexImport } from './routes/members/index'
import { Route as AnnouncementsIndexImport } from './routes/announcements/index'
import { Route as AboutIndexImport } from './routes/about/index'
import { Route as MembersMemberIdImport } from './routes/members/$memberId'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: '/projects/',
  path: '/projects/',
  getParentRoute: () => rootRoute,
} as any)

const MembersIndexRoute = MembersIndexImport.update({
  id: '/members/',
  path: '/members/',
  getParentRoute: () => rootRoute,
} as any)

const AnnouncementsIndexRoute = AnnouncementsIndexImport.update({
  id: '/announcements/',
  path: '/announcements/',
  getParentRoute: () => rootRoute,
} as any)

const AboutIndexRoute = AboutIndexImport.update({
  id: '/about/',
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any)

const MembersMemberIdRoute = MembersMemberIdImport.update({
  id: '/members/$memberId',
  path: '/members/$memberId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/members/$memberId': {
      id: '/members/$memberId'
      path: '/members/$memberId'
      fullPath: '/members/$memberId'
      preLoaderRoute: typeof MembersMemberIdImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexImport
      parentRoute: typeof rootRoute
    }
    '/announcements/': {
      id: '/announcements/'
      path: '/announcements'
      fullPath: '/announcements'
      preLoaderRoute: typeof AnnouncementsIndexImport
      parentRoute: typeof rootRoute
    }
    '/members/': {
      id: '/members/'
      path: '/members'
      fullPath: '/members'
      preLoaderRoute: typeof MembersIndexImport
      parentRoute: typeof rootRoute
    }
    '/projects/': {
      id: '/projects/'
      path: '/projects'
      fullPath: '/projects'
      preLoaderRoute: typeof ProjectsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/members/$memberId': typeof MembersMemberIdRoute
  '/about': typeof AboutIndexRoute
  '/announcements': typeof AnnouncementsIndexRoute
  '/members': typeof MembersIndexRoute
  '/projects': typeof ProjectsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/members/$memberId': typeof MembersMemberIdRoute
  '/about': typeof AboutIndexRoute
  '/announcements': typeof AnnouncementsIndexRoute
  '/members': typeof MembersIndexRoute
  '/projects': typeof ProjectsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/members/$memberId': typeof MembersMemberIdRoute
  '/about/': typeof AboutIndexRoute
  '/announcements/': typeof AnnouncementsIndexRoute
  '/members/': typeof MembersIndexRoute
  '/projects/': typeof ProjectsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/members/$memberId'
    | '/about'
    | '/announcements'
    | '/members'
    | '/projects'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/members/$memberId'
    | '/about'
    | '/announcements'
    | '/members'
    | '/projects'
  id:
    | '__root__'
    | '/'
    | '/members/$memberId'
    | '/about/'
    | '/announcements/'
    | '/members/'
    | '/projects/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MembersMemberIdRoute: typeof MembersMemberIdRoute
  AboutIndexRoute: typeof AboutIndexRoute
  AnnouncementsIndexRoute: typeof AnnouncementsIndexRoute
  MembersIndexRoute: typeof MembersIndexRoute
  ProjectsIndexRoute: typeof ProjectsIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MembersMemberIdRoute: MembersMemberIdRoute,
  AboutIndexRoute: AboutIndexRoute,
  AnnouncementsIndexRoute: AnnouncementsIndexRoute,
  MembersIndexRoute: MembersIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/members/$memberId",
        "/about/",
        "/announcements/",
        "/members/",
        "/projects/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/members/$memberId": {
      "filePath": "members/$memberId.tsx"
    },
    "/about/": {
      "filePath": "about/index.tsx"
    },
    "/announcements/": {
      "filePath": "announcements/index.tsx"
    },
    "/members/": {
      "filePath": "members/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
