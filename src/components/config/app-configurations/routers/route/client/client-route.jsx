import { ClientView, ClientAddView, PreviewClienView } from "@components/views";



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
    {
        path: "/client/preview/:id",
        element: <PreviewClienView />,
        exact: true,
    },
];

export default ClientRoute;
