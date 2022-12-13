import { ProductView } from "@components/views/product-view/product-view";
//import {MainLayout} from "@components/common/sections/layouts/main-layout/main-layout.component"
const ProductRoute = [
    {
        path: "/product",
        element: <ProductView />,
        exact: true,
    },
];

export default ProductRoute;
