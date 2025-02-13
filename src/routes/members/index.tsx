import { createFileRoute } from "@tanstack/react-router";

import { Member, sampleMembers } from "./_data/_sampleData.ts";
import { MemberComponent } from "./_components/_MemberComponent.tsx";

export const Route = createFileRoute("/members/")({
  component: RouteComponent,
});

// Remove later - pull in from API

function RouteComponent() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleMembers.map((member: Member) => (
          <MemberComponent key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
}
