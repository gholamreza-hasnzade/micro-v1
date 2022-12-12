import { lazy } from "react";

// * import views
const ClientView = lazy(() =>
    import("@components/views/client-view/client-view")
);
const HomeView = lazy(() => import("@components/views/home-view/home-view"));
const ProductView = lazy(() =>
    import("@components/views/product-view/product-view")
);
export { ClientView, HomeView, ProductView };
