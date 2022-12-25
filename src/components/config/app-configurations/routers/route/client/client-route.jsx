import { ClientAddView, ClientEditView, ClientView, PreviewClienView } from "@components/views";

const ClientRoute = [
    {
        path: "/client",
        element: ClientView,
        exact: true,
        permissions: ["super-admin"],
    },
    {
        path: "/client/add",
        element: ClientAddView,
        exact: true,
        permissions: ["super-admin"],
    },
    {
        path: "/client/edit/:id",
        element: ClientEditView,
        exact: true,
        permissions: ["super-admin"],
    },
    {
        path: "/client/preview/:id",
        element: PreviewClienView,
        exact: true,
        permissions: ["super-admin"],
    },
];

export default ClientRoute;
