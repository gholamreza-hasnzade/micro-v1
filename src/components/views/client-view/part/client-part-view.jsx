// * import tools
import React, { useState } from "react";
import * as I from "react-feather";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

//* import style
import { GlobalStyle as GS } from "@global/emotion/global-style";

// * import components
import { Tooltip } from "@components/common/partials";
import { DeleteModal } from "@components/common/segment";

// * import store
import { deleteUser } from "@redux/slices/client/client-redux-action";

const ClientPartView = ({ data, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleIsOpenModal = () => {
        setIsOpen(!isOpen);
    };
    const handleEditClick = () => {
        navigate(`/client/edit/${data?.id}`);
    };
    return (
        <>
            <DeleteModal
                isOpen={isOpen}
                handleClose={handleIsOpenModal}
                onDelete={() => deleteUser(data?.id)}
                setIsOpen={setIsOpen}
            />
            <GS.TableRowBody>
                <GS.TableCellBody>{index + 1}</GS.TableCellBody>
                <GS.TableCellBody>{data?.first_name}</GS.TableCellBody>
                <GS.TableCellBody> {data?.last_name} </GS.TableCellBody>
                <GS.TableCellBody> {data?.phone} </GS.TableCellBody>
                <GS.TableCellBody> {data?.email}</GS.TableCellBody>
                <GS.TableCellBody> {data?.address} </GS.TableCellBody>
                <GS.TableCellBody>
                    <GS.TableCellAction>
                        <Tooltip title={t("details")}>
                            <GS.TableCellLink
                                to={`/client/preview/${data?.id}`}
                            >
                                <I.Eye />
                            </GS.TableCellLink>
                        </Tooltip>
                        <Tooltip title={t("edit")}>
                            <GS.TableCellEdit onClick={handleEditClick}>
                                <I.Edit />
                            </GS.TableCellEdit>
                        </Tooltip>

                        <Tooltip title={t("delete")}>
                            <GS.TableCellEdit onClick={handleIsOpenModal}>
                                <I.Trash />
                            </GS.TableCellEdit>
                        </Tooltip>
                    </GS.TableCellAction>
                </GS.TableCellBody>
            </GS.TableRowBody>
        </>
    );
};

export default ClientPartView;
