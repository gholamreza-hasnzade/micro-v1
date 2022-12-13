// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Drawer = styled(Box)`
    width: ${({ isOpen }) => (isOpen ? "240px" : "75px")};
    background-color: ${({ theme }) => theme.SURFACE};
    display: flex;
    flex-direction: column;
    height: 100vh;
    position: relative;
    right: 0;
    overflow-x: hidden;
`;

export const MainDrawerComponentStyle = {
    Drawer,
};
