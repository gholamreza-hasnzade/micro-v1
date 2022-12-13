// * import tools
import React from "react";

// * import style
import { MainDrawerComponentStyle as S } from "@components/common/sections/drawer/main-drawer/main-drawer.component.style";

// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * improt store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";

// * import constant
import { IMAGES } from "@constants/content";

export const MainDrawerComponent = () => {
    const dispatch = useAppDispatch();
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const isOpenDrawerInMobile = useAppSelector(
        drawerReduxSelector.isOpenInMobile
    );
    return (
        <S.Drawer
            isopen={isOpenDrawer}
            isopendrawerinmobile={isOpenDrawerInMobile}
        >
            <GS.FlexBoxDirColumn>
                <S.Logo>
                    <img alt="شرکت مهندسی نرم افزاری هلو" src={IMAGES.LOGO} />
                </S.Logo>
                <div>1</div>
            </GS.FlexBoxDirColumn>
        </S.Drawer>
    );
};

{
    /*  <button onClick={() => dispatch(openDrawerToggle())}>button</button> */
}
