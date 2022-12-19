// * import tools
import React from "react";

// * import style
import { SubmitButtonComponentStyle as S } from "@components/common/partials/buttons/submit-button/submit-button.component.style";

export const SubmitButtonComponent = ({ children, onClick }) => {
    return <S.Button onClick={onClick} type="submit">{children}</S.Button>;
};
