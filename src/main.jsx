import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import LoginContainer from "./pages/Login/LoginContainer.jsx";
import ProfileContainer from "./pages/Profile/ProfileContainer.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import FeedContainer from "./pages/Feed/FeedContainer.jsx";
import { Provider } from "react-redux";
import { appStore } from "./store/appStore.js";
import ConnectionContainer from "./pages/Connection/ConnectionContainer.jsx";
import RequestContainer from "./pages/Request/RequestContainer.jsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <>
        <h1>OOPs Something Went Wrong</h1>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginContainer />,
      },
      {
        path: "/feed",
        element: <FeedContainer />,
      },
      {
        path: "/profile",
        element: <ProfileContainer />,
      },
      {
        path: "/connection",
        element: <ConnectionContainer />,
      },
      {
        path: "/request",
        element: <RequestContainer />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
