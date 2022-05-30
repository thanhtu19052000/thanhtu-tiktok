import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import HeaderOnly from "../component/Layout/HeaderOnly";
import DefaultLayout from "../component/Layout/DefaulLayout";

export const publicRoutes = [
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/following", component: Following, layout: DefaultLayout },
  { path: "/profile", component: Profile, layout: HeaderOnly },
];
