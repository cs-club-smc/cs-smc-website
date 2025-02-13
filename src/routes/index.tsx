import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="py-6 justify-center flex flex-col space-y-10">
      {/* Title */}
      <div className="text-center">
        <h1 className="text-8xl font-semibold items-center">SMC </h1>
        <h1 className="text-8xl font-semibold items-center">CS Club</h1>
      </div>
      {/* Other Links/Notifications */}
      <div className="flex flex-row justify-center space-x-4 text-2xl">
        <h3>Placeholder 1</h3>
        <h3>Placeholder 2</h3>
        <h3>Placeholder 3</h3>
      </div>

      {/* Join Discord */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Join our Discord server</h2>
        <a
          href="https://discord.gg/4q3w3f7"
          className="text-2xl font-semibold text-blue-600"
        >
          discord.gg/4q3w3f7
        </a>
      </div>
    </div>
  );
}
