// * import tools
import React from "react";
// * import Icons
import * as I from "react-feather";

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

// * import navigation
import navigation from "@components/config/app-configurations/routers/navigation";

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
                <S.RowIsOpen to={"/"}>
                <S.Logo>
                    <img alt="شرکت مهندسی نرم افزاری هلو" src={IMAGES.LOGO} />
                </S.Logo>
                </S.RowIsOpen>
               
                <S.DraweRow>
                    {navigation?.map((itm) => (
                        <S.NavLink to={itm.url} title={itm.title} key={itm.id}>
                            {({ isActive }) => (
                                <S.RowDisplay
                                    active={isActive ? "active" : undefined}
                                >
                                    <S.Icon>{itm.icon}</S.Icon>
                                    {isOpenDrawer ? (
                                        <S.Display> {itm.title} </S.Display>
                                    ) : null}
                                </S.RowDisplay>
                            )}
                        </S.NavLink>
                    ))}
                </S.DraweRow>
            </GS.FlexBoxDirColumn>
        </S.Drawer>
    );
};

{
    /*  <button onClick={() => dispatch(openDrawerToggle())}>button</button> */
}
