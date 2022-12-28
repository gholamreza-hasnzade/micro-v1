// * import tools
import React, { useRef, useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import ReactCountryFlag from "react-country-flag";

// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
//import { Basket } from "@components/common/segment";
import { Tooltip } from "@components/common/partials";

// * import hoooks
//import { useClickOutSide } from "@hooks";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";

export const MainHeaderComponent = () => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const dispatch = useAppDispatch();
    // const [isOpenBasek, setIsOpenBasek] = useState(false);
    //  const isOpen_basket = useRef(null);
    const { t, i18n } = useTranslation();

    /*     useClickOutSide(isOpen_basket, () => {
        setIsOpenBasek(false);
    }); */
    const handleLangUpdate = (e, lang) => {
        e.preventDefault();
        i18n.changeLanguage(lang);
      };
    
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
                        <S.RowActionHeader /* ref={isOpen_basket} */>
                            {/* {isOpenBasek && <Basket />} */}
                            <S.ActionFlag  onClick={(e) => handleLangUpdate(e, "en")}>
                                <Tooltip title="USA">
                                    <ReactCountryFlag
                                        countryCode="US"
                                        svg
                                        style={{
                                            width: "1.5em",
                                            height: "1.5em",
                                        }}
                                    />
                                </Tooltip>
                            </S.ActionFlag>
                            <S.ActionFlag>
                                <Tooltip title="Persian"  onClick={(e) => handleLangUpdate(e, "fa")}>
                                    <ReactCountryFlag
                                        countryCode="IR"
                                        svg
                                        style={{
                                            width: "1.5em",
                                            height: "1.5em",
                                        }}
                                    />
                                </Tooltip>
                            </S.ActionFlag>
                        </S.RowActionHeader>
                    </S.RowShoppingBag>
                </S.HeaderRowIcon>
            </GS.FlexCenterSB>
        </S.Header>
    );
};
