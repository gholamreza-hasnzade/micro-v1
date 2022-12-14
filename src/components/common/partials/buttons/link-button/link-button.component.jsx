// * impoprt tools
import React from "react";

//* import style
import { LinkButtonComponentStyle as S } from "@components/common/partials/buttons/link-button/link-button.component.style";
export const LinkButtonComponent = ({ children, href }) => {
    return <S.Button to={href}>{children}</S.Button>;
};
