import { RouterProvider } from "react-router-dom";
import router from "./routers";

const App = () => {
  return (
    <div className="w-full h-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
