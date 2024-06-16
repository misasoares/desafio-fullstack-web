import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
