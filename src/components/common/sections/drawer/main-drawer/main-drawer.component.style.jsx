// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Drawer = styled(Box)`
    width: ${({ isopen }) => (isopen ? "240px" : "75px")};
    background-color: ${({ theme }) => theme.SURFACE};
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    right: 0;
    overflow-x: hidden;
    background: #404258;

    @media (max-width: 880px) {
        width: ${({ isopen }) => (isopen ? "240px" : "0")};
        position: absolute;
        padding-top: 10px;
        z-index: 10;
        left: 0;
    }

    @media (max-width: 360px) {
        width: ${({ isopen }) => (isopen ? "240px" : "0")};
        position: absolute;
        padding-top: 10px;
        z-index: 10;
        right: 0;
    }
`;

export const MainDrawerComponentStyle = {
    Drawer,
};
