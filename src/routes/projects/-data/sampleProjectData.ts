export interface Project {
  id: string; //  change to UUID later
  title: string;
  description: string;
  dateStart: string;
  dateEnd?: string | null;
  status: "ongoing" | "completed";
  link?: string;
  openToMembers?: boolean; // Status for showing people to join/contact person to join?
  memberIds: string[]; // reference Member Interface
  technologies?: string[];
}

export const sampleProjects: Record<string, Project> = {
  "project-1": {
    id: "project-1",
    title: "Club Website Redesign",
    description:
      "Leading the development of our new club website using React and TypeScript",
    dateStart: "2025-01-15",
    dateEnd: null,
    link: "/",
    openToMembers: true,
    status: "ongoing",
    memberIds: ["111aaa", "333ccc"], // Reference to John Doe,  and Jake
    technologies: ["React", "TypeScript", "Tailwind", "TanStackRouter"],
  },
  "project-2": {
    id: "project-2",
    title: "Mentorship Platform",
    description:
      "Created a platform to connect club members with industry mentors",
    dateStart: "2024-09-01",
    dateEnd: "2024-12-15",
    status: "completed",
    memberIds: ["222bbb"], // Reference to John Doe
    technologies: ["Node.js", "MongoDB", "Express"],
    link: "https://mentorship.club.org",
  },
  "project-3": {
    id: "project-3",
    title: "Get Fit",
    description:
      "Building an application to help users track their fitness progress",
    dateStart: "2024-10-15",
    status: "ongoing",
    memberIds: ["333ccc"], // Reference to Jake
    link: "https://jaketycyn.dev",
    technologies: ["Next.js", "PostgreSQL", "Redux"],
  },
};
