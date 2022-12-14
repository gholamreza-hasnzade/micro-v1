// * Import Tools
import styled from "@emotion/styled/macro";
import { Pagination as PaginationMUI } from "@mui/material";

const Pagination = styled(PaginationMUI)`
    & li button {
        color: #fff;
        border: 1px solid ${({ theme }) => theme.SURFACE};
    }
`;
export const PaginationComponentStyle = {
    Pagination,
};
