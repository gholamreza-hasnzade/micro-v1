// * import tools
import React from "react";

// * import components
import { MainOverlay } from "@components/common/partials";
import {
    MainHeader,
    MainFooter,
    MainDrawer,
    MainSetting,
} from "@components/common/sections";
// * import  style
import { MainLayoutStyle as S } from "@components/common/sections/layouts/main-layout/main-layout.component.style";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";

export const MainLayoutComponent = ({ children }) => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);

    const dispatch = useAppDispatch();
    return (
        <S.Container>
            <MainSetting />
            <MainDrawer />
            <MainOverlay
                onClick={() => dispatch(openDrawerToggle())}
                isOpenDrawer={isOpenDrawer}
            />
            <S.MainLayout>
                <S.Content>
                    <MainHeader />
                    <S.Main>{children}</S.Main>
                    <MainFooter />
                </S.Content>
            </S.MainLayout>
        </S.Container>
    );
};
