// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Container = styled(Box)`
    display: flex;
    background-color: ${({ theme }) => theme.BACKGROUND};
`;
const Content = styled(Box)`
    width: ${({ isOpenDrawer }) =>
        isOpenDrawer ? "calc(100% - 240px)" : "100%"};
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 12px;
    margin-right: auto;
    transition: 0.2s linear;
    height: 100%;

    @media (max-width: 880px) {
        width: 100%;
        padding-bottom: calc(56px + 12);
    }
`;

const Main = styled.main`
    
    height: calc(100% - 90px);
    margin: 25px 0;
`;


export const MainLayoutStyle = {
    Container,
    Content,
    Main
};
