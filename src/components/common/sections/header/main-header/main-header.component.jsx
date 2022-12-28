// * import tools
import React, { useRef, useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Basket } from "@components/common/segment";
import { Tooltip } from "@components/common/partials";

// * import hoooks
import { useClickOutSide } from "@hooks";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";

 const MainHeaderComponent = () => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const dispatch = useAppDispatch();
    const [isOpenBasek, setIsOpenBasek] = useState(false);
    const isOpen_basket = useRef(null);
    const { t } = useTranslation();

    useClickOutSide(isOpen_basket, () => {
        setIsOpenBasek(false);
    });
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
                                /*  onClick={() => {
                                    setIsOpenBasek((prev) => !prev);
                                }} */
                                />
                            </Tooltip>
                        </NavLink>

                        <div ref={isOpen_basket}>
                            {isOpenBasek && <Basket />}
                        </div>
                    </S.RowShoppingBag>
                </S.HeaderRowIcon>
            </GS.FlexCenterSB>
        </S.Header>
    );
};
export default MainHeaderComponent