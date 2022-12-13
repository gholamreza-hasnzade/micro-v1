// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography } from "@mui/material";
import { ShoppingBag as ShoppingBagRF } from "react-feather";

const Header = styled(Box)`
    width: 100%;
    padding: 25px;
    border-radius: 6px;
    background: #404258;
    display: flex;
    aligin-item: center;
    color: ${({ theme }) => theme.WHITE};
`;

const HeaderTitle = styled(Typography)`
    color: ${({ theme }) => theme.PRIMARY};
    marigin-bottom: 0;
    font-weight: 700;
`
const ShoppingBag = styled(ShoppingBagRF)`
    cursor: pointer;
    color:  ${({ theme }) => theme.PRIMARY};;
`

export const MainHeaderComponentStyle = {
    Header,
    HeaderTitle,
    ShoppingBag
};
