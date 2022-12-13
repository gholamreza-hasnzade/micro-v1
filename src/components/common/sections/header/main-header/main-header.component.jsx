// * import tools
import React from "react";

// * import style
import { MainHeaderComponentStyle as S } from "@components/common/sections/header/main-header/main-header.component.style";
// * import global style
import { GlobalStyle as GS } from "@global/emotion/global-style";

export const MainHeaderComponent = () => {
    return (
        <S.Header component={"header"}>
            <GS.FlexCenterSB>
              <S.HeaderTitle>فروشگاه آنلاین هلو</S.HeaderTitle>
              <S.ShoppingBag />
            </GS.FlexCenterSB>
        </S.Header>
    );
};
