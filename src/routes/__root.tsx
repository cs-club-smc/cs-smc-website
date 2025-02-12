import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Main content wrapper with header offset */}
      <div className="flex-1 my-16">
        <main className="container mx-auto px-4">
          <Outlet />
        </main>
      </div>
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
