import { createFileRoute } from "@tanstack/react-router";
import DiscordIcon from "../components/shared/icons/DiscordIcon";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col justify-center py-6 space-y-10">
      {/* Title */}
      <div className="text-center">
        <h1 className="items-center font-semibold text-8xl">SMC </h1>
        <h1 className="items-center font-semibold text-8xl">CS Club</h1>
      </div>
      {/* Other Links/Notifications */}
      <div className="flex flex-row justify-center space-x-4 text-2xl">
        <h3>Placeholder 1</h3>
        <h3>Placeholder 2</h3>
        <h3>Placeholder 3</h3>
      </div>

      {/* Join Discord */}
      <div className="flex flex-row justify-center text-center">
        <h2 className="text-2xl font-semibold">Join the</h2>

        <a
          href="https://discord.com/invite/tNyJqzB7td"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl font-semibold text-blue-600"
        >
          <DiscordIcon className="inline-block w-10 h-10 mx-2" />
          <span>Discord</span>
        </a>
      </div>
    </div>
  );
}
