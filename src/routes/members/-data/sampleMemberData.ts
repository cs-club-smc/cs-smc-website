export type ProjectStatus = "ongoing" | "completed";

export interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  portfolioLink?: string;
  projectIds: string[]; // Reference projects by ID instead of full objects
}

export const sampleMembers: Record<string, Member> = {
  "111aaa": {
    id: "111aaa",
    name: "John Doe",
    role: "President",
    email: "john.doe@email.com",
    portfolioLink: "https://johndoe.dev",
    projectIds: ["project-1", "project-2"],
  },
  "222bbb": {
    id: "222bbb",
    name: "Jane Smith",
    role: "Vice President",
    email: "jane.smith@email.com",
    portfolioLink: "/",
    projectIds: ["project-2"],
  },
  "333ccc": {
    id: "333ccc",
    name: "Jake TyCyn Schmidt",
    role: "Officer - Website Project Manager",
    email: "jaketycyn@gmail.com",
    portfolioLink: "https://jaketycyn.dev",
    projectIds: ["project-1", "project-3"],
  },
};
