// * Import Tools
import styled from "@emotion/styled/macro";
import { Button as ButtonMUI } from "@mui/material";

const Button = styled(ButtonMUI)`
    min-width: 100%;
    background-color: ${({ theme }) => theme.PRIMARY};
    color: ${({ theme }) => theme.WHITE} !important;
    font-size: 13px;
    padding: 8px 10px;
    margin-bottom: 16px;
    &:hover {
        background-color: rgb(223 166 18 / 35%);
    }
`;
export const SubmitButtonComponentStyle = {
    Button,
};
