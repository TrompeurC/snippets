import Config from "@renderer/pages/Config/Config";
import Home from "@renderer/pages/Home/Home";
import {
  createHashRouter,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: '/config',
    element: <Config />
  }
]);

export default router
