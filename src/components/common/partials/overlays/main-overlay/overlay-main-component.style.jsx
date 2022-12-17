// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Overlay = styled(Box)`
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(34, 40, 49, 0.5); /* Black background with opacity */
    z-index: 99; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    display: none;
    @media (max-width: 880px) {
        display: ${({ isOpenDrawer }) => (isOpenDrawer ? "block" : "none")};
    }
`;
export const OverlayMainComponentStyle = {
    Overlay,
};
