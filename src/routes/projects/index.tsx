import { createFileRoute } from "@tanstack/react-router";
import { sampleProjects } from "./-data/sampleProjectData";
import { ProjectsProfile } from "./-components/ProjectsProfile";
import { sampleMembers } from "../members/-data/sampleMemberData";

export const Route = createFileRoute("/projects/")({
  loader: () => ({
    projects: sampleProjects,
    members: sampleMembers, // We'll need this for member lookups if people want to click on profiles and contact them
  }),
  component: RouteComponent,
});

export interface Project {
  title: string;
  description: string;
  dateStart: string;
  dateEnd: string;
  link?: string; // Optional
  members?: string[]; // Optional - Reference Member Interface
}

// Remove later - pull in from API

function RouteComponent() {
  const { projects, members } = Route.useLoaderData();

  // Convert projects Record to array for mapping
  const projectsArray = Object.values(projects);

  console.log("projectsArray", projectsArray);
  return (
    <div>
      {/* Projects */}

      {/* Some Filter system to display projects by:
        - looking for members
        - titled
        - date started
        - technologies
        - ongoing vs completed
      */}
      {/* For now just map of projects */}
      <div>
        {projectsArray.map((project) => (
          <ProjectsProfile
            key={project.id}
            project={project}
            members={members} // Pass members Record for looking up team members
          />
        ))}
      </div>
    </div>
  );
}
