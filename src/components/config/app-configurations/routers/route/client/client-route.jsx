import {
    ClientView,
    ClientAddView,
    PreviewClienView,
    ClientEditView,
} from "@components/views";

const ClientRoute = [
    {
        path: "/client",
        element: ClientView,
        exact: true,
        permissions: ["admin"],
    },
    {
        path: "/client/add",
        element: ClientAddView,
        exact: true,
        permissions: ["admin"],
    },
    {
        path: "/client/edit/:id",
        element: ClientEditView,
        exact: true,
    },
    {
        path: "/client/preview/:id",
        element: PreviewClienView,
        exact: true,
        permissions: ["admin"],
    },
];

export default ClientRoute;
