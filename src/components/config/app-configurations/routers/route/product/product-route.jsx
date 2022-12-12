/* import { ProductView } from "@components/views"; */
import { ProductView } from "@components/views/product-view/product-view";

const ProductRoute = [
    {
        path: "/product",
        element: <ProductView />,
        exact: true,
    },
];

export default ProductRoute;
