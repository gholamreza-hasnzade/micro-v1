// * import tools
import React from "react";

// * import style
import { GlobalStyle as GS } from "@global/emotion/global-style";
import { PaginationComponentStyle as S } from "@components/common/partials/pagination/pagination-component.style";
export const PaginationComponent = ({
    data,
    currentPage,
    setCurrentPageNo,
}) => {
    return (
        <>
            {data?.total === null || data?.total <= 10 ? null : (
                <GS.FlexBoxCenterJc>
                    <S.Pagination
                        page={currentPage}
                        onChange={setCurrentPageNo}
                        count={data?.last_page}
                        color="primary"
                        variant="outlined"
                        siblingCount={0}
                    />
                </GS.FlexBoxCenterJc>
            )}
        </>
    );
};
