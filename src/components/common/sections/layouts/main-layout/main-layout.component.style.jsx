// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Container = styled(Box)`
    display: flex;
    background-color: ${({ theme }) => theme.BACKGROUND};
`;
const MainLayout = styled(Box)`
    width: ${({ isOpenDrawer }) =>
        isOpenDrawer ? "calc(100% - 240px)" : "100%"};
    padding: 20px;
    padding-bottom: 12px;
    margin-right: auto;
    transition: 0.2s linear;
    height: 100vh;
    @media (max-width: 880px) {
        width: 100%;
        height: 100%;
        padding-bottom: calc(56px + 12px);
    }
    @media (max-width: 360px) {
       height: 100%;
    }
`;
const Content = styled(Box)`
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;
const Main = styled.main`
    //height: calc(100vh - 263px);
    margin: 25px 0;
    @media (max-width: 360px) {
        height: 100%;
    }
`;

export const MainLayoutStyle = {
    Container,
    MainLayout,
    Content,
    Main,
};
