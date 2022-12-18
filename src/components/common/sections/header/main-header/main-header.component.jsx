// * import tools
import React, { useRef, useState } from "react";
import * as I from "react-feather";
// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Basket } from "@components/common/segment";

// * import hoooks
import { useClickOutSide } from "@hooks";

// * import store
import { useAppDispatch, useAppSelector } from "@redux/base/hook-redux";
import { drawerReduxSelector } from "@redux/slices/drawer/drawer-redux-selector";
import { openDrawerToggle } from "@redux/slices/drawer/drawer-redux-slice";
import { Tooltip } from "@components/common/partials";

export const MainHeaderComponent = () => {
    const isOpenDrawer = useAppSelector(drawerReduxSelector.isOpen);
    const dispatch = useAppDispatch();
    const [isOpenBasek, setIsOpenBasek] = useState(false);
    const isOpen_basket = useRef(null);

    useClickOutSide(isOpen_basket, () => {
        setIsOpenBasek(false);
    });
    return (
        <S.Header component={"header"}>
            <GS.FlexCenterSB>
                <S.HeaderTitle>فروشگاه آنلاین هلو</S.HeaderTitle>
                <S.HeaderRowIcon>
                    <S.Icon onClick={() => dispatch(openDrawerToggle())}>
                        {isOpenDrawer ? <I.X /> : <I.AlignJustify />}
                    </S.Icon>

                    <S.RowShoppingBag>
                        <Tooltip title="سبد خرید">
                            <S.ShoppingBag
                                onClick={() => {
                                    setIsOpenBasek((prev) => !prev);
                                }}
                            />
                        </Tooltip>

                        <div ref={isOpen_basket}>
                            {isOpenBasek && <Basket />}
                        </div>
                    </S.RowShoppingBag>
                </S.HeaderRowIcon>
            </GS.FlexCenterSB>
        </S.Header>
    );
};
