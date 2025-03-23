import HomeLayout from "../Layouts/HomeLayout";
import { createBrowserRouter } from "react-router-dom";

const baseRouter = [
  {
    path: "/",
    element: <HomeLayout />,
  },
];

const router = createBrowserRouter([...baseRouter]);
export default router;
