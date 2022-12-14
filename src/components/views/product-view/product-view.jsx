// * import tools
import React from "react";

// * import style
import { ProductViewStyle as S } from "@components/views/product-view/product-view.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { LinkButton } from "@components/common/partials/buttons";
export const ProductView = () => {
    return (
        <S.Product>
            <GS.FlexBoxDirColumn>
                <GS.FlexCenterSB>
                    <input type={"text"} />
                    <LinkButton href={"/product/add"}>محصول جدید</LinkButton>
                </GS.FlexCenterSB>
            </GS.FlexBoxDirColumn>
        </S.Product>
    );
};
