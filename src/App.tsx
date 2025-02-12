import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import { Routes } from "./routes/RouteConfig";

export default function MyApp() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes />
      </main>
      <Footer />
    </div>
  );
}
