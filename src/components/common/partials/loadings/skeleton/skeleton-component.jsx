// * import tools
import React from "react";

// * improt style
import { SkeletonComponentStyle as S } from "@components/common/partials/loadings/skeleton/skeleton-component.style";

export const SkeletonComponent = ({ variant, width, height }) => {
    return (
        <S.Skeleton
            animation="wave"
            variant={variant}
            width={width}
            height={height}
        />
    );
};
