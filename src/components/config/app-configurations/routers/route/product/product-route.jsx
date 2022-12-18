// * Import components
import { ProductView, ProductAddView, PreviewView } from "@components/views";

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
        element: <PreviewView />,
        exact: true,
    },
];

export default ProductRoute;
