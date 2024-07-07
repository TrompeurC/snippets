import Config from "@renderer/pages/Config";
import Category from "@renderer/pages/Config/Category";
import ContentList from "@renderer/pages/Config/ContentList";
import Content from "@renderer/pages/Config/Content";
import Home from "@renderer/pages/Home";
import {
  RouteObject,
  createHashRouter,
} from "react-router-dom";
import CategoryLoader from "@renderer/pages/Config/Category/CategoryLoader";
import ContentListLoader from "@renderer/pages/Config/ContentList/ContentListLoader";
import ContentLoader from "@renderer/pages/Config/Content/ContentLoader";
import ContentListAction from "@renderer/pages/Config/ContentList/ContentListAction";
import ContentAction from "@renderer/pages/Config/Content/ContentAction";
import CategoryAction from "@renderer/pages/Config/Category/CategoryAction";

const router: RouteObject[] = createHashRouter([
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
        action: CategoryAction,
        children: [
          {
            path: 'contentList/:cid',
            element: <ContentList />,
            loader: ContentListLoader,
            action: ContentListAction,
            children: [
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
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
