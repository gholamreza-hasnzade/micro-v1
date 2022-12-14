// * import tools
import React from "react";

// * import style
import { OutlineButtonComponentStyle as S } from "@components/common/partials/buttons/outline-button/outline-button.component.style";

export const OutlineButtonComponent = ({ children, onClick }) => {
    return <S.Button onClick={onClick}>{children}</S.Button>;
};
