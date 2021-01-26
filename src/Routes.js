import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import Homepage from "./Views/Homepage";

import FilterPage from "./Views/FilterPage";
import SearchPlayer from "./Views/SearchPlayer";
import BestPlayers from "./Views/BestPlayer";
import PlayerCompare from "./Views/PlayerCompare";
import PlayerDetail from "./Views/PlayerDetail";


var routes = [
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    visible: false,
    children: [],
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08",
    component: Register,
    layout: "/auth",
    visible: false,
    children: [],
  },
  {
    path: "/homepage",
    name: "Homepage",
    icon: "ni ni-key-25 text-info",
    component: Homepage,
    layout: "/admin",
    visible: true,
    children: [],
  },
  {
    path: "/searchplayer",
    name: "Search Player",
    icon: "ni ni-key-25 text-info",
    component: SearchPlayer,
    layout: "/admin",
    visible: true,
    children: [],
  },
  {
    path: "/filterpage",
    name: "Filter Page",
    icon: "ni ni-key-25 text-info",
    component: FilterPage,
    layout: "/admin",
    visible: true,
    children: [],
  },
  {
    path: "/bestplayers",
    name: "Best Players",
    icon: "ni ni-key-25 text-info",
    component: BestPlayers,
    layout: "/admin",
    visible: true,
    children: [],
  },
  {
    path: "/playercompare",
    name: "Player Compare",
    icon: "ni ni-key-25 text-info",
    component: PlayerCompare,
    layout: "/admin",
    visible: true,
    children: [],
  },
  {
    path: "/playerdetail",
    name: "Player Detail",
    icon: "ni ni-key-25 text-info",
    component: PlayerDetail,
    layout: "/admin",
    visible: true,
    children: [],
  }
];
export default routes;
