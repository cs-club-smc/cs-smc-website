import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import DiscordIcon from "../../assets/images/icons/DiscordIcon";
import GithubIcon from "../../assets/images/icons/GithubIcon";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  const advisors = [
    { name: "Prof. John Doe", email: "[email protected]", role: "Advisor" },
    { name: "Prof. Jane Doe", email: "[email protected]", role: "Advisor" },
  ];

  const affiliatedOrgs = [
    {
      name: "SMC Club 1",
      description: "Description of Club 1",
      contact: "[email protected]",
    },
    {
      name: "SMC Club 2",
      description: "Description of Club 2",
      contact: "[email protected]",
    },
    {
      name: "SMC Club 3",
      description: "Description of Club 2",
      contact: "[email protected]",
    },
  ];

  const socialLinks = [
    { icon: DiscordIcon, label: "Discord", href: "#", color: "text-gray-900" },
    {
      icon: GithubIcon,
      label: "Github",
      href: "https://github.com/cs-club-smc",
      color: "text-gray-900",
    },
    { icon: Mail, label: "Email", href: "#", color: "text-red-900" },
  ];
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6">
          Welcome to the Santa Monica College Computer Science Club
        </h2>
        <h3 className="text-3xl font-bold mb-6">
          {" "}
          where passion meets practice.
        </h3>
      </div>

      {/* Mission & Vision */}
      <div className="mb-16">
        <div className="text-xl mb-8">
          <p className="text-2xl text-gray-600 text-left">
            We foster an inclusive learning environment where students
            collaborate on real-world projects, develop professional skills, and
            build lasting connections in tech. Whether you're writing your first
            line of code or building full-stack applications, you'll find
            mentorship, resources, and opportunities to grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Workshops</h3>
            <p>Regular technical workshops and coding sessions</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            <p>Collaborative coding projects and hackathons</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Networking</h3>
            <p>Industry connections and career opportunities</p>
          </div>
        </div>
      </div>

      {/* Advisors Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Advisors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="p-6 bg-gray-50 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-semibold">{advisor.name}</h3>
              <p className="text-gray-600">{advisor.role}</p>
              <p className="text-blue-600">{advisor.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Affiliated Organizations */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Affiliated Organizations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {affiliatedOrgs.map((org) => (
            <div key={org.name} className="p-6 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{org.name}</h3>
              <p className="text-gray-600">{org.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <link.icon className={`h-5 w-5 ${link.color}`} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
