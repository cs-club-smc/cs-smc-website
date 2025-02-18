import { Link } from "@tanstack/react-router";
import { Project } from "../-data/sampleProjectData";
import { Member } from "../../members/-data/sampleMemberData";

interface ProjectsProfileProps {
  project: Project;
  members: Record<string, Member>;
}

export function ProjectsProfile({ project, members }: ProjectsProfileProps) {
  const teamMembers = project
    .memberIds!.map((id) => members[id])
    .filter(Boolean);

  return (
    <div className="flex items-center justify-center p-4 mb-4 border rounded-lg bg-slate-100">
      <div className="block px-3 py-2">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>

        {/* Project Dates */}
        <div className="mt-2 text-sm text-gray-500">
          Started: {new Date(project.dateStart).toLocaleDateString()}
          {project.dateEnd &&
            ` • Completed: ${new Date(project.dateEnd).toLocaleDateString()}`}
        </div>

        {/* Team Members */}
        {teamMembers.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Team Members:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {teamMembers.map((member) => (
                <Link
                  key={member.id}
                  to="/members/$memberId"
                  params={{
                    memberId: member.id,
                  }}
                  className="px-3 py-1 text-sm text-blue-800 bg-blue-100 rounded-full"
                >
                  {member.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Technologies */}
        {project.technologies && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Technologies:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Project Link */}
        {project.link && (
          <a
            href={project.link}
            className="inline-block mt-4 text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        )}

        {/* Project Status */}
        <div className="mt-4">
          <span
            className={`px-3 py-1 rounded-full text-sm ${
              project.status === "ongoing"
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
