import Config from "@renderer/pages/Config";
import Category from "@renderer/pages/Config/Category";
import ContentList from "@renderer/pages/Config/ContentList";
import Content from "@renderer/pages/Config/Content";
import Home from "@renderer/pages/Home";
import {
  createHashRouter,
} from "react-router-dom";
import CategoryLoader from "@renderer/pages/Config/Category/CategoryLoader";
import ContentListLoader from "@renderer/pages/Config/ContentList/ContentListLoader";
import ContentLoader from "@renderer/pages/Config/Content/ContentLoader";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />

  },
  {
    path: '/config',
    element: <Config />,
    children: [
      {
        path: 'category',
        element: <Category />,
        loader: CategoryLoader,
        children: [
          {
            path: 'contentList/:id',
            element: <ContentList />,
            loader: ContentListLoader,
            children: [
              {
                path: 'content/:id',
                loader: ContentLoader,
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
]);

export default router
