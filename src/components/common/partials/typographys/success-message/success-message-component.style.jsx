// * Import Tools
import styled from "@emotion/styled/macro";
import { Typography as TypographyMUI } from "@mui/material";

const Typography = styled(TypographyMUI)`
    font-size: 11px;
    color: ${({ theme }) => theme.PRIMARY};
`;

export const SuccessMessageComponentStyle = {
    Typography,
};
