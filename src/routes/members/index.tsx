import { createFileRoute } from "@tanstack/react-router";
import { Member, sampleMembers } from "./-data/sampleMemberData.ts";
import { MemberProfile } from "./-components/MemberProfile.tsx";

export const Route = createFileRoute("/members/")({
  loader: () => ({
    members: sampleMembers,
  }),
  component: RouteComponent,
});

// Remove later - pull in from API

function RouteComponent() {
  const { members } = Route.useLoaderData();
  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-bold text-center">Our Members</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member: Member) => (
          <MemberProfile key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
