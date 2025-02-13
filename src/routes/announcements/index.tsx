import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/announcements/")({
  component: RouteComponent,
});

function RouteComponent() {
  // Fake Announcement Objects
  const announcements = [
    {
      title: "Spring Semester 2025",
      content: "Start of the new semester",
      dateStart: "2025-02-17",
      dateEnd: "2025-02-17",
    },
    {
      title: "Spring Break 2025",
      content: "No classes",
      dateStart: "2025-04-14",
      dateEnd: "2025-04-18",
    },
  ];

  return (
    <div className="text-center ">
      {announcements.map((announcement) => (
        <div key={announcement.title}>
          <h2>{announcement.title}</h2>
          <p>{announcement.content}</p>
          <p>
            {announcement.dateStart} - {announcement.dateEnd}
          </p>
        </div>
      ))}
    </div>
  );
}
