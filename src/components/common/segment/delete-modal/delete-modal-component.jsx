// * import tools
import React from "react";
import * as I from "react-feather";
// * import style
import { DeleteModalComponentStyle as S } from "@components/common/segment/delete-modal/delete-modal-component.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { SubmitButton, OutlineButton } from "@components/common/partials";

export const DeleteModalComponent = () => {
    return (
        <>
        <S.Overly />
            <S.RowDeleteModal>
                <S.RowImage>
                    <I.AlertTriangle />
                </S.RowImage>
                <S.Title>آیا از حذف این فیلد اطمینان دارید ?</S.Title>
                <GS.FlexCenterSB>
                    <S.RowButton>
                        <SubmitButton>حذف</SubmitButton>
                    </S.RowButton>
                    <S.RowButton>
                        <OutlineButton>لغو</OutlineButton>
                    </S.RowButton>
                </GS.FlexCenterSB>
            </S.RowDeleteModal>
        </>
    );
};
