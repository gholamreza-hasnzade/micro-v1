// * import tools
import React from "react";
import { useField } from "formik";

//* import style
import { SelectOptionComponentStyle as S } from "@components/common/partials/select-option/select-option-component.style";

// * import components
import { ErrorMessage } from "@components/common/partials";

export const SelectOptionComponent = ({ id, label, children, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <S.FormControl fullWidth>
                <S.InputLabel id={id}>{label}</S.InputLabel>
                <S.Select
                    labelId={id}
                    id={id}
                    label={label}
                    {...props}
                    {...field}
                >
                    {children}
                </S.Select>
            </S.FormControl>
            {meta?.touched && meta?.error && (
                <ErrorMessage>{meta?.error}</ErrorMessage>
            )}
        </>
    );
};
