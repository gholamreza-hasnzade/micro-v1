// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Home = styled(Box)`
   display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25px;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
`;

export const HomeViewStyle = {
    Home,
};
