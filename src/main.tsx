import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/Routes.tsx";
import { StoreContext, store } from "./app/stores/store.ts";
import "./index.css";
import LoadingComponent from "./features/components/LoadingComponent.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <Suspense fallback={<LoadingComponent />}>
        <RouterProvider router={router} />
      </Suspense>
    </StoreContext.Provider>
  </React.StrictMode>
);
