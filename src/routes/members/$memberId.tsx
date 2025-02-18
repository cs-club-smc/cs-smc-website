import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { sampleMembers } from "./-data/sampleMemberData";
import { MemberProfile } from "./-components/MemberProfile";
import { sampleProjects } from "../projects/-data/sampleProjectData";

export const Route = createFileRoute("/members/$memberId")({
  parseParams: (params) => ({
    memberId: z.string().parse(params.memberId),
  }),
  loader: ({ params }) => {
    const member = sampleMembers[params.memberId];
    if (!member) {
      throw new Error(`Member not found: ${params.memberId}`);
    }
    return { member };
  },
  component: MemberDetailPage,
});

// Sample data reusing member profile from members/index.tsx
// - This will have its own customization later just a boilerplate example for now
function MemberDetailPage() {
  const { member } = Route.useLoaderData();

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Member Profile</h1>
      <MemberProfile member={member} projects={sampleProjects} />
    </div>
  );
}
