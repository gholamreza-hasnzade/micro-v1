import { lazy } from "react";

// *  export sections
/* export { MainDrawerComponent as MainDrawer } from "@components/common/sections/drawer/main-drawer/main-drawer.component";
export { MainFooterComponent as MainFooter } from "@components/common/sections/footer/main-footer/main-footer.component";
export { MainHeaderComponent as MainHeader } from "@components/common/sections/header/main-header/main-header.component";
export { MainLayoutComponent as MainLayout } from "@components/common/sections/layouts/main-layout/main-layout.component";
 */

const MainDrawerComponent = lazy(() =>
    import(
        "@components/common/sections/drawer/main-drawer/main-drawer.component"
    )
);
const MainFooterComponent = lazy(() =>
    import(
        "@components/common/sections/footer/main-footer/main-footer.component"
    )
);
const MainHeaderComponent = lazy(() =>
    import(
        "@components/common/sections/header/main-header/main-header.component"
    )
);

const MainLayoutComponent = lazy(() =>
    import(
        "@components/common/sections/layouts/main-layout/main-layout.component"
    )
);

export {
    MainDrawerComponent as MainDrawer,
    MainFooterComponent as MainFooter,
    MainHeaderComponent as MainHeader,
    MainLayoutComponent as MainLayout,
};
