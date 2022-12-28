// * import tools
import React from "react";

// * Import style
import { SuccessMessageComponentStyle as S } from "@components/common/partials/typographys/success-message/success-message-component.style";

export const SuccessMessageComponent = ({ children }) => {
    return <S.Typography>{children}</S.Typography>;
};
