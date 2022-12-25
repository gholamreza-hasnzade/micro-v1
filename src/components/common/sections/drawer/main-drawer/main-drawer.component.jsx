// * import tools
import React from "react";
import { useTranslation } from "react-i18next";

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
import { Tooltip } from "@components/common/partials";

export const MainDrawerComponent = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const isOpenDrawerInMobile = useAppSelector(
        drawerReduxSelector.isOpenInMobile
    );
    return (
        <S.Drawer
            className={`${isOpenDrawer ? "" : "isOpen"}`}
            //  isopen={isOpenDrawer}
            //isopendrawerinmobile={isOpenDrawerInMobile}
        >
            <GS.FlexBoxDirColumn>
                <S.RowLogo>
                    <S.RowIsOpen to={"/"}>
                        {(isOpenDrawer || isOpenDrawerInMobile) && (
                            <S.Logo>
                                <img
                                    alt={t("compony software holoo")}
                                    src={IMAGES.LOGO}
                                />
                            </S.Logo>
                        )}
                    </S.RowIsOpen>
                    <S.RowIcon onClick={() => dispatch(openDrawerToggle())}>
                        {isOpenDrawer ? <I.ArrowRight /> : <I.ArrowLeft />}
                    </S.RowIcon>
                </S.RowLogo>

                <S.DraweRow>
                    {navigation?.map((itm) => (
                        <S.NavLink to={itm.url} key={itm.id}>
                            {({ isActive }) => (
                                <Tooltip title={t(itm.title)} placement="right">
                                    <S.RowDisplay
                                        active={isActive ? "active" : undefined}
                                    >
                                        <S.Icon>{itm.icon}</S.Icon>
                                        {isOpenDrawer ? (
                                            <S.Display>
                                                {" "}
                                                {t(itm.title)}{" "}
                                            </S.Display>
                                        ) : null}
                                    </S.RowDisplay>
                                </Tooltip>
                            )}
                        </S.NavLink>
                    ))}
                </S.DraweRow>
            </GS.FlexBoxDirColumn>
        </S.Drawer>
    );
};
