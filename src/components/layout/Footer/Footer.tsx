export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between px-4 py-6 space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm font-medium hover:text-white transition-colors">
            © 2025 Computer Science Club
          </div>

          {/* Meeting Time */}
          <div className="flex items-center space-x-2 text-sm">
            {/* Can setup w/ cancellations/announcements */}
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-medium">
              Bi-Weekly Meetings: Wednesday @4pm
            </span>
          </div>

          {/* Address */}
          <div className="text-sm hover:text-white transition-colors cursor-pointer group">
            <span className="inline-block group-hover:scale-105 transform transition-transform">
              HSS 205 • 1900 Pico Blvd • Santa Monica
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
