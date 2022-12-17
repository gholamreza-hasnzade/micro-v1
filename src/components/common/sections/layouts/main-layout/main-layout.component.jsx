// * import tools
import React from "react";

// * import components
import { MainHeaderComponent } from "@components/common/sections/header/main-header/main-header.component";
import { MainFooterComponent } from "@components/common/sections/footer/main-footer/main-footer.component";
import { MainDrawerComponent as MainDrawer } from "@components/common/sections/drawer/main-drawer/main-drawer.component";
import { MainOverlay } from "@components/common/partials";

// * import  style
import { MainLayoutStyle as S } from "@components/common/sections/layouts/main-layout/main-layout.component.style";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";

export const MainLayout = ({ children }) => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const dispatch = useAppDispatch();
    return (
        <S.Container>
            <MainDrawer />
            <MainOverlay onClick={() => dispatch(openDrawerToggle())} isOpenDrawer={isOpenDrawer}/>
            <S.MainLayout>
                <S.Content>
                    <MainHeaderComponent />
                    <S.Main>{children}</S.Main>
                    <MainFooterComponent />
                </S.Content>
            </S.MainLayout>
        </S.Container>
    );
};
