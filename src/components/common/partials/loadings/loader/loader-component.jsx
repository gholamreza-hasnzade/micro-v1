// * import tools
import React from "react";

// * Import style
import { LoaderComponentStyle as S } from "@components/common/partials/loadings/loader/loader-component.style";

export const LoaderComponent = () => {
    return (
        <S.Conatiner>
            <S.Loader></S.Loader>
        </S.Conatiner>
    );
};