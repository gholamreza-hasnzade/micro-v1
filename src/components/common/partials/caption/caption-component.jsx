// * import tools
import React from "react";

// * import style
import { CaptionComponentStyle as S } from "@components/common/partials/caption/caption-component.style";
import { GlobalStyle as GS } from "@global/emotion/global-style";
export const CaptionComponent = ({ children }) => {
    return <S.Typography>{children}</S.Typography>;
};
