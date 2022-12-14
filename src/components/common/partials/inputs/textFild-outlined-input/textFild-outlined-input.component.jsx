// * import tools
import React from "react";

// * import style
import { TextFildOutlinedInputComponentStyle as S } from "@components/common/partials/inputs/textFild-outlined-input/textFild-outlined-input.component.style";

export const TextFildOutlinedInputComponent = ({ type, onChange, label,multiline }) => {
    return (
        <S.TextField
            type={type}
            onChange={onChange}
            variant="outlined"
            label={label}
            multiline={multiline}
        />
    );
};
