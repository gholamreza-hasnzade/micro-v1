// * Import Tools
import styled from "@emotion/styled/macro";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GlobalStyle } from "@global/emotion/global-style";

const RowDeleteModal = styled(Box)`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 500px;
    background: #6b728e;
    padding: 25px;
    z-index: 105;
    transform: translate(-50%, -50%);
    display:  none;
    &.isOpen {
        display: flex;
    }
    //display: ${({ isopen }) => (isopen ? "flex" : "none")};
    border: 1px solid #ffb800;
    border-radius: 6px;
    flex-direction: column;
`;

const RowImage = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    svg {
        width: 50px;
        height: 50px;
        color: ${({ theme }) => theme.PRIMARY};
    }
`;

const Title = styled(Typography)`
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.WHITE}; ;
`;

const RowButton = styled(Box)`
    width: 100px;
    margin-top: 20px;
    button {
        margin-bottom: 0;
    }
`;

const Overly = styled(GlobalStyle?.Overlay)`
    z-index: 104; /* Specify a stack order in case you're using a different order for other elements */
    display: ${({ isopen }) => (isopen ? "block" : "none")};
    display:  none;
    &.isOpen {
        display: block;
    }
`;

export const DeleteModalComponentStyle = {
    RowDeleteModal,
    RowImage,
    Title,
    RowButton,
    Overly,
};
