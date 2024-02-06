import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("../layout/App"))
const Home = lazy(() => import("../../features/home/Home"))
const Gallery = lazy(() => import("../../features/gallery/Gallery"))
const EcaqMissionVision = lazy(() => import("../../features/about/EcaqMissionVision"))
const StatementOfFaith = lazy(() => import("../../features/about/StatementOfFaith"))
const ContactUs = lazy(() => import("../../features/about/StatementOfFaith"))
const EcaqCore = lazy(() => import("../../features/about/EcaqCore"))
const NotFound = lazy(() => import("../../features/errors/NotFound"))
const ServerError = lazy(() => import("../../features/errors/ServerError"))

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
          path: 'not-found', element: <NotFound />
      },
      {
          path: 'server-error', element: <ServerError />
      },
      {
          path: '*', element: <Navigate replace to='/not-found' />
      }
    ],
  },
];

export const router = createBrowserRouter(routes);
