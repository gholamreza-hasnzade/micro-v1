// * Import Tools
import styled from "@emotion/styled/macro";
import { TextField as TextFieldMUI } from "@mui/material";

const TextField = styled(TextFieldMUI)`
    
    & .MuiInputLabel-root {
        color: ${({ theme }) => theme.WHITE};
    }
    & .MuiOutlinedInput-root {
        color: ${({ theme }) => theme.PRIMARY} !important;
        & fieldset {
            border-color: ${({ theme }) => theme.PRIMARY};
        }
        &:hover fieldset {
            border-color: ${({ theme }) => theme.PRIMARY};
        }
    }
`;
export const TextFildOutlinedInputComponentStyle = {
    TextField,
};
