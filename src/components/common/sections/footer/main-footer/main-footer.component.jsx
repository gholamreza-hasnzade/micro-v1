// * import tools
import React from "react";
import { useTranslation } from "react-i18next";

// * import style
import { MainFooterStyle as S } from "@components/common/sections/footer/main-footer/main-footer.component.style";

export const MainFooterComponent = () => {
    const { t } = useTranslation();
    return (
        <S.Footer component={"footer"}>
            <S.FooterTitle> {t("copy right")} </S.FooterTitle>
        </S.Footer>
    );
};