import { lazy } from "react";

// * import Client View
const ClientView = lazy(() =>
    import("@components/views/client-view/client-view")
);
const ClientAddView = lazy(() =>
    import("@components/views/client-view/add/client-add-view")
);
const ClientEditView = lazy(() =>
    import("@components/views/client-view/edit/client-edit-view")
);
const PreviewClienView = lazy(() =>
    import("@components/views/client-view/preview/preview-client-view")
);
// * import Client View

// * import Home View
const HomeView = lazy(() => import("@components/views/home-view/home-view"));
const HomePartView = lazy(() =>
    import("@components/views/home-view/part/home-part-view")
);
// * import Home View

// * import Product View
const ProductView = lazy(() =>
    import("@components/views/product-view/product-view")
);
const ProductAddView = lazy(() =>
    import("@components/views/product-view/add/product-add-view")
);
const PreviewProductView = lazy(() =>
    import("@components/views/product-view/preview/preview-product-view")
);
const ProductEditView = lazy(() =>
    import("@components/views/product-view/edit/product-edit-view")
);
// * import Product View

export {
    ClientView,
    ClientAddView,
    ClientEditView,
    PreviewClienView,
    HomeView,
    HomePartView,
    ProductView,
    ProductAddView,
    PreviewProductView,
    ProductEditView,
};
