// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Container = styled(Box)`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.BACKGROUND};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Row = styled(Box)`
    width: 450px;
    height: 450px;
    border: 3px solid ${({ theme }) => theme.PRIMARY};
    overflow: hidden;
    border-radius: 50%;
`;
const Wapper = styled(Box)`
    width: 100%;
    height: 100%;
    padding: 30px;
    position: relative;
    & img {
        position: absolute;
        right: 25px;
        top: 0;
        bottom: 0;
        width: 400px;
        height: 400px;
        transform: translateY(420px);
        &.active {
            transform: translateY(0);
        }
    }
`;

export const View404Style = {
    Container,
    Row,
    Wapper,
};
