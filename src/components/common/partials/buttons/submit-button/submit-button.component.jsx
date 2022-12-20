// * import tools
import React from "react";

// * import style
import { SubmitButtonComponentStyle as S } from "@components/common/partials/buttons/submit-button/submit-button.component.style";

export const SubmitButtonComponent = ({ children, ...props }) => {
    return <S.Button  {...props} type="submit">{children}</S.Button>;
};
