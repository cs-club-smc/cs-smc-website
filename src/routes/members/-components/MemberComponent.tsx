import { useState } from "react";
import type { Member } from "../-data/sampleMemberData";

interface MemberComponentProps {
  member: Member;
}

export function MemberComponent({ member }: MemberComponentProps) {
  const [showCompleted, setShowCompleted] = useState(false);

  const ongoingProjects =
    member.projects?.filter((p) => p.status === "ongoing") || [];
  const completedProjects =
    member.projects?.filter((p) => p.status === "completed") || [];

  return (
    <div className="p-6 rounded-lg bg-gray-50">
      {/* Member Info */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">{member.name}</h2>
        <p className="text-gray-600">{member.role}</p>
        <p className="text-gray-600">{member.email}</p>
        {member.portfolioLink && (
          <a
            href={member.portfolioLink}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        )}
      </div>

      {/* Projects Section */}
      {member.projects && member.projects.length > 0 && (
        <div className="mt-4">
          {/* Project Type Toggle */}
          <div className="flex gap-4 mb-4">
            <button
              onClick={() => setShowCompleted(false)}
              className={`px-3 py-1 rounded ${
                !showCompleted ? "bg-blue-100 text-blue-800" : "bg-gray-100"
              }`}
            >
              Ongoing ({ongoingProjects.length})
            </button>
            <button
              onClick={() => setShowCompleted(true)}
              className={`px-3 py-1 rounded ${
                showCompleted ? "bg-blue-100 text-blue-800" : "bg-gray-100"
              }`}
            >
              Completed ({completedProjects.length})
            </button>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {(showCompleted ? completedProjects : ongoingProjects).map(
              (project) => (
                <div
                  key={project.title}
                  className="pl-4 border-l-4 border-blue-500"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <span className="text-sm text-gray-500">
                      {new Date(project.dateStart).toLocaleDateString()}
                      {project.dateEnd &&
                        ` - ${new Date(project.dateEnd).toLocaleDateString()}`}
                    </span>
                  </div>
                  <p className="mt-1 text-gray-600">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-sm bg-gray-200 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      className="inline-block mt-2 text-sm text-blue-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              )
            )}
            {(showCompleted ? completedProjects : ongoingProjects).length ===
              0 && (
              <p className="py-4 text-center text-gray-500">
                No {showCompleted ? "completed" : "ongoing"} projects
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
