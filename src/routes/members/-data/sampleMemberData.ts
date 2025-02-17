export type ProjectStatus = "ongoing" | "completed";

export interface Project {
  title: string;
  description: string;
  dateStart: string;
  dateEnd?: string;
  status: ProjectStatus;
  link?: string;
  technologies?: string[];
}

export interface Member {
  id: string;
  name: string;
  role: string;
  email: string;
  portfolioLink?: string;
  projects?: Project[];
}

export const sampleMembers: Member[] = [
  {
    id: "1",
    name: "John Doe",
    role: "President",
    email: "john.doe@email.com",
    portfolioLink: "https://johndoe.dev",
    projects: [
      {
        title: "Club Website Redesign",
        description:
          "Leading the development of our new club website using React and TypeScript",
        dateStart: "2025-01-15",
        status: "ongoing",
        technologies: ["React", "TypeScript", "Tailwind"],
        link: "https://github.com/club/website",
      },
      {
        title: "Mentorship Platform",
        description:
          "Created a platform to connect club members with industry mentors",
        dateStart: "2024-09-01",
        dateEnd: "2024-12-15",
        status: "completed",
        technologies: ["Node.js", "MongoDB", "Express"],
        link: "https://mentorship.club.org",
      },
    ],
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "Vice President",
    email: "jane.smith@email.com",
    portfolioLink: "/",
    projects: [
      {
        title: "Workshop Management System",
        description:
          "Building a system to manage workshop registrations and attendance",
        dateStart: "2025-02-01",
        status: "ongoing",
        technologies: ["Next.js", "PostgreSQL", "Prisma"],
      },
    ],
  },
  {
    id: "3",
    name: "Jake TyCyn Schmidt",
    role: "Officer - Website Project Manager",
    email: "jaketycyn@gmail.com",
    portfolioLink: "https://jaketycyn.dev",
    projects: [
      {
        title: "Get Fit",
        description:
          "Building an application to help users track their fitness progress",
        dateStart: "2024-10-15",
        status: "ongoing",
        link: "https://jaketycyn.dev",
        technologies: ["Next.js", "PostgreSQL", "Redux"],
      },
    ],
  },
];
