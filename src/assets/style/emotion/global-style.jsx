// * Import Tools
import styled from "@emotion/styled/macro";
import { Box } from "@mui/system";

const FlexCenterSB = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FlexGap10 = styled(Box)`
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 10px;
`;

const FlexBoxDirColumn = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const SubmitForm = styled(Box)`
    width: 70%;
    max-width: 70%;
    background: ${({ theme }) => theme.SURFACE};
    padding: 25px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
`;
const ActionForm = styled(Box)`
    width: 30%;
    max-width: 30%;
    padding: 25px;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};
`;

const FlexBoxCenter = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    &:not(:last-child){
        margin-bottom: 25px;
    }
`;
const FormControlInput = styled(Box)`
    width: 100%;
`;

export const GlobalStyle = {
    FlexCenterSB,
    FlexBoxDirColumn,
    SubmitForm,
    FlexGap10,
    ActionForm,
    FlexBoxCenter,
    FormControlInput
};
