import { HomeView } from "@components/views/home-view/home-view";

/* import { HomeView } from "@components/views";
 */

const HomeRoute = [
    {
        path: "/",
        element: <HomeView />,
        exact: true,
    },
];

export default HomeRoute;
