// * import tools
import React from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";

// * import style
import { DeleteModalComponentStyle as S } from "@components/common/segment/delete-modal/delete-modal-component.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { SubmitButton, OutlineButton } from "@components/common/partials";
import { useAppDispatch } from "@redux/base/hook-redux";

export const DeleteModalComponent = ({
    isOpen,
    onClick,
    setIsOpen,
    onDelete,
}) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation();
    const handleOnDelete = () => {
        dispatch(onDelete());
        setIsOpen(!isOpen);
    };
    return (
        <>
            <S.Overly isopen={isOpen} />
            <S.RowDeleteModal isopen={isOpen}>
                <S.RowImage>
                    <I.AlertTriangle />
                </S.RowImage>
                <S.Title>{t("Are you sure to delete this field ?")}</S.Title>
                <GS.FlexCenterSB>
                    <S.RowButton>
                        <SubmitButton onClick={handleOnDelete}>
                            {t("delete")}
                        </SubmitButton>
                    </S.RowButton>
                    <S.RowButton>
                        <OutlineButton onClick={onClick}>
                            {t("cansel")}
                        </OutlineButton>
                    </S.RowButton>
                </GS.FlexCenterSB>
            </S.RowDeleteModal>
        </>
    );
};
