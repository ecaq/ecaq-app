import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import Home from "../../features/home/Home";
import MarketPalce from "../../features/market-place/MarketPlace";
import MapLayout from "../../features/map/MapLayout";
import Gallery from "../../features/gallery/Gallery";
import EcaqMissionVision from "../../features/about/EcaqMissionVision";
import StatementOfFaith from "../../features/about/StatementOfFaith";

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/market-place",
        element: <MarketPalce />,
      },
      {
        path: "/map",
        element: <MapLayout />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
