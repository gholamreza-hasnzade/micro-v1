// * Import Tools
import styled from "@emotion/styled/macro";
import { Button as ButtonMUI } from "@mui/material";

const Button = styled(ButtonMUI)`
    min-width: 100%;
    border: 1px solid ${({ theme }) => theme.PRIMARY};
    color: #fff;
    font-size: 15px;
    padding: 12px 10px;
`;

export const OutlineButtonComponentStyle = {
    Button,
};
