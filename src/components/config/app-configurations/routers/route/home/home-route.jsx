// * Import tools
import { Navigate } from "react-router-dom";

// * Import components
import { HomeView } from "@components/views";

const HomeRoute = [
    {
        path: "/",
        element: HomeView,
        exact: true,
    },
    {
        path: "/Home",
        element: HomeView,
        name: "Dashboard",
        exact: true,
    },
];

export default HomeRoute;
