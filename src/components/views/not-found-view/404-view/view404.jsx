// * Import tools
import React from "react";
import { useTranslation } from "react-i18next";

// * Import Style
import { View404Style as S } from "@components/views/not-found-view/404-view/view404.style";
// * import constant
import { IMAGES } from "@constants/content";

export const View404 = () => {
    const { t } = useTranslation();

    return (
        <S.Container>
            <S.Row>
                <S.Wapper>
                    <img
                        alt={t("not found page 404")}
                        src={IMAGES.Page404}
                        className="active"
                    />
                </S.Wapper>
            </S.Row>
        </S.Container>
    );
};
