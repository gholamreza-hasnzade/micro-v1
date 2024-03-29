// * Import Tools
import styled from "@emotion/styled/macro";
import {
    Box,
    TableContainer as TableContainerMUI,
    Table as TableMUI,
    TableHead as TableHeadMUI,
    TableRow as TableRowMUI,
    TableCell as TableCellMUI,
    TableBody as TableBodyMUI,
    Typography as TypographyMUI,
    MenuItem as MenuItemMUI,
} from "@mui/material";
import { Link as LinkRRD } from "react-router-dom";
import { Form } from "formik";

const FlexCenterSB = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const FlexCenterEnd = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 25px;
`;

const FlexBoxCenterJc = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px;
`;
const FlexGap10 = styled(Box)`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    gap: 10px;

    @media (max-width: 880px) {
        flex-direction: column;
    }
`;

const FlexBoxDirColumn = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 100%;
`;
const SubmitForm = styled(Form)`
    width: 70%;
    max-width: 70%;
    background: ${({ theme }) => theme.SURFACE};
    padding: 25px;
    display: flex;
    flex-direction: column;
    border-radius: 6px;

    @media (max-width: 880px) {
        width: 100%;
        max-width: 100%;
    }
`;
const ActionForm = styled(Box)`
    width: 30%;
    max-width: 30%;
    padding: 25px;
    border-radius: 6px;
    background: ${({ theme }) => theme.SURFACE};

    @media (max-width: 880px) {
        width: 100%;
        max-width: 100%;
    }
`;

const FlexBoxCenter = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    //margin-bottom: 25px;
     &:not(:last-child) {
        margin-bottom: 25px;
    }
`;
const FormControlInput = styled(Box)`
    width: 100%;
    //height: 50px;
`;

/* table style */
const RowMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 320px;
    //height: calc(100vh - 350px);
`;
const TableContainer = styled(TableContainerMUI)``;
const Table = styled(TableMUI)``;
const TableHead = styled(TableHeadMUI)``;
const TableRow = styled(TableRowMUI)`
    background-color: #6b728e;
`;
const TableCell = styled(TableCellMUI)`
    color: ${({ theme }) => theme.PRIMARY};
    border-bottom: 1px solid #6b728e !important;
`;
const TableBody = styled(TableBodyMUI)``;
const TableRowBody = styled(TableRowMUI)`
    &:last-child td,
    &:last-child th {
        border: 0;
    }
`;
const TableCellBody = styled(TableCellMUI)`
    color: #b4b7bd !important;
    border-bottom: 1px solid #6b728e !important;
`;
const TableCellAction = styled(Box)`
    display: flex;
    align-item: center;
    gap: 15px;
`;
const TableCellLink = styled(LinkRRD)`
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    svg {
        color: #b4b7bd;
        width: 18px;
        transition: 0.3s;
    }

    &:hover svg {
        color: ${({ theme }) => theme.PRIMARY};
    }
`;
const TableCellEdit = styled(Box)`
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    svg {
        color: #b4b7bd;
        width: 18px;
        transition: 0.3s;
    }
    &:hover svg {
        color: ${({ theme }) => theme.PRIMARY};
    }
`;

/* table style */

/* preview style */
const RowPreview = styled(RowMain)`
    padding: 25px;
    border-top: 3px solid ${({ theme }) => theme.PRIMARY};
`;
const PreviewList = styled.ul``;
const PreviewListItem = styled.li`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;
const PreviewListItemCaption = styled(TypographyMUI)`
    color: ${({ theme }) => theme.PRIMARY};
    font-size: 16px;
    font-weight: 700;
    padding-right: 5px;
`;
const PreviewListTitle = styled(TypographyMUI)`
    color: ${({ theme }) => theme.WHITE};
`;

const Overlay = styled(Box)`
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(34, 40, 49, 0.5); /* Black background with opacity */
    cursor: pointer; /* Add a pointer on hover */
`;

const MenuItem = styled(MenuItemMUI)``;

export const GlobalStyle = {
    FlexCenterSB,
    FlexBoxDirColumn,
    SubmitForm,
    FlexGap10,
    ActionForm,
    FlexBoxCenter,
    FlexBoxCenterJc,
    FormControlInput,
    FlexCenterEnd,
    RowMain,
    Overlay,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableRowBody,
    TableBody,
    TableCellBody,
    TableCellAction,
    TableCellLink,
    TableCellEdit,

    RowPreview,
    PreviewList,
    PreviewListItem,
    PreviewListItemCaption,
    PreviewListTitle,
    MenuItem,
};
