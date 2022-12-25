import { lazy } from "react";

// * import Client View
/* export { ClientView } from "@components/views/client-view/client-view";
export { ClientAddView } from "@components/views/client-view/add/client-add-view";
export { ClientEditView } from "@components/views/client-view/edit/client-edit-view";
export { PreviewClienView } from "@components/views/client-view/preview/preview-client-view"; */

/* const { ClientView } = lazy(() =>
    import("@components/views/client-view/client-view")
);
const { ClientAddView } = lazy(() =>
    import("@components/views/client-view/add/client-add-view")
);
const ClientEditView = lazy(() =>
    import("@components/views/client-view/edit/client-edit-view")
);
const { PreviewClienView } = lazy(() =>
    import("@components/views/client-view/preview/preview-client-view")
);

export { ClientView, ClientAddView, ClientEditView, PreviewClienView }; */
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
export { ClientView, ClientAddView, ClientEditView, PreviewClienView };
// * import Client View

// * import Home View
export { HomeView } from "@components/views/home-view/home-view";
export { HomePartView } from "@components/views/home-view/part/home-part-view";
// * import Home View

// * import Product View
export { ProductView } from "@components/views/product-view/product-view";
export { ProductAddView } from "@components/views/product-view/add/product-add-view";
export { PreviewProductView } from "@components/views/product-view/preview/preview-product-view";
export { ProductEditView } from "@components/views/product-view/edit/product-edit-view";
// * import Product View
