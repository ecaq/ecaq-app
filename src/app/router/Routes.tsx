import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("../layout/App"));
const Home = lazy(() => import("../../features/home/Home"));
const EcaqMissionVision = lazy(
  () => import("../../features/about/EcaqMissionVision")
);
const StatementOfFaith = lazy(
  () => import("../../features/about/StatementOfFaith")
);
const NewsUpdate = lazy(() => import("../../features/news/NewsUpdate"));
const Gallery = lazy(() => import("../../features/gallery/Gallery"));
const ContactUsVideo = lazy(
  () => import("../../features/contact/ContactUsVideo")
);
const EcaqCore = lazy(() => import("../../features/about/EcaqCore"));
const NotFound = lazy(() => import("../../features/errors/NotFound"));
const ServerError = lazy(() => import("../../features/errors/ServerError"));
const FundRaising = lazy(() => import("../../features/fund/FundRaising"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/mission-vision",
        element: <EcaqMissionVision />,
      },
      {
        path: "/statement-of-faith",
        element: <StatementOfFaith />,
      },
      {
        path: "/ecaq-core",
        element: <EcaqCore />,
      },
      {
        path: "/news-update",
        element: <NewsUpdate />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/fund-raising",
        element: <FundRaising />,
      },      
      {
        path: "/contact-us",
        element: <ContactUsVideo />,
      },
      {
        path: "not-found",
        element: <NotFound />,
      },
      {
        path: "server-error",
        element: <ServerError />,
      },
      {
        path: "*",
        element: <Navigate replace to="/not-found" />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
