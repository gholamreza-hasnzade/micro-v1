// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Button, Typography } from "@mui/material";

const Basket = styled(Box)`
    position: absolute;
    right: -23px;
    top: 40px;
    width: 350px;
    max-width: 350px;
    border-radius: 6px;
    background: #6b728e;

    color: #b4b7bd;
    z-index: 10;
    &:not(:last-child) {
        border-bottom: 1px solid #b4b7bd !important;
    }
`;

const RowBasket = styled(Box)`
    width: 100%;
    padding: 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    text-align: center;
    &:not(:last-child) {
        border-bottom: 1px solid #b4b7bd !important;
    }
`;

const RowTitle = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 10px;
`;

const Title = styled(Typography)`
    margin-botton: 0;
`;

const Price = styled(Typography)``;
const Total = styled(Typography)``;

const ActionBasket = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`;

const PlusButton = styled(Button)`
    background-color: ${({ theme }) => theme.PRIMARY};
    color: #fff;
    max-width: 35px;
    max-height: 35px;
    padding: 10px;
    border-radius: 50%;
    min-width: 0;
    margin-botton: 10px;
    &:hover {
        background-color: ${({ theme }) => theme.PRIMARY};
    }
`;
const MinesButton = styled(Button)`
    background-color: ${({ theme }) => theme.PRIMARY};
    color: #fff;
    max-width: 35px;
    max-height: 35px;
    padding: 10px;
    border-radius: 50%;
    min-width: 0;
    &:hover {
        background-color: ${({ theme }) => theme.PRIMARY};
    }
`;
export const BasketComponentStyle = {
    Basket,
    RowBasket,
    Title,
    Price,
    Total,
    ActionBasket,
    PlusButton,
    MinesButton,
    RowTitle
};
