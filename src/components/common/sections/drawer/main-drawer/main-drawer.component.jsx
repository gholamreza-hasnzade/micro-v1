// * import tools
import React from "react";
import * as I from "react-feather";

// * import style
import { MainDrawerComponentStyle as S } from "@components/common/sections/drawer/main-drawer/main-drawer.component.style";
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";

export const MainDrawerComponent = () => {
    const dispatch = useAppDispatch();
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const isOpenDrawerInMobile = useAppSelector(
        drawerReduxSelector.isOpenInMobile
    );
    return (
        <S.Drawer
            isopen={isOpenDrawer}
          //  isopendrawerinmobile={isOpenDrawerInMobile.toString()}
        >
            MainDrawer
           {/*  <button onClick={() => dispatch(openDrawerToggle())}>button</button> */}
        </S.Drawer>
    );
};
