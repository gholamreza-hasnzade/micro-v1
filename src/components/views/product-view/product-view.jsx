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
                <GS.FlexCenterEnd>
                    <LinkButton href={"/product/add"}>محصول جدید</LinkButton>
                </GS.FlexCenterEnd>
                <div>1</div>
            </GS.FlexBoxDirColumn>
        </S.Product>
    );
};
