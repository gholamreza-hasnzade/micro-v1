// * Import Tools
import styled from "@emotion/styled/macro";
import { TextField as TextFieldMUI } from "@mui/material";

const TextField = styled(TextFieldMUI)`
    & .MuiFormLabel-root {
        & label {
            color: rgb(223 166 18 / 59%);
        }
    }
    & .MuiOutlinedInput-root {
        & fieldset {
            border-color: rgb(223 166 18 / 59%);
        }
        &:hover fieldset {
            border-color: rgb(223 166 18 / 59%);
        }
    }
`;

export const TextFildOutlinedInputComponentStyle = {
    TextField,
};
