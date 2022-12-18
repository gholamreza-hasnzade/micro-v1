// * Import Tools
import styled from "@emotion/styled/macro";
import { GlobalStyle } from "@global/emotion/global-style";

const Overlay = styled(GlobalStyle?.Overlay)`
    z-index: 99; /* Specify a stack order in case you're using a different order for other elements */
    display: none;
    @media (max-width: 880px) {
        display: ${({ isopendrawer }) => (isopendrawer ? "block" : "none")};
    }
`;
export const OverlayMainComponentStyle = {
    Overlay,
};
