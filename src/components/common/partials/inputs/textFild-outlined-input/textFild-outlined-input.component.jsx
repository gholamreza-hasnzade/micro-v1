// * import tools
import React from "react";
import { useField } from "formik";

// * import style
import { TextFildOutlinedInputComponentStyle as S } from "@components/common/partials/inputs/textFild-outlined-input/textFild-outlined-input.component.style";
// * import components
import { ErrorMessage } from "@components/common/partials";
export const TextFildOutlinedInputComponent = ({
    label,
    multiline,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <>
            <S.TextField
                type={field.type}
                name={field.name}
                variant="outlined"
                label={label}
                {...props}
                {...field}
                multiline={multiline}
            />
            {meta.touched && meta.error && <ErrorMessage>{meta.error}</ErrorMessage>}
        </>
    );
};
