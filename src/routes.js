import Trending from "layouts/trending/Trending";
import Movies from "layouts/movies/Movies";
import TvSeries from "layouts/tvseries/TvSeries";
import SignIn from "layouts/authentication/sign-in";
import { Role } from "components/models/role";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Trending",
    key: "trending",
    icon: <Icon fontSize="small">whatshot</Icon>,
    route: "/trending/",
    component: <Trending />,
    roles: [Role.Admin],
  },
  {
    type: "collapse",
    name: "Movies",
    key: "movies",
    icon: <Icon fontSize="small">movie</Icon>,
    route: "/movies",
    component: <Movies />,
    roles: [Role.Admin, Role.UserWhoCanOnlySeeMovie],
  },
  {
    type: "collapse",
    name: "TV Series",
    key: "tv-series",
    icon: <Icon fontSize="small">live_tv</Icon>,
    route: `/tv-series/`,
    component: <TvSeries />,
    roles: [Role.Admin, Role.UserWhoCanOnlySeeTvSeries],
  },
  {
    type: "collapse",
    name: "Log out",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
