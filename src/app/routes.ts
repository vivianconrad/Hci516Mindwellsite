import { createHashRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { AssessmentConsent } from "./components/AssessmentConsent";
import { AssessmentQuestions } from "./components/AssessmentQuestions";
import { AssessmentResults } from "./components/AssessmentResults";
import { ProviderDirectory } from "./components/ProviderDirectory";
import { ProviderProfile } from "./components/ProviderProfile";
import { ResourcesPage } from "./components/ResourcesPage";
import { AboutPage } from "./components/AboutPage";
import { NotFound } from "./components/NotFound";

export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "assessment", Component: AssessmentConsent },
      { path: "assessment/questions", Component: AssessmentQuestions },
      { path: "assessment/results", Component: AssessmentResults },
      { path: "providers", Component: ProviderDirectory },
      { path: "providers/:id", Component: ProviderProfile },
      { path: "resources", Component: ResourcesPage },
      { path: "about", Component: AboutPage },
      { path: "*", Component: NotFound },
    ],
  },
]);
