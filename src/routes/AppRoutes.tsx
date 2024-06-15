import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home</h1>,
  },

  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

const AppRoutes: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
