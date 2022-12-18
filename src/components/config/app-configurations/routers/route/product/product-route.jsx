// * Import components
import { ProductView, ProductAddView, PreviewProductView } from "@components/views";

const ProductRoute = [
    {
        path: "/product",
        element: <ProductView />,
        exact: true,
    },
    {
        path: "/product/add",
        element: <ProductAddView />,
        exact: true,
    },
    {
        path: "product/preview/:id",
        element: <PreviewProductView />,
        exact: true,
    },
];

export default ProductRoute;
