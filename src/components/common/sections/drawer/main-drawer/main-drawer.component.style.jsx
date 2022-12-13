// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";
import { Link, NavLink as NavLinkRRD } from "react-router-dom";

const Drawer = styled(Box)`
    width: ${({ isopen }) => (isopen ? "280px" : "75px")};
    background-color: ${({ theme }) => theme.SURFACE};
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    right: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.SURFACE};
    padding-top: 35px;
    @media (max-width: 880px) {
        width: ${({ isopen }) => (isopen ? "280px" : "0")};
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
`;

const DraweRow = styled(Box)`
    width: 100%;
    height: 60px;
    padding: 10px 15px 0px 15px;
    color: #625f6e;
    margin-top: 15px;
`;

const NavLink = styled(NavLinkRRD)`
    display: block;
    height: 100%;
    border-radius: 6px;
    margin-bottom: 15px;

`;

const RowDisplay = styled(Box)`
    display: flex;
    align-items: center;
    height: 100%;
    background: ${({ active }) =>
        active
            ? "linear-gradient(-118deg, #dfa612,  rgb(0 0 0 / 0%))"
            : ""};
    box-shadow: ${({ active }) =>
        active ? "0 0 10px 1px rgb(231 255 34 / 70%)" : ""};
    color: ${({ active }) => (active ? "#fff" : "#dfa612")};
    border-radius: 5px;
`;
const Icon = styled(Box)`
    margin: 0 10px;
`;
const Display = styled(Box)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 16px;
`;

const RowIsOpen = styled(Link)`
  display: flex;
  align-items: center;
`;
export const MainDrawerComponentStyle = {
    Drawer,
    Logo,
    DraweRow,
    NavLink,
    RowDisplay,
    Icon,
    Display,
    RowIsOpen
};
