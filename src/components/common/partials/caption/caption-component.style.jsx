// * Import Tools
import styled from "@emotion/styled/macro";
import { Typography as TypographyMUI } from "@mui/material";

const Typography = styled(TypographyMUI)`
    color: ${({ theme }) => theme.PRIMARY}; ;
`;

export const CaptionComponentStyle = {
    Typography,
};
