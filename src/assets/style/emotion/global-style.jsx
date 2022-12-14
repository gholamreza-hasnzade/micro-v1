// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const FlexCenterSB = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FlexBoxDirColumn = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const GlobalStyle = {
    FlexCenterSB,
    FlexBoxDirColumn,
};
