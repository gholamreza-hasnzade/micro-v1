// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Home = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
`;

const RowBasket = styled(Box)`
    padding: 25px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const LengthBasket = styled(Box)`
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 13px;
`;
export const HomeViewStyle = {
    Home,
    RowBasket,
    LengthBasket,
};
