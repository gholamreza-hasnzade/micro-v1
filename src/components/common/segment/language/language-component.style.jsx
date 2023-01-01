// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography as TypographyMUI } from "@mui/material";

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const Row = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;
const RowAction = styled(Box)`
    display: flex;
    aligin-item: center;
    gap: 8px;
`;

const ActionFlag = styled(Box)`
    cursor: pointer;
`;
const Typography = styled(TypographyMUI)`
    margin-bottom: 10px;
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 14px;
`;

export const LanguageComponentStyle = {
    RowAction,
    ActionFlag,
    Container,
    Row,
    Typography,
};
