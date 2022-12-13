// * import tools
import React from "react";
import * as I from "react-feather";

// * import style
import { MainDrawerComponentStyle as S } from "@components/common/sections/drawer/main-drawer/main-drawer.component.style";

export const MainDrawerComponent = () => {
    return (
        <S.Drawer isOpen={true} isOpenDrawerInMobile={true}>
            MainDrawer
        </S.Drawer>
    );
};
