// * Import Tools
import styled from "@emotion/styled/macro";
import { Box, Typography as TypographyMUI } from "@mui/material";

const ToastifyHeader = styled(Box)`
    background: red;
`;
const SuccessWrapper = styled(Box)`
    width: 100%;
    text-align: left;
`;
const ErrorWrapper = styled(Box)``;
const WarningWrapper = styled(Box)``;
const InfoWrapper = styled(Box)``;
const Typography = styled(TypographyMUI)``;

export const ToastNotificationComponentStyle = {
    ToastifyHeader,
    SuccessWrapper,
    ErrorWrapper,
    WarningWrapper,
    InfoWrapper,
    Typography,
};
