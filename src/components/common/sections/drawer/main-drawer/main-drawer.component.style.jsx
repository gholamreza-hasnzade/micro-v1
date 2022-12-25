// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";
import { Link, NavLink as NavLinkRRD } from "react-router-dom";

const Drawer = styled(Box)`
    width: 280px;
    // width: ${({ isopen }) => (isopen ? "280px" : "75px")};
    background-color: ${({ theme }) => theme.SURFACE};
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    right: 0;
    overflow-x: hidden;
    background: ${({ theme }) => theme.SURFACE};
    padding-top: 35px;
    z-index: 100;
    &.isOpen {
        width: 75px;
    }
    @media (max-width: 880px) {
      //  width: ${({ isopen }) => (isopen ? "280px" : "0")};
        position: absolute;
        padding-top: 50px;
        left: 0;
        &.isOpen {
            width: 0;
        }
    }

    @media (max-width: 360px) {
        width: ${({ isopen }) => (isopen ? "280px" : "0")};
        position: absolute;
        padding-top: 10px;
        z-index: 10;
        right: 0;
        &.isOpen {
            width: "0";
        }
    }
`;

const RowLogo = styled(Box)`
    display: flex;
    justify-content: space-between;
    padding: 0 19px;
    align-items: center;

    & svg {
        cursor: pointer;
        color: ${({ theme }) => theme.PRIMARY};
    }
`;
const Logo = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 100px;
    img {
        width: 100%;
    }
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
    height: 50px;
    background: ${({ active, theme }) => (active ? `${theme.PRIMARY}` : "")};
    color: ${({ active, theme }) =>
        active ? `${theme.WHITE}` : `${theme.PRIMARY}`};
    border-radius: 5px;
`;
const Icon = styled(Box)`
    margin: 0 10px;
    display: flex;
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

const RowIcon = styled(Box)`
    display: flex;
    color: ${({ theme }) => theme.PRIMARY};
    /*  @media (max-width: 880px) {
        display: none;
    } */
`;
export const MainDrawerComponentStyle = {
    Drawer,
    Logo,
    DraweRow,
    NavLink,
    RowDisplay,
    Icon,
    Display,
    RowIsOpen,
    RowIcon,
    RowLogo,
};
