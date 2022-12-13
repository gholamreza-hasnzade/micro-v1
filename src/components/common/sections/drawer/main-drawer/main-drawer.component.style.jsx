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
    background: ${({ theme }) => theme.SURFACE};
    padding-top: 35px ;
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

const Logo = styled(Box)`
    display: flex;
    justify-content: center;
    width: 100%;
`


export const MainDrawerComponentStyle = {
    Drawer,
    Logo
};
