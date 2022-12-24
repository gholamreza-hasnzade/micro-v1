// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography as TypographyMUI } from "@mui/material";

const ContainerEmpty = styled(Box)`
    width: 100%;
    height: 450px;
    display: flex;
    flex-direction: column;
`;
const ButtonWrapper = styled(Box)`
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const BgWrapper = styled(Box)`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
        width: 150px;
        height: 150px;
        color: ${({ theme }) => theme.PRIMARY};

    }
`;

const Typography = styled(TypographyMUI)`
    margin-top: 25px;
    color: ${({ theme }) => theme.PRIMARY};
`;

export const EmptyComponentStyle = {
    ContainerEmpty,
    BgWrapper,
    Typography,
    ButtonWrapper,
};
