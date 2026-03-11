import { Outlet, useLocation } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

export function Layout() {
  const location = useLocation();
  // Hide nav/footer on assessment question pages
  const isAssessmentFlow = location.pathname === "/assessment/questions";

  return (
    <div className="min-h-screen flex flex-col">
      {!isAssessmentFlow && <Navigation />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isAssessmentFlow && <Footer />}
    </div>
  );
}
