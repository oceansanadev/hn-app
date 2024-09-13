import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ErrorPage,
  HomePage,
  AskStoriesPage,
  BestStoriesPage,
  JobStoriesPage,
  NewStoriesPage,
  ShowStoriesPage,
} from "../view";
import {
  DashboardLayout,
  CustomDialog,
  CustomSnackbar,
} from "../components/global";

const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <ErrorPage />,

      element: <DashboardLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/ask-stories",
          element: <AskStoriesPage />,
        },
        {
          path: "/new-stories",
          element: <NewStoriesPage />,
        },
        {
          path: "/best-stories",
          element: <BestStoriesPage />,
        },
        {
          path: "/job-stories",
          element: <JobStoriesPage />,
        },
        {
          path: "/show-stories",
          element: <ShowStoriesPage />,
        },
      ],
    },
  ],
  {
    basename: "/hn-app/",
  }
);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
      <CustomDialog />
      <CustomSnackbar />
    </>
  );
};

export default AppRouter;
