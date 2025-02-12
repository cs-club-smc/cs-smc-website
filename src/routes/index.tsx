import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="py-6 justify-center flex ">
      <h1 className="text-8xl font-semibold items-center">SMC CS CLUB</h1>
    </div>
  );
}
