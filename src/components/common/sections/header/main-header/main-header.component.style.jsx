// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography } from "@mui/material";
import { ShoppingBag as ShoppingBagRF } from "react-feather";

const Header = styled(Box)`
    width: 100%;
    padding: 25px;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
    display: flex;
    aligin-item: center;
    color: ${({ theme }) => theme.WHITE};
    box-shadow: 0 4px 24px #22292f3d;
`;

const HeaderTitle = styled(Typography)`
    color: ${({ theme }) => theme.PRIMARY};
    margin-bottom: 0;
    font-weight: 700;
`;
const ShoppingBag = styled(ShoppingBagRF)`
    cursor: pointer;
    color: ${({ theme }) => theme.PRIMARY}; ;
`;

const RowShoppingBag = styled(Box)`
    position: relative;
`;

export const MainHeaderComponentStyle = {
    Header,
    HeaderTitle,
    ShoppingBag,
    RowShoppingBag,
};
