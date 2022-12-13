// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography } from "@mui/material";

const Footer = styled(Box)`
    width: 100%;
    padding: 25px;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
  
`;

const FooterTitle = styled(Typography)`
    text-align: center;
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 12px;
    aligin-item: center;
    width: 100%;
`;

export const MainFooterStyle = {
    Footer,
    FooterTitle,
};
