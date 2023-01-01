// * Import Tools
import styled from "@emotion/styled/macro";
import { Box as BoxMUI } from "@mui/system";

const Container = styled(BoxMUI)`
    position: fixed;
    right: 0;
    width: auto;
    height: 100vh;
    z-index: 9;
    display: flex;
    flex-direction: row;
`;

const WapperAction = styled(BoxMUI)`
    position: relative;
    width: 22px;
    overflow: hidden;
`;
const Action = styled(BoxMUI)`
    position: absolute;
    background-color: ${({ theme }) => theme.PRIMARY};
    border-radius: 50%;
    width: 45px;
    height: 45px;
    z-index: 98;
    cursor: pointer;
`;
const Box = styled(BoxMUI)`
    background-color: ${({ theme }) => theme.SURFACE};
    border-left:  1px solid ${({ isopen , theme }) => (isopen ? theme.PRIMARY : theme.SURFACE )} ;   
    padding: ${({isopen}) => (isopen? "15px" : 0)};
    display: flex;
    flex-direction: column;
    height: 100%;
    width: ${({ isopen }) => (isopen ? "280px" : "0")};
`;
export const MainSettingComponentStyle = {
    Container,
    WapperAction,
    Action,
    Box,
};
