// * Import Tools
import styled from "@emotion/styled/macro";
import { NavLink } from "react-router-dom";

const Button = styled(NavLink)`
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.75;
    min-width: 64px;
    padding: 6px 8px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.PRIMARY};
    color: ${({ theme }) => theme.WHITE} !important;
    min-width: 100px;
    text-align: center;
`;

export const LinkButtonComponentStyle = {
    Button,
};
