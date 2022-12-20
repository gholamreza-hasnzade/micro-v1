// * import tools
import React from "react";

// * import style
import { ErrorMessageComponentStyle as S } from "@components/common/partials/typographys/error-message/error-message-component.style";
export const ErrorMessageComponent = ({ children }) => {
    return <S.Typography>{children}</S.Typography>;
};
