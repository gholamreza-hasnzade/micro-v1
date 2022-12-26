// * import tools
import React from "react";

// * Import style
import { LoaderComponentStyle as S } from "@components/common/partials/loadings/loader/loader-component.style";

const LoaderComponent = () => {
    return (
        <S.Conatiner>
            <S.Loader></S.Loader>
        </S.Conatiner>
    );
};

export default LoaderComponent;
