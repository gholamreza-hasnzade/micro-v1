import { ClientView, ClientAddView } from "@components/views";



const ClientRoute = [
    {
        path: "/client",
        element: <ClientView />,
        exact: true,
    },
    {
        path: "/client/add",
        element: <ClientAddView />,
        exact: true,
    },
];

export default ClientRoute;
