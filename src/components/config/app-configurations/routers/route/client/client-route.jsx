/* import { ClientView } from "@components/views";
 */
import { ClientView } from "@components/views/client-view/client-view";
const ClientRoute = [
    {
        path: "/client",
        element: <ClientView />,
        exact: true,
    },
];

export default ClientRoute;
