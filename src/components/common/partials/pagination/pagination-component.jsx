// * import tools
import React from "react";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { PaginationComponentStyle as S } from "@components/common/partials/pagination/pagination-component.style";
export const PaginationComponent = () => {
    return <GS.FlexBoxCenterJc>
        <S.Pagination count={10} color="primary" variant="outlined"/>
    </GS.FlexBoxCenterJc>;
};
