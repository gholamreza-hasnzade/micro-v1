// * import tools
import React from "react";

// * import components
import { MainHeaderComponent } from "@components/common/sections/header/main-header/main-header.component";
import { MainFooterComponent } from "@components/common/sections/footer/main-footer/main-footer.component";
import { MainDrawerComponent as MainDrawer } from "@components/common/sections/drawer/main-drawer/main-drawer.component";

// * import  style
import { MainLayoutStyle as S } from "@components/common/sections/layouts/main-layout/main-layout.component.style";

export const MainLayout = ({ children }) => {
    return (
        <S.Container>
            <MainDrawer />
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
