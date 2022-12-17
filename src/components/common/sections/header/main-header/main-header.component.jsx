// * import tools
import React, { useRef, useState } from "react";

// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";
// * import components
import { Basket } from "@components/common/segment";

// * import hoooks
import { useClickOutSide } from "@hooks";
export const MainHeaderComponent = () => {
    const [isOpenBasek, setIsOpenBasek] = useState(false);
    const isOpen_basket = useRef(null);

    useClickOutSide(isOpen_basket, () => {
        setIsOpenBasek(false);
    });
    return (
        <S.Header component={"header"}>
            <GS.FlexCenterSB>
                <S.HeaderTitle>فروشگاه آنلاین هلو</S.HeaderTitle>
                <S.RowShoppingBag>
                    <S.ShoppingBag
                        onClick={() => {
                            setIsOpenBasek((prev) => !prev);
                        }}
                    />
                    <div ref={isOpen_basket}>{isOpenBasek && <Basket />}</div>
                </S.RowShoppingBag>
            </GS.FlexCenterSB>
        </S.Header>
    );
};
