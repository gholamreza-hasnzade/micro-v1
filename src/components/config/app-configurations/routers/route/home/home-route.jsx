// * Import tools
import { Navigate } from "react-router-dom";

// * Import components
import { HomeView } from "@components/views";

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
