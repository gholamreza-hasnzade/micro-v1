// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography as TypographyMUI } from "@mui/material";

const Container = styled(Box)`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.BACKGROUND};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Row = styled(Box)`
    width: 450px;
    height: 450px;
    border: 3px solid ${({ theme }) => theme.PRIMARY};
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 25px;
`;
const Wapper = styled(Box)`
    width: 100%;
    height: 100%;
    padding: 30px;
    position: relative;
    & .page404 {
        position: absolute;
        right: 25px;
        width: 400px;
        height: 400px;
        animation: MoveUpDown 3s linear;
    }

    @keyframes MoveUpDown {
        0%,50% {
            top: 420px;
        }
        100% {
            top: 0;
        }
    }
`;
const Typography = styled(TypographyMUI)`
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 18px;
    margin: 15px;
    font-weight: 700;
`;

export const View404Style = {
    Container,
    Row,
    Wapper,
    Typography,
};
