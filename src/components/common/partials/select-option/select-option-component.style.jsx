// * Import Tools
import styled from "@emotion/styled/macro";
import {
    Select as SelectMUI,
    InputLabel as InputLabelMUI,
    MenuItem as MenuItemMUI,
    FormControl as FormControlMUI,
} from "@mui/material";

const InputLabel = styled(InputLabelMUI)`
    color: ${({ theme }) => theme.WHITE};
`;

const Select = styled(SelectMUI)`
    width: 100%;
    &:hover fieldset {
        border-color: ${({ theme }) => theme.PRIMARY} !important;
    }
    & fieldset {
        border-color: ${({ theme }) => theme.PRIMARY};
    }
`;
const MenuItem = styled(MenuItemMUI)`
`;
const FormControl = styled(FormControlMUI)``;

export const SelectOptionComponentStyle = {
    InputLabel,
    Select,
    MenuItem,
    FormControl,
};
