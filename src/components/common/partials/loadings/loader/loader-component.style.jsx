// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";

const Conatiner = styled(Box)`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.BACKGROUND};
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loader = styled(Box)`
    border: 5px solid ${({ theme }) => theme.WHITE};
    border-radius: 50%;
    border-top: 5px solid ${({ theme }) => theme.PRIMARY};
    border-bottom: 5px solid ${({ theme }) => theme.PRIMARY};
    width: 40px;
    height: 40px;
    -webkit-animation: spin 3s linear infinite; /* Safari */
    animation: spin 3s linear infinite;

    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export const LoaderComponentStyle = {
    Conatiner,
    Loader,
};
