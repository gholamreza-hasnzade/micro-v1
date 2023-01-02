// * import tools
import React from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Tooltip } from "@components/common/partials";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";

export const MainHeaderComponent = () => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const dispatch = useAppDispatch();
    
    const { t } = useTranslation();

   
    return (
        <S.Header component={"header"}>
            <GS.FlexCenterSB>
                <S.HeaderTitle> {t("online shoping holoo")} </S.HeaderTitle>
                <S.HeaderRowIcon>
                    <S.Icon onClick={() => dispatch(openDrawerToggle())}>
                        {isOpenDrawer ? <I.X /> : <I.AlignJustify />}
                    </S.Icon>

                    <S.RowShoppingBag>
                        <NavLink to={"/"}>
                            <Tooltip title={t("basket buy")}>
                                <S.ShoppingBag
                                />
                            </Tooltip>
                        </NavLink>
                    </S.RowShoppingBag>
                </S.HeaderRowIcon>
            </GS.FlexCenterSB>
        </S.Header>
    );
};
