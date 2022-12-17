// * Import Tools
import styled from "@emotion/styled/macro";
import { Typography as TypographyMUI } from "@mui/material";

const Typography = styled(TypographyMUI)`
    color: ${({ theme }) => theme.PRIMARY}; 
    font-weight: 800;
    font-size: 2rem;
`;

export const CaptionComponentStyle = {
    Typography,
};
