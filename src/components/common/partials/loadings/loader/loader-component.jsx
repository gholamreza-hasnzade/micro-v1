// * import tools
import React from "react";
import { useTranslation } from "react-i18next";

// * Import style
import { LoaderComponentStyle as S } from "@components/common/partials/loadings/loader/loader-component.style";

// * import components
import { SuccessMessage } from "@components/common/partials";
export const LoaderComponent = () => {
    const { t } = useTranslation();

    return (
        <S.Conatiner>
            <S.Loader />
            <SuccessMessage>{t("please wait...")}</SuccessMessage>
        </S.Conatiner>
    );
};
