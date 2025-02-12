import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react"; // Replace with the actual path to ChevronDown component

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const navigation = {
    main: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      {
        name: "Events",
        href: "/events",
        submenu: [
          { name: "Calendar", href: "/events/calendar" },
          { name: "Workshops", href: "/events/workshops" },
          { name: "Past Events", href: "/events/past" },
        ],
      },
      {
        name: "Projects",
        href: "/projects",
        submenu: [
          { name: "Showcase", href: "/projects/showcase" },
          { name: "Submit Project", href: "/projects/submit" },
        ],
      },
      { name: "Members", href: "/members" },
    ],
  };

  // ! Figure out appropriate types for e and item
  const handleMobileMenuClick = (e: any, item: any) => {
    // Preventnavigation for items w/ submenus
    if (item.submenu) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.name ? "" : item.name);
    } else {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-gray-800 text-white fixed top-0 z-50">
      <nav className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">
              CS Club
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.main.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown("")}
              >
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-300"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute left-0  w-48 rounded-md bg-white py-2 shadow-lg">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-gray-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.main.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium hover:bg-gray-700"
                    onClick={(e) => handleMobileMenuClick(e, item)}
                  >
                    <div className="flex items-center justify-between">
                      {item.name}
                      {item.submenu && (
                        <ChevronDown
                          className={`h-4 w-4 transform transition-transform ${
                            activeDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </a>
                  {item.submenu && activeDropdown === item.name && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-700"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
