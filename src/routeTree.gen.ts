/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AboutImport } from "./routes/about";
import { Route as IndexImport } from "./routes/index";
import { Route as ProjectsIndexImport } from "./routes/projects/index";
import { Route as MembersIndexImport } from "./routes/members/index";
import { Route as AnnouncementsIndexImport } from "./routes/announcements/index";

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  id: "/",
  path: "/",
  getParentRoute: () => rootRoute,
} as any);

const ProjectsIndexRoute = ProjectsIndexImport.update({
  id: "/projects/",
  path: "/projects/",
  getParentRoute: () => rootRoute,
} as any);

const MembersIndexRoute = MembersIndexImport.update({
  id: "/members/",
  path: "/members/",
  getParentRoute: () => rootRoute,
} as any);

const AnnouncementsIndexRoute = AnnouncementsIndexImport.update({
  id: "/announcements/",
  path: "/announcements/",
  getParentRoute: () => rootRoute,
} as any);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/";
      path: "/";
      fullPath: "/";
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/about": {
      id: "/about";
      path: "/about";
      fullPath: "/about";
      preLoaderRoute: typeof AboutImport;
      parentRoute: typeof rootRoute;
    };
    "/announcements/": {
      id: "/announcements/";
      path: "/announcements";
      fullPath: "/announcements";
      preLoaderRoute: typeof AnnouncementsIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/members/": {
      id: "/members/";
      path: "/members";
      fullPath: "/members";
      preLoaderRoute: typeof MembersIndexImport;
      parentRoute: typeof rootRoute;
    };
    "/projects/": {
      id: "/projects/";
      path: "/projects";
      fullPath: "/projects";
      preLoaderRoute: typeof ProjectsIndexImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/announcements": typeof AnnouncementsIndexRoute;
  "/members": typeof MembersIndexRoute;
  "/projects": typeof ProjectsIndexRoute;
  "/members/MemberComponent": typeof MembersComponentsMemberComponentRoute;
  "/members/sampleData": typeof MembersDataSampleDataRoute;
}

export interface FileRoutesByTo {
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/announcements": typeof AnnouncementsIndexRoute;
  "/members": typeof MembersIndexRoute;
  "/projects": typeof ProjectsIndexRoute;
  "/members/MemberComponent": typeof MembersComponentsMemberComponentRoute;
  "/members/sampleData": typeof MembersDataSampleDataRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  "/": typeof IndexRoute;
  "/about": typeof AboutRoute;
  "/announcements/": typeof AnnouncementsIndexRoute;
  "/members/": typeof MembersIndexRoute;
  "/projects/": typeof ProjectsIndexRoute;
  "/members/_components/MemberComponent": typeof MembersComponentsMemberComponentRoute;
  "/members/_data/sampleData": typeof MembersDataSampleDataRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths:
    | "/"
    | "/about"
    | "/announcements"
    | "/members"
    | "/projects"
    | "/members/MemberComponent"
    | "/members/sampleData";
  fileRoutesByTo: FileRoutesByTo;
  to:
    | "/"
    | "/about"
    | "/announcements"
    | "/members"
    | "/projects"
    | "/members/MemberComponent"
    | "/members/sampleData";
  id:
    | "__root__"
    | "/"
    | "/about"
    | "/announcements/"
    | "/members/"
    | "/projects/"
    | "/members/_components/MemberComponent"
    | "/members/_data/sampleData";
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute;
  AboutRoute: typeof AboutRoute;
  AnnouncementsIndexRoute: typeof AnnouncementsIndexRoute;
  MembersIndexRoute: typeof MembersIndexRoute;
  ProjectsIndexRoute: typeof ProjectsIndexRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  AnnouncementsIndexRoute: AnnouncementsIndexRoute,
  MembersIndexRoute: MembersIndexRoute,
  ProjectsIndexRoute: ProjectsIndexRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/announcements/",
        "/members/",
        "/projects/",
        "/members/_components/MemberComponent",
        "/members/_data/sampleData"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/announcements/": {
      "filePath": "announcements/index.tsx"
    },
    "/members/": {
      "filePath": "members/index.tsx"
    },
    "/projects/": {
      "filePath": "projects/index.tsx"
    },
  }
}
ROUTE_MANIFEST_END */
