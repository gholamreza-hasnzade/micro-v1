import { HomeView } from "@components/views/home-view/home-view";
import { Navigate } from "react-router-dom";

const HomeRoute = [
    {
        path: "/",
        element: <Navigate to={"/home"} />,
        exact: true,
    },
    {
        path: "/home",
        element: <HomeView />,
        exact: true,
    },
];

export default HomeRoute;
