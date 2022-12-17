// * import tools
import React from "react";
import * as I from "react-feather";
// * import style
import { BasketComponentStyle as S } from "@components/common/segment/basket/basket-component.style";

export const BasketComponent = () => {
    return (
        <S.Basket>
            <S.RowBasket>
                <S.Title>کالای1</S.Title>
                <S.Price> قیمت کل : 2000 * 1 </S.Price>
                <S.ActionBasket>
                    <S.PlusButton>
                        <I.Plus />
                    </S.PlusButton>
                    <S.MinesButton>
                        <I.Minus />
                    </S.MinesButton>
                </S.ActionBasket>
            </S.RowBasket>
        </S.Basket>
    );
};
