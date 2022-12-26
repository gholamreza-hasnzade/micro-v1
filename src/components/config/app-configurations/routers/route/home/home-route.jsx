// * Import tools
import { Navigate } from "react-router-dom";

// * Import components
import { HomeView } from "@components/views";

const HomeRoute = [
    {
        path: "/",
        element: HomeView,
        name: "home",
        exact: true,
    },
  /*   {
        path: "/Home",
        element: HomeView,
        exact: true,
    }, */
];

export default HomeRoute;
