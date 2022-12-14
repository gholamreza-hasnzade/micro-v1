// * Import components
import { ProductView, ProductAddView } from "@components/views";

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
];

export default ProductRoute;
