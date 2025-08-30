import "./App.css";
import { createBrowserRouter } from "react-router";
import ThreadAction from "./pages/ThreadAction";
import ThreadDetailPage from "./pages/ThreadDetailPage";
import Thread from "./pages/Thread";
import NotFound from "./utils/NotFound";
import RootLayout from "./layout/RootLayout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Thread />,
      },
      {
        path: "createThread",
        element: <ThreadAction />,
      },
      {
        path: "thread/:id",
        element: <ThreadDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
