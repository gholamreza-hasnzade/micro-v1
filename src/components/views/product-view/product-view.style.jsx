// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const Product = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
`;

export const ProductViewStyle = {
    Product,
};
